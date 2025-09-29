import { useState } from "react";
import { InfoCard } from "@/components/InfoCard";
import { LuBinary } from "react-icons/lu";
import { BiSolidFileHtml } from "react-icons/bi";
import { FaJs } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiV8 } from "react-icons/si";
import { GoCpu } from "react-icons/go";

type AnimationState = 'idle' | 'running'
type OsSystem = 'Edge' | 'Chrome'

const CentralProcessingUnit = () => {
  const [animation, setAnimation] = useState<AnimationState>('idle')
  const [osSystem, setOsSystem] = useState<OsSystem>('Edge')

  const switchOsSystem = () => {
    setOsSystem(prev => prev === 'Edge' ? 'Chrome' : 'Edge')
  }
  
  const executeProgram = () => {
    setAnimation('running')
    setTimeout(() => setAnimation('idle'), 4000)
  }


  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-center text-mhfd-dark-blue">Still just 0's and 1's</h1>
      <InfoCard list={[
        <>Software is a set of instructions that tells the hardware what to do.</>,
        <>Firmware is a type of software that is embedded into hardware devices.</>,
        <>All coding languages are ultimately transformed into machine code that the CPU can execute.</>
      ]} />
      
      <div className="flex justify-around mt-4">
        <button
          onClick={switchOsSystem}
          className="cursor-pointer px-6 py-2 bg-medium-green text-white rounded border hover:border-mhfd-dark-blue hover:text-mhfd-dark-blue"
        >
          {osSystem === 'Edge' ? 'Microsoft Edge' : 'Google Chrome'}
        </button>
        <button 
          onClick={executeProgram}
          disabled={animation === 'running'}
          className="cursor-pointer px-6 py-2 bg-medium-green text-white rounded border hover:border-mhfd-dark-blue hover:text-mhfd-dark-blue disabled:opacity-50"
        >
          {animation === 'running' ? 'Executing Program...' : 'Execute Program'}
        </button>
      </div>

      <div className="relative flex justify-between items-center mt-8 p-6 bg-gray-100 rounded-lg overflow-hidden">
        <style>{`
          @keyframes moveToEngine {
            0% { transform: translateX(0); opacity: 1; }
            25% { transform: translateX(150px); opacity: 1; }
            50% { transform: translateX(150px); opacity: 0; }
            100% { transform: translateX(150px); opacity: 0; }
          }
          
          @keyframes enginePulse {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.2); color: #16a34a; }
            50% { transform: scale(1.1); color: #22c55e; }
            75% { transform: scale(1.2); color: #16a34a; }
          }
          
          @keyframes binaryAppear {
            0%, 50% { transform: translateX(-50px) scale(0); opacity: 0; }
            60% { transform: translateX(0) scale(1.2); opacity: 1; }
            75% { transform: translateX(0) scale(1); opacity: 1; }
            90% { transform: translateX(150px) scale(0.8); opacity: 0.8; }
            100% { transform: translateX(150px) scale(0); opacity: 0; }
          }
          
          @keyframes cpuPulse {
            0%, 89% { transform: scale(1); }
            90% { transform: scale(1.3); color: #16a34a; }
            95% { transform: scale(1.1); color: #22c55e; }
            100% { transform: scale(1); }
          }
          
          .animate-code {
            animation: moveToEngine 4s ease-in-out;
          }
          
          .animate-engine {
            animation: enginePulse 4s ease-in-out;
          }
          
          .animate-binary {
            animation: binaryAppear 4s ease-in-out;
          }
          
          .animate-cpu {
            animation: cpuPulse 4s ease-in-out;
          }
        `}</style>

        <div className="flex flex-col justify-center gap-4 relative">
          <BiSolidFileHtml 
            className={`text-6xl text-mhfd-dark-blue mx-4 ${animation === 'running' ? 'animate-code' : ''}`}
            style={{ animationDelay: '0s' }}
          />
          <SiCsswizardry 
            className={`text-6xl text-mhfd-dark-blue mx-4 ${animation === 'running' ? 'animate-code' : ''}`}
            style={{ animationDelay: '0.3s' }}
          />
          <FaJs 
            className={`text-6xl text-mhfd-dark-blue mx-4 ${animation === 'running' ? 'animate-code' : ''}`}
            style={{ animationDelay: '0.6s' }}
          />
        </div>

        {osSystem === 'Chrome' ? (
          <SiV8 
            className={`text-6xl text-mhfd-dark-blue mx-4 my-auto ${animation === 'running' ? 'animate-engine' : ''}`} 
          />
        ) : (
          <SiChakraui 
            className={`text-6xl text-mhfd-dark-blue mx-4 my-auto ${animation === 'running' ? 'animate-engine' : ''}`} 
          />
        )}

        <LuBinary 
          className={`text-6xl text-mhfd-dark-blue mx-4 my-auto ${animation === 'running' ? 'animate-binary' : ''}`} 
        />
        
        <GoCpu 
          className={`text-6xl text-mhfd-dark-blue mx-4 my-auto ${animation === 'running' ? 'animate-cpu' : ''}`} 
        />
        
        {animation === 'running' && (
          <>
            <div className="absolute left-32 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400 animate-pulse">
              →
            </div>
            <div className="absolute left-80 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400 animate-pulse" 
                 style={{ animationDelay: '1s' }}>
              →
            </div>
            <div className="absolute right-32 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400 animate-pulse"
                 style={{ animationDelay: '2s' }}>
              →
            </div>
          </>
        )}
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Watch how source code (HTML, CSS, JS) gets processed through the {osSystem === 'Chrome' ? 'Chrome V8 engine' : 'Chakra UI engine'}, converted to binary, and executed by the CPU</p>
      </div>
    </>
  )
}

export default CentralProcessingUnit;
