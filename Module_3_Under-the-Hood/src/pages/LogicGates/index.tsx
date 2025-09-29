import { useState } from "react";
import { InfoCard } from "@/components/InfoCard";

const LogicGates = () => {
  const link: string = "https://academo.org/demos/logic-gate-simulator/";

  const [inputA, setInputA] = useState<boolean>(false)
  const [inputB, setInputB] = useState<boolean>(false)
  
  const output: boolean = inputA && inputB

  const handleInputAClick = () => setInputA(prev => !prev)

  const handleInputBClick = () => setInputB(prev => !prev)

  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h1 className="text-4xl font-bold mb-4 text-center text-mhfd-dark-blue">Gateway to Complexity</h1>
        <InfoCard list={[
          <>Logic Gates are the building blocks of digital circuits.</>,
          <>The common types of logic gates are AND, OR, NOT, NAND, NOR, XOR, and XNOR.</>,
          <>They are used to perform basic operations on binary inputs.</>
        ]} />
      </a>
      
      <div className="flex flex-col items-center mt-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-mhfd-dark-blue">AND Gate</h2>
        <div className="flex flex-row gap-8">
          <svg width="300" height="200" viewBox="0 0 300 200" className="border border-gray-300 bg-white rounded">
            <path
              d="M 50 60 L 50 140 L 120 140 A 40 40 0 0 0 120 60 Z"
              fill="#e5e7eb"
              stroke="#374151"
              strokeWidth="2"
            />
            
            <line x1="10" y1="80" x2="50" y2="80" stroke="#374151" strokeWidth="2" />
            
            <line x1="10" y1="120" x2="50" y2="120" stroke="#374151" strokeWidth="2" />
            
            <line x1="160" y1="100" x2="250" y2="100" stroke="#374151" strokeWidth="2" />
            
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
            <text x="105" y="105" textAnchor="middle" className="text-sm font-bold fill-gray-700">AND</text>
          </svg>
          
          <div>
            <table className="border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Input A</th>
                  <th className="border border-gray-300 px-4 py-2">Input B</th>
                  <th className="border border-gray-300 px-4 py-2">Output</th>
                </tr>
              </thead>
              <tbody>
                <tr className={inputA === false && inputB === false ? "bg-yellow-200" : ""}>
                  <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                </tr>
                <tr className={inputA === false && inputB === true ? "bg-yellow-200" : ""}>
                  <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                </tr>
                <tr className={inputA === true && inputB === false ? "bg-yellow-200" : ""}>
                  <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                </tr>
                <tr className={inputA === true && inputB === true ? "bg-yellow-200" : ""}>
                  <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogicGates;
