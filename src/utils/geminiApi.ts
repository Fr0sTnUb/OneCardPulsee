// Get API key from environment variable
// Note: Vite only exposes variables prefixed with VITE_ to the client
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'

// Debug: Log to verify env var is loaded (only in browser)
if (typeof window !== 'undefined') {
  console.log('🔍 Debug - Environment variables check:', {
    'VITE_GEMINI_API_KEY exists': !!import.meta.env.VITE_GEMINI_API_KEY,
    'VITE_GEMINI_API_KEY length': import.meta.env.VITE_GEMINI_API_KEY?.length || 0,
    'All VITE_ vars': Object.keys(import.meta.env).filter(k => k.startsWith('VITE_'))
  })
}

export interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string
      }>
    }
  }>
}

export interface GeminiError {
  error: {
    code: number
    message: string
    status: string
  }
}

/**
 * Generates marketing keywords using Google Gemini API
 * @param campaignContent - The campaign content or product description
 * @param priorityThemes - Comma-separated priority themes/focus areas
 * @returns Array of keyword clusters
 */
export async function generateMarketingKeywords(
  campaignContent: string,
  priorityThemes: string
): Promise<string[]> {
  // Debug: Log environment variable status
  console.log('Environment check:', {
    hasKey: !!GEMINI_API_KEY,
    keyLength: GEMINI_API_KEY?.length || 0,
    allEnv: Object.keys(import.meta.env).filter(k => k.includes('GEMINI'))
  })

  if (!GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is missing. Check .env file and restart dev server.')
    console.error('Available env vars:', Object.keys(import.meta.env))
    throw new Error('Gemini API key is not configured. Please check your environment variables and restart the dev server.')
  }

  if (!campaignContent.trim()) {
    throw new Error('Campaign content is required to generate keywords.')
  }

  // Construct a focused prompt for marketing keywords
  const prompt = `You are a marketing SEO expert specializing in fintech and credit card products. 

Analyze the following campaign content and generate 8-12 SEO-focused marketing keyword clusters that would be effective for digital marketing and content strategy.

Campaign Content:
${campaignContent}

Priority Themes/Focus Areas: ${priorityThemes || 'general fintech and credit cards'}

Requirements:
- Generate keyword clusters (2-4 word phrases) that are relevant to the campaign content
- Focus on SEO-friendly terms that potential customers would search for
- Consider the priority themes provided
- Return ONLY a comma-separated list of keywords, one per line
- Do not include explanations, just the keywords
- Make keywords specific and actionable for marketing campaigns

Example format:
Credit card rewards
Metal credit card benefits
No fees credit card
Digital banking rewards

Generate the keywords now:`

  try {
    const response = await fetch(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    )

    if (!response.ok) {
      const errorData: GeminiError = await response.json().catch(() => ({
        error: {
          code: response.status,
          message: response.statusText,
          status: 'ERROR',
        },
      }))

      if (errorData.error?.code === 429) {
        throw new Error('API rate limit exceeded. Please try again in a moment.')
      } else if (errorData.error?.code === 400) {
        throw new Error('Invalid request. Please check your input and try again.')
      } else if (errorData.error?.code === 401 || errorData.error?.code === 403) {
        throw new Error('API authentication failed. Please check your API key.')
      } else {
        throw new Error(
          errorData.error?.message || `API request failed with status ${response.status}`
        )
      }
    }

    const data: GeminiResponse = await response.json()

    if (!data.candidates || data.candidates.length === 0) {
      throw new Error('No response generated from the API. Please try again.')
    }

    const generatedText =
      data.candidates[0]?.content?.parts[0]?.text || ''

    if (!generatedText.trim()) {
      throw new Error('Empty response from API. Please try again.')
    }

    // Parse the response to extract keywords
    // Handle both comma-separated and newline-separated formats
    const keywords = generatedText
      .split(/[,\n]/)
      .map((keyword) => keyword.trim())
      .filter((keyword) => keyword.length > 0)
      .filter((keyword) => {
        // Filter out common non-keyword phrases
        const lowerKeyword = keyword.toLowerCase()
        return (
          !lowerKeyword.includes('example') &&
          !lowerKeyword.includes('format') &&
          !lowerKeyword.includes('requirements') &&
          !lowerKeyword.startsWith('generate') &&
          keyword.length > 3
        )
      })
      .slice(0, 12) // Limit to 12 keywords

    if (keywords.length === 0) {
      throw new Error(
        'Could not extract valid keywords from the response. Please try again.'
      )
    }

    return keywords
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error('An unexpected error occurred while generating keywords.')
  }
}

