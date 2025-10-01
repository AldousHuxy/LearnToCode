import type { GateType } from "."

type GateProps = {
    gateType: GateType
    inputA: boolean
    inputB: boolean
    output: boolean
    handleInputAClick: () => void
    handleInputBClick: () => void
}

export const Gate = ({ gateType, inputA, inputB, output, handleInputAClick, handleInputBClick }: GateProps) => {
    return (
        <svg width="300" height="200" viewBox="0 0 300 200" className="border border-gray-300 bg-white rounded">
            {gateType === 'AND' ? (
                <path
                    d="M 50 60 L 50 140 L 120 140 A 40 40 0 0 0 120 60 Z"
                    fill="#e5e7eb"
                    stroke="#374151"
                    strokeWidth="2"
                />
            ) : (
                <path
                    d="M 50 60 Q 120 60 160 100 Q 120 140 50 140 Q 85 100 50 60 Z"
                    fill="#e5e7eb"
                    stroke="#374151"
                    strokeWidth="2"
                />
            )}
            
            <line x1="10" y1="80" x2="50" y2="80" stroke="#374151" strokeWidth="2" />
            
            <line x1="10" y1="120" x2="50" y2="120" stroke="#374151" strokeWidth="2" />
            
            <line x1={gateType === 'AND' ? "160" : "160"} y1="100" x2="250" y2="100" stroke="#374151" strokeWidth="2" />
            
            <circle
                cx="10"
                cy="80"
                r="8"
                fill={inputA ? "#22c55e" : "#ef4444"}
                stroke="#374151"
                strokeWidth="2"
                className="cursor-pointer hover:opacity-80"
                onClick={handleInputAClick}
            />
            
            <circle
                cx="10"
                cy="120"
                r="8"
                fill={inputB ? "#22c55e" : "#ef4444"}
                stroke="#374151"
                strokeWidth="2"
                className="cursor-pointer hover:opacity-80"
                onClick={handleInputBClick}
            />
            
            <circle
                cx="250"
                cy="100"
                r="8"
                fill={output ? "#22c55e" : "#ef4444"}
                stroke="#374151"
                strokeWidth="2"
            />
            
            <text x="10" y="65" textAnchor="middle" className="text-sm font-bold fill-gray-700">A</text>
            <text x="10" y="145" textAnchor="middle" className="text-sm font-bold fill-gray-700">B</text>
            <text x="250" y="85" textAnchor="middle" className="text-sm font-bold fill-gray-700">OUT</text>
            <text x="105" y="105" textAnchor="middle" className="text-sm font-bold fill-gray-700">
                {gateType}
            </text>
        </svg>
    )
}