import { InfoCard } from "@/components/InfoCard";

const tableRows = [
  { binary: '0000000', decimal: 0, character: 'NUL', description: 'Null character' },
  { binary: '1000000', decimal: 64, character: '@', description: 'At symbol' },
  { binary: '1000001', decimal: 65, character: 'A', description: 'Uppercase A' },
  { binary: '1000010', decimal: 66, character: 'B', description: 'Uppercase B' },
  { binary: '1000011', decimal: 67, character: 'C', description: 'Uppercase C' },
  { binary: '1100001', decimal: 97, character: 'a', description: 'Lowercase a' },
  { binary: '1100010', decimal: 98, character: 'b', description: 'Lowercase b' },
  { binary: '1100011', decimal: 99, character: 'c', description: 'Lowercase c' },
  { binary: '1100011', decimal: 123, character: '{', description: 'Left curly brace' },
  { binary: '1100011', decimal: 124, character: '|', description: 'Vertical bar' },
  { binary: '1100011', decimal: 125, character: '}', description: 'Right curly brace' },
  { binary: '1100011', decimal: 126, character: '~', description: 'Tilde' },
  { binary: '1100011', decimal: 127, character: 'DEL', description: 'Delete' }
]

const Memory = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-center text-mhfd-dark-blue">The Bits and Bytes</h1>
      <InfoCard list={[
        <>A bit is the smallest unit of data in a computer and can have a value of either 0 or 1.</>,
        <>8 bits make up a byte, which can represent 256 (2<sup>8</sup>) different values (from 0 to 255).</>,
        <>ASCII stands for American Standard Code for Information Interchange.</>,
        <>It is a character encoding standard that uses 7 bits to represent characters.</>
      ]} />
      <table className="table-auto w-full border-collapse border border-mhfd-dark-blue text-mhfd-dark-blue mb-4">
        <thead>
          <tr className="bg-mhfd-dark-blue text-white">
            <th className="border border-mhfd-dark-blue p-2">Binary</th>
            <th className="border border-mhfd-dark-blue p-2">Decimal</th>
            <th className="border border-mhfd-dark-blue p-2">Character</th>
            <th className="border border-mhfd-dark-blue p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map(row => (
            <tr key={row.binary} className="border border-mhfd-dark-blue">
              <td className="border border-mhfd-dark-blue p-2 text-center font-bold">{row.binary}</td>
              <td className="border border-mhfd-dark-blue p-2 text-center font-bold">{row.decimal}</td>
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
