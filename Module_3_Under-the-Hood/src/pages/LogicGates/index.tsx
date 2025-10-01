import { useState } from "react";
import { Gate } from "./Gate";
import { ALUTable } from "./ALUTable";

type View = 'GRAPHIC'|'IMAGE'
export type GateType = 'AND'|'OR'

const LogicGates = () => {
  const link: string = "https://academo.org/demos/logic-gate-simulator/";
  const imgURL: string = 'https://upload.wikimedia.org/wikipedia/commons/d/d7/SN74S181N.JPG'
  const [gateType, setGateType] = useState<GateType>('AND')
  const [inputA, setInputA] = useState<boolean>(false)
  const [inputB, setInputB] = useState<boolean>(false)
  const [view, setView] = useState<View>('GRAPHIC')
  
  const output: boolean = inputA && inputB

  const handleInputAClick = () => setInputA(prev => !prev)
  const handleInputBClick = () => setInputB(prev => !prev)
  const switchView = () => setView(prev => prev === 'GRAPHIC' ? 'IMAGE' : 'GRAPHIC')
  const switchGateType = () => setGateType(prev => prev === 'AND' ? 'OR' : 'AND')

  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h1 className="text-4xl font-bold mb-4 text-center text-mhfd-dark-blue">Gateway to Complexity</h1>
      </a>
      
      <div className="flex flex-col items-center mt-8 p-6 bg-gray-100 rounded-lg">
        <div className="flex flex-row justify-between items-center w-full mb-4">
          {view === 'GRAPHIC' ?
            <button type="button" onClick={switchGateType} className="cursor-pointer mb-4 px-4 py-2 bg-medium-green text-white rounded hover:bg-mhfd-blue transition-colors">
              {gateType === 'AND' ? 'OR' : 'AND'} Gate
            </button>
          :
            <div></div>}
          <h2 className="text-2xl font-bold mb-4 text-mhfd-dark-blue">{view === 'GRAPHIC' ? (gateType === 'AND' ? 'AND Gate' : 'OR Gate') : 'Arithmetic Logic Unit'}</h2>
          <button type="button" onClick={switchView} className="cursor-pointer mb-4 px-4 py-2 bg-medium-green text-white rounded hover:bg-mhfd-blue transition-colors">
            {view === 'GRAPHIC' ? 'ALU' : 'AND Gate'}
          </button>
        </div>
        {view === 'GRAPHIC' ?
          <p className="mb-6 text-center text-gray-700">The 3 main types of Logic Gate are AND, OR, and NOT.</p>
          :
          <p className="mb-6 text-center text-gray-700">An ALU is a critical component of a computer's CPU that performs arithmetic and logical operations on binary data.</p>}
        {view === 'GRAPHIC' ?
          <div className="flex flex-row gap-8">
            <Gate
              gateType={gateType}
              inputA={inputA}
              inputB={inputB}
              output={output}
              handleInputAClick={handleInputAClick}
              handleInputBClick={handleInputBClick}
            />
            <ALUTable
              gateType={gateType}
              inputA={inputA}
              inputB={inputB}
            />
          </div>
        :
          <img src={imgURL} alt="Logic Gate Example" className="border border-gray-300 bg-white rounded max-w-full h-auto" />}
      </div>
    </>
  )
}

export default LogicGates;
