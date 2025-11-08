const FintechWorkspaceImage = () => {
  return (
    <div className="fintech-workspace">
      <svg viewBox="0 0 400 600" className="workspace-svg" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        {/* Background gradient */}
        <defs>
          <linearGradient id="workspaceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(15, 23, 42, 0.7)" />
            <stop offset="50%" stopColor="rgba(30, 41, 59, 0.6)" />
            <stop offset="100%" stopColor="rgba(15, 23, 42, 0.7)" />
          </linearGradient>
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0.4)" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
          </filter>
        </defs>
        
        {/* Background */}
        <rect width="100%" height="100%" fill="url(#workspaceGradient)" />
        
        {/* Chandelier/Lighting fixture - top center */}
        <g opacity="0.7">
          <circle cx="200" cy="80" r="30" fill="rgba(59, 130, 246, 0.4)" />
          <circle cx="200" cy="80" r="18" fill="rgba(59, 130, 246, 0.3)" />
          <line x1="200" y1="60" x2="200" y2="40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
          <line x1="175" y1="75" x2="160" y2="65" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
          <line x1="225" y1="75" x2="240" y2="65" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
          {/* Glow effect */}
          <circle cx="200" cy="80" r="35" fill="rgba(59, 130, 246, 0.15)" filter="url(#blur)" />
        </g>
        
        {/* Desk/Workspace elements - bottom left */}
        <g opacity="0.8">
          {/* Desk surface */}
          <rect x="50" y="450" width="200" height="120" fill="rgba(30, 41, 59, 0.8)" rx="8" />
          {/* Laptop screen */}
          <rect x="80" y="420" width="140" height="90" fill="url(#screenGradient)" rx="4" />
          <rect x="85" y="425" width="130" height="80" fill="rgba(15, 23, 42, 0.9)" rx="2" />
          {/* Screen content lines */}
          <line x1="95" y1="445" x2="205" y2="445" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="2.5" />
          <line x1="95" y1="460" x2="185" y2="460" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2.5" />
          <line x1="95" y1="475" x2="175" y2="475" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2.5" />
          {/* Laptop base */}
          <rect x="80" y="510" width="140" height="8" fill="rgba(30, 41, 59, 0.9)" rx="2" />
        </g>
        
        {/* Person silhouette - right side */}
        <g opacity="0.6">
          {/* Head */}
          <circle cx="320" cy="200" r="22" fill="rgba(59, 130, 246, 0.35)" />
          {/* Body */}
          <ellipse cx="320" cy="260" rx="28" ry="45" fill="rgba(59, 130, 246, 0.35)" />
          {/* Earbuds */}
          <circle cx="308" cy="195" r="5" fill="rgba(255, 255, 255, 0.5)" />
          <circle cx="332" cy="195" r="5" fill="rgba(255, 255, 255, 0.5)" />
        </g>
        
        {/* Second workspace - right center */}
        <g opacity="0.7">
          {/* Monitor */}
          <rect x="280" y="300" width="100" height="70" fill="rgba(30, 41, 59, 0.8)" rx="4" />
          <rect x="285" y="305" width="90" height="60" fill="rgba(59, 130, 246, 0.25)" rx="2" />
          {/* Monitor content */}
          <line x1="295" y1="320" x2="360" y2="320" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" />
          <line x1="295" y1="335" x2="350" y2="335" stroke="rgba(59, 130, 246, 0.35)" strokeWidth="2" />
          {/* Monitor stand */}
          <rect x="325" y="370" width="10" height="20" fill="rgba(30, 41, 59, 0.8)" />
          <rect x="310" y="390" width="40" height="5" fill="rgba(30, 41, 59, 0.8)" rx="2" />
        </g>
        
        {/* Ambient light effects */}
        <g opacity="0.4">
          <circle cx="200" cy="300" r="150" fill="rgba(59, 130, 246, 0.15)" filter="url(#blur)" />
          <circle cx="320" cy="200" r="100" fill="rgba(14, 165, 233, 0.12)" filter="url(#blur)" />
        </g>
        
        {/* Data visualization elements - abstract */}
        <g opacity="0.6">
          {/* Chart-like elements */}
          <line x1="120" y1="350" x2="120" y2="320" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="4" strokeLinecap="round" />
          <line x1="140" y1="350" x2="140" y2="310" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="4" strokeLinecap="round" />
          <line x1="160" y1="350" x2="160" y2="300" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="4" strokeLinecap="round" />
          <line x1="180" y1="350" x2="180" y2="315" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="4" strokeLinecap="round" />
          {/* Chart base */}
          <line x1="110" y1="350" x2="190" y2="350" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  )
}

export default FintechWorkspaceImage

