import type { GateType } from "."

type ALUTableProps = {
    gateType: GateType
    inputA: boolean
    inputB: boolean
}

export const ALUTable = ({ gateType, inputA, inputB }: ALUTableProps) => {
    const getOutput = (a: boolean, b: boolean) => {
        if (gateType === 'AND') {
            return a && b ? 1 : 0;
        } else {
            return a || b ? 1 : 0;
        }
    };

    return (
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
                <td className="border border-gray-300 px-4 py-2 text-center">{getOutput(false, false)}</td>
            </tr>
            <tr className={inputA === false && inputB === true ? "bg-yellow-200" : ""}>
                <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{getOutput(false, true)}</td>
            </tr>
            <tr className={inputA === true && inputB === false ? "bg-yellow-200" : ""}>
                <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{getOutput(true, false)}</td>
            </tr>
            <tr className={inputA === true && inputB === true ? "bg-yellow-200" : ""}>
                <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{getOutput(true, true)}</td>
            </tr>
            </tbody>
        </table>
    )
}