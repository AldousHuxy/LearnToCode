export const ORGate = () => {
  return (
        <svg width="200" height="200" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: "#4f46e5", stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: "#3b82f6", stopOpacity: 1}} />
                </linearGradient>
            </defs>
            <g transform="translate(10,10) scale(0.8)">
                {/* OR Gate */}
                <g>
                    <path d="M10 10 Q30 30 10 50 Q30 70 10 90 H40 A20 20 0 0 1 60 70 V30 A20 20 0 0 1 40 10 Z" fill="url(#grad2)" stroke="#000" strokeWidth="2"/>
                    <circle cx="5" cy="30" r="5" fill="#000"/>
                    <circle cx="5" cy="70" r="5" fill="#000"/>
                    <circle cx="65" cy="50" r="5" fill="#000"/>
                    <text x="25" y="55" fontSize="12" fill="#fff">OR</text>
                </g>
            </g>
        </svg>
  )
}