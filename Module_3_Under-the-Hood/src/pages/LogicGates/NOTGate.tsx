export const NOTGate = () => {
  return (
        <svg width="200" height="200" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: "#4f46e5", stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: "#3b82f6", stopOpacity: 1}} />
                </linearGradient>
            </defs>
            <g transform="translate(10,10) scale(0.8)">
              {/* NOT Gate */}
                <g>
                    <path d="M10 10 L50 50 L10 90 Z" fill="url(#grad2)" stroke="#000" strokeWidth="2"/>
                    <circle cx="55" cy="50" r="5" fill="#000"/>
                    <circle cx="5" cy="50" r="5" fill="#000"/>
                    <text x="20" y="55" fontSize="12" fill="#fff">NOT</text>
                </g>
            </g>
        </svg>
  )
}