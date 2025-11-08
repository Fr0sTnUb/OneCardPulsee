interface IconProps {
  className?: string
  size?: number
}

export const NoFeesIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.5"/>
    <path d="M18 18L30 30M30 18L18 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="3" fill="currentColor"/>
  </svg>
)

export const MobileIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="14" y="6" width="20" height="36" rx="3" stroke="currentColor" strokeWidth="2"/>
    <rect x="18" y="10" width="12" height="20" rx="1" fill="currentColor" opacity="0.3"/>
    <circle cx="24" cy="35" r="2" fill="currentColor"/>
  </svg>
)

export const CardIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="8" y="14" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2"/>
    <rect x="12" y="18" width="24" height="4" rx="1" fill="currentColor" opacity="0.4"/>
    <rect x="12" y="26" width="16" height="3" rx="1" fill="currentColor" opacity="0.3"/>
    <rect x="12" y="32" width="12" height="3" rx="1" fill="currentColor" opacity="0.3"/>
    <circle cx="32" cy="30" r="3" fill="currentColor" opacity="0.2"/>
  </svg>
)

export const LightningIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M24 6L16 26H22L20 42L32 22H26L28 6H24Z" fill="currentColor"/>
    <path d="M24 6L16 26H22L20 42L32 22H26L28 6H24Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

export const GiftIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="12" y="20" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 20V40M12 20H36" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 12C20 10.8954 20.8954 10 22 10C23.1046 10 24 10.8954 24 12V20H20V12Z" fill="currentColor" opacity="0.3"/>
    <path d="M28 12C28 10.8954 27.1046 10 26 10C24.8954 10 24 10.8954 24 12V20H28V12Z" fill="currentColor" opacity="0.3"/>
    <rect x="16" y="24" width="4" height="4" fill="currentColor" opacity="0.4"/>
    <rect x="28" y="24" width="4" height="4" fill="currentColor" opacity="0.4"/>
  </svg>
)

export const EMIIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="8" y="16" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 22H36M12 28H36M12 34H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="34" cy="34" r="3" fill="currentColor" opacity="0.3"/>
  </svg>
)

export const FamilyIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="16" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="24" cy="28" r="6" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 20C16 24 18 28 24 28C30 28 32 24 32 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 36C12 32 14 30 20 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M36 36C36 32 34 30 28 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const EyeIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M24 14C14 14 6 22 4 24C6 26 14 34 24 34C34 34 42 26 44 24C42 22 34 14 24 14Z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.5"/>
  </svg>
)

export const UsersIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="18" cy="16" r="5" stroke="currentColor" strokeWidth="2"/>
    <circle cx="30" cy="16" r="5" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 32C12 28 14 26 18 26C22 26 24 28 24 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 32C24 28 26 26 30 26C34 26 36 28 36 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 18C20 16 21 14 24 14C27 14 28 16 28 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const NewIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
    <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
    <path d="M24 14V24H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const RefreshIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M38 22C38 16 34 10 28 8M10 26C10 32 14 38 20 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 8L32 12L28 16M20 40L16 36L20 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
  </svg>
)

export const ChartIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M8 36L8 32M16 36L16 24M24 36L24 28M32 36L32 20M40 36L40 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M8 32L16 24L24 28L32 20L40 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
  </svg>
)

export const ClockIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 12V24L30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="2" fill="currentColor"/>
  </svg>
)

export const FacebookIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const TwitterIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28446C14.0247 3.61174 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61232 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const InstagramIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5922C7.96035 11.7616 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79374 10.2009 8.40624C10.9477 8.01874 11.7977 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8716 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
  </svg>
)

export const LinkedInIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const YouTubeIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0707 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.42C2.92931 4.55318 2.50198 4.80824 2.16135 5.15941C1.82072 5.51057 1.57879 5.94541 1.46 6.42C1.14521 8.14188 0.991235 9.89163 1 11.65C0.991235 13.4084 1.14521 15.1581 1.46 16.88C1.57879 17.3546 1.82072 17.7894 2.16135 18.1406C2.50198 18.4918 2.92931 18.7468 3.4 18.88C5.12 19.3 12 19.3 12 19.3C12 19.3 18.88 19.3 20.6 18.88C21.0707 18.7468 21.498 18.4918 21.8387 18.1406C22.1793 17.7894 22.4212 17.3546 22.54 16.88C22.8548 15.1581 23.0088 13.4084 23 11.65C23.0088 9.89163 22.8548 8.14188 22.54 6.42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.75 15.02L15.5 11.65L9.75 8.28V15.02Z" fill="currentColor"/>
  </svg>
)

export const SparkleIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M24 4L26 18L38 20L26 22L24 36L22 22L10 20L22 18L24 4Z" fill="currentColor"/>
    <path d="M36 8L37 14L42 15L37 16L36 22L35 16L30 15L35 14L36 8Z" fill="currentColor" opacity="0.7"/>
    <path d="M12 28L13 32L16 33L13 34L12 38L11 34L8 33L11 32L12 28Z" fill="currentColor" opacity="0.6"/>
  </svg>
)

