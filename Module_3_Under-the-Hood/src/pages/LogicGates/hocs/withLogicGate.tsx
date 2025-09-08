import { useState, type ReactNode } from 'react';
import type { LogicGate } from '@/pages/LogicGates/types/gate';
import { FaLightbulb } from 'react-icons/fa';
import { FaRegLightbulb } from 'react-icons/fa';
import { FiToggleLeft } from 'react-icons/fi';
import { FiToggleRight } from 'react-icons/fi';

export const withLogicGate = (gate: LogicGate, children: ReactNode) => {
    const initialPower: boolean = false
    const [andAInput, setAndAInput] = useState<boolean>(initialPower)
    const [andBInput, setAndBInput] = useState<boolean>(initialPower)
    const [orAInput, setOrAInput] = useState<boolean>(initialPower)
    const [orBInput, setOrBInput] = useState<boolean>(initialPower)
    const [notAInput, setNotAInput] = useState<boolean>(initialPower)
    const [nandAInput, setNandAInput] = useState<boolean>(initialPower)
    const [nandBInput, setNandBInput] = useState<boolean>(initialPower)

    const iconStyle = (value: boolean) => value ? 'text-green-300 text-7xl' : 'text-red-300 text-7xl'

    if (gate === 'AND') return (
        <div className="flex flex-col items-center border-4 border-mhfd-dark-blue bg-linear-to-r from-mhfd-purple to-mhfd-blue mb-4 p-4 rounded-2xl shadow">
            <h1 className="text-center text-2xl font-bold mb-4">Logical <span className="text-2xl">{gate}</span> Gate</h1>
            <h3 className="text-center text-lg">Both inputs must be powered</h3>
            <form className="grid grid-cols-3 gap-4 w-full max-w-sm">
                <div className="flex flex-col my-auto">
                    <button type="button" onClick={() => setAndAInput(prev => !prev)}>{andAInput ?
                        <FiToggleLeft className={iconStyle(andAInput)} /> :
                        <FiToggleRight className={iconStyle(andAInput)} />}
                    </button>
                    <button type="button" onClick={() => setAndBInput(prev => !prev)}>{andBInput ?
                        <FiToggleLeft className={iconStyle(andBInput)} /> :
                        <FiToggleRight className={iconStyle(andBInput)} />}
                    </button>
                </div>
                {children}
                <div className="flex align-center justify-center my-auto text-center text-8xl">
                    {andAInput && andBInput ? <FaRegLightbulb /> : <FaLightbulb />}
                </div>
            </form>
        </div>
    )

    if (gate === 'OR') return (
        <div className="flex flex-col items-center border-4 border-mhfd-dark-blue bg-linear-to-r from-mhfd-purple to-mhfd-blue mb-4 p-4 rounded-2xl shadow">
            <h1 className="text-center text-2xl font-bold mb-4">Logical <span className="text-2xl">{gate}</span> Gate</h1>
            <h3 className="text-center text-lg">Either input can be powered</h3>
            <form className="grid grid-cols-3 gap-4 w-full max-w-sm">
                <div className="flex flex-col my-auto">
                    <button type="button" onClick={() => setOrAInput(prev => !prev)}>{orAInput ?
                        <FiToggleLeft className={iconStyle(orAInput)} /> :
                        <FiToggleRight className={iconStyle(orAInput)} />}
                    </button>
                    <button type="button" onClick={() => setOrBInput(prev => !prev)}>{orBInput ?
                        <FiToggleLeft className={iconStyle(orBInput)} /> :
                        <FiToggleRight className={iconStyle(orBInput)} />}
                    </button>
                </div>
                {children}
                <div className="flex align-center justify-center my-auto text-center text-8xl">
                    {orAInput || orBInput ? <FaRegLightbulb /> : <FaLightbulb />}
                </div>
            </form>
        </div>
    )

    if (gate === 'NOT') return (
        <div className="flex flex-col items-center border-4 border-mhfd-dark-blue bg-linear-to-r from-mhfd-purple to-mhfd-blue mb-4 p-4 rounded-2xl shadow">
            <h1 className="text-center text-2xl font-bold mb-4">Logical <span className="text-2xl">{gate}</span> Gate</h1>
            <h3 className="text-center text-lg">Invert the input</h3>
            <form className="grid grid-cols-3 gap-4 w-full max-w-sm">
                <div className="flex flex-col my-auto">
                    <button type="button" onClick={() => setNotAInput(prev => !prev)}>{notAInput ?
                        <FiToggleLeft className={iconStyle(notAInput)} /> :
                        <FiToggleRight className={iconStyle(notAInput)} />}
                        </button>
                </div>
                {children}
                <div className="flex align-center justify-center my-auto text-center text-8xl">
                    {!notAInput ? <FaRegLightbulb /> : <FaLightbulb />}
                </div>
            </form>
        </div>
    )

    if (gate === 'NAND') return (
        <div className="flex flex-col items-center border-4 border-mhfd-dark-blue bg-linear-to-r from-mhfd-purple to-mhfd-blue mb-4 p-4 rounded-2xl shadow">
            <h1 className="text-center text-2xl font-bold mb-4">Logical <span className="text-2xl">{gate}</span> Gate</h1>
            <h3 className="text-center text-lg">Both inputs can't be powered</h3>
            <form className="grid grid-cols-3 gap-4 w-full max-w-sm">
                <div className="flex flex-col my-auto">
                    <button type="button" onClick={() => setNandAInput(prev => !prev)}>{nandAInput ?
                        <FiToggleLeft className={iconStyle(nandAInput)} /> :
                        <FiToggleRight className={iconStyle(nandAInput)} />}
                    </button>
                    <button type="button" onClick={() => setNandBInput(prev => !prev)}>{nandBInput ?
                        <FiToggleLeft className={iconStyle(nandBInput)} /> :
                        <FiToggleRight className={iconStyle(nandBInput)} />}
                    </button>
                </div>
                {children}
                <div className="flex align-center justify-center my-auto text-center text-8xl">
                    {!(nandAInput && nandBInput) ? <FaRegLightbulb /> : <FaLightbulb />}
                </div>
            </form>
        </div>
    )

    return null
}
