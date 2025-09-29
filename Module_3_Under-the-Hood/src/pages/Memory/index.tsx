import { InfoCard } from "@/components/InfoCard";

const tableRows = [
  { binary: '0000000', decimal: 0, hexadecimal: '00', character: 'NUL', description: 'Null character' },
  { binary: '1000000', decimal: 64, hexadecimal: '40', character: '@', description: 'At symbol' },
  { binary: '1000001', decimal: 65, hexadecimal: '41', character: 'A', description: 'Uppercase A' },
  { binary: '1100001', decimal: 97, hexadecimal: '61', character: 'a', description: 'Lowercase a' },
  { binary: '1111011', decimal: 123, hexadecimal: '7B', character: '{', description: 'Left curly brace' },
  { binary: '1111100', decimal: 124, hexadecimal: '7C', character: '|', description: 'Vertical bar' },
  { binary: '1111110', decimal: 126, hexadecimal: '7E', character: '~', description: 'Tilde' },
  { binary: '1100010010000101101', decimal: 402477, hexadecimal: '06242D', character: <div className="bg-mhfd-dark-blue border border-gray-600 h-4 w-8 mx-auto"></div>, description: 'MHFD Dark Blue' }
]

const Memory = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-center text-mhfd-dark-blue">The Bits and Bytes</h1>
      <InfoCard list={[
        <>A bit is the smallest unit of data in a computer and can have a value of either 0 or 1.</>,
        <>8 bits make up a byte, which can represent 256 (2<sup>8</sup>) different values (from 0 to 255).</>,
        <>ASCII stands for American Standard Code for Information Interchange.</>,
      ]} />
      <table className="table-auto w-full border-collapse border border-mhfd-dark-blue text-mhfd-dark-blue mb-4">
        <thead>
          <tr className="bg-mhfd-dark-blue text-white">
            <th className="border border-mhfd-dark-blue p-2">Binary</th>
            <th className="border border-mhfd-dark-blue p-2">Decimal</th>
            <th className="border border-mhfd-dark-blue p-2">Hexadecimal</th>
            <th className="border border-mhfd-dark-blue p-2">Character</th>
            <th className="border border-mhfd-dark-blue p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map(row => (
            <tr key={row.binary} className="border border-mhfd-dark-blue">
              <td className="border border-mhfd-dark-blue p-2 text-center font-bold">{row.binary}</td>
              <td className="border border-mhfd-dark-blue p-2 text-center font-bold">{row.decimal}</td>
              <td className="border border-mhfd-dark-blue p-2 text-center font-bold">{row.hexadecimal}</td>
              <td className="border border-mhfd-dark-blue p-2 text-center font-bold">{row.character}</td>
              <td className="border border-mhfd-dark-blue p-2 text-center font-bold">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Memory;
