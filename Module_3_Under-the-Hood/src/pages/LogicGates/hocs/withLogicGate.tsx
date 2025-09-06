import { useState, type ReactNode } from 'react';
import type { LogicGate } from '@/pages/LogicGates/types/gate';

export const withLogicGate = (gate: LogicGate, children: ReactNode) => {
    const [andAInput, setAndAInput] = useState<boolean>(true)
    const [andBInput, setAndBInput] = useState<boolean>(true)
    const [orAInput, setOrAInput] = useState<boolean>(true)
    const [orBInput, setOrBInput] = useState<boolean>(true)
    const [notAInput, setNotAInput] = useState<boolean>(true)
    const [nandAInput, setNandAInput] = useState<boolean>(true)
    const [nandBInput, setNandBInput] = useState<boolean>(true)

    if (gate === 'AND') return (
        <div className="flex flex-col items-center border-4 border-mhfd-dark-blue bg-linear-to-r from-mhfd-purple to-mhfd-blue mb-4 p-4 rounded-2xl shadow">
            <h1 className="text-center text-2xl font-bold mb-4">Logical <span className="text-2xl">{gate}</span> Gate</h1>
            <h3 className="text-center text-lg">Both A and B must be true</h3>
            <form className="grid grid-cols-3 gap-4 w-full max-w-sm">
                <div className="flex flex-col my-auto">
                    <button type="button" onClick={() => setAndAInput(prev => !prev)} className="cursor-pointer w-full p-2 mb-4 bg-medium-green border-2 border-mhfd-dark-blue hover:bg-bright-yellow rounded-2xl">A: {andAInput ? 'True' : 'False'}</button>
                    <button type="button" onClick={() => setAndBInput(prev => !prev)} className="cursor-pointer w-full p-2 mb-4 bg-medium-green border-2 border-mhfd-dark-blue hover:bg-bright-yellow rounded-2xl">B: {andBInput ? 'True' : 'False'}</button>
                </div>
                {children}
                <div className="flex flex-col my-auto text-center text-4xl">
                    {andAInput && andBInput ? 'True' : 'False'}
                </div>
            </form>
        </div>
    )

    if (gate === 'OR') return (
        <div className="flex flex-col items-center border-4 border-mhfd-dark-blue bg-linear-to-r from-mhfd-purple to-mhfd-blue mb-4 p-4 rounded-2xl shadow">
            <h1 className="text-center text-2xl font-bold mb-4">Logical <span className="text-2xl">{gate}</span> Gate</h1>
            <h3 className="text-center text-lg">Either A or B must be true</h3>
            <form className="grid grid-cols-3 gap-4 w-full max-w-sm">
                <div className="flex flex-col my-auto">
                    <button type="button" onClick={() => setOrAInput(prev => !prev)} className="cursor-pointer w-full p-2 mb-4 bg-medium-green border-2 border-mhfd-dark-blue hover:bg-bright-yellow rounded-2xl">A: {orAInput ? 'True' : 'False'}</button>
                    <button type="button" onClick={() => setOrBInput(prev => !prev)} className="cursor-pointer w-full p-2 mb-4 bg-medium-green border-2 border-mhfd-dark-blue hover:bg-bright-yellow rounded-2xl">B: {orBInput ? 'True' : 'False'}</button>
                </div>
                {children}
                <div className="flex flex-col my-auto text-center text-4xl">
                    {orAInput || orBInput ? 'True' : 'False'}
                </div>
            </form>
        </div>
    )

    if (gate === 'NOT') return (
        <div className="flex flex-col items-center border-4 border-mhfd-dark-blue bg-linear-to-r from-mhfd-purple to-mhfd-blue mb-4 p-4 rounded-2xl shadow">
            <h1 className="text-center text-2xl font-bold mb-4">Logical <span className="text-2xl">{gate}</span> Gate</h1>
            <h3 className="text-center text-lg">The inverse of A</h3>
            <form className="grid grid-cols-3 gap-4 w-full max-w-sm">
                <div className="flex flex-col my-auto">
                    <button type="button" onClick={() => setNotAInput(prev => !prev)} className="cursor-pointer w-full p-2 mb-4 bg-medium-green border-2 border-mhfd-dark-blue hover:bg-bright-yellow rounded-2xl">A: {notAInput ? 'True' : 'False'}</button>
                </div>
                {children}
                <div className="flex flex-col my-auto text-center text-4xl">
                    {!notAInput ? 'True' : 'False'}
                </div>
            </form>
        </div>
    )

    if (gate === 'NAND') return (
        <div className="flex flex-col items-center border-4 border-mhfd-dark-blue bg-linear-to-r from-mhfd-purple to-mhfd-blue mb-4 p-4 rounded-2xl shadow">
            <h1 className="text-center text-2xl font-bold mb-4">Logical <span className="text-2xl">{gate}</span> Gate</h1>
            <h3 className="text-center text-lg">Neither A nor B can be true</h3>
            <form className="grid grid-cols-3 gap-4 w-full max-w-sm">
                <div className="flex flex-col my-auto">
                    <button type="button" onClick={() => setNandAInput(prev => !prev)} className="cursor-pointer w-full p-2 mb-4 bg-medium-green border-2 border-mhfd-dark-blue hover:bg-bright-yellow rounded-2xl">A: {nandAInput ? 'True' : 'False'}</button>
                    <button type="button" onClick={() => setNandBInput(prev => !prev)} className="cursor-pointer w-full p-2 mb-4 bg-medium-green border-2 border-mhfd-dark-blue hover:bg-bright-yellow rounded-2xl">B: {nandBInput ? 'True' : 'False'}</button>
                </div>
                {children}
                <div className="flex flex-col my-auto text-center text-4xl">
                    {!(nandAInput && nandBInput) ? 'True' : 'False'}
                </div>
            </form>
        </div>
    )

    return null
}
