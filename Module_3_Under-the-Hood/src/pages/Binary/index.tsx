import { useState } from 'react'
import { Card } from './Card';

const Binary = () => {
  const [binary, setBinary] = useState<number>(0)
  const [octal, setOctal] = useState<number>(0)
  const [decimal, setDecimal] = useState<number>(0)
  const [duodecimal, setDuodecimal] = useState<number>(0)
  const [hexadecimal, setHexadecimal] = useState<number>(0)

  const binaryLabel = binary.toString(2)
  const octalLabel = octal.toString(8)
  const decimalLabel = decimal.toString(10)
  const duodecimalLabel = duodecimal.toString(12)
  const hexLabel = hexadecimal.toString(16).toUpperCase()

  return (
    <>
      <div className="bg-linear-to-r from-mhfd-purple to-mhfd-blue border-4 border-mhfd-dark-blue mb-4 p-4 rounded-2xl shadow">
        <h1 className="text-4xl font-bold mb-4 text-center text-mhfd-dark-blue">Enter the Matrix</h1>
        <ul className="list-disc list-inside mb-2 font-bold text-lg text-mhfd-dark-blue">
          <li>The language of computers is binary, meaning all programs have to be compiled into binary code for the computer to understand it.</li>
          <li>Binary uses base 2, which means it only has two digits: 0 and 1.</li>
          <li>The Babylonians used a base 12 number system, counting the creases of their fingers with their thumb, giving us 12 hours in a day.</li>
          <li>The Mayans used a base 20 number system, counting on their fingers and toes.</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
        <Card title="Binary" value={binary} label={binaryLabel} onIncrement={() => setBinary(prev => prev + 1)} />
        <Card title="Octal" value={octal} label={octalLabel} onIncrement={() => setOctal(prev => prev + 1)} />
        <Card title="Decimal" value={decimal} label={decimalLabel} onIncrement={() => setDecimal(prev => prev + 1)} />
        <Card title="Duodecimal" value={duodecimal} label={duodecimalLabel} onIncrement={() => setDuodecimal(prev => prev + 1)} />
        <Card title="Hexadecimal" value={hexadecimal} label={hexLabel} onIncrement={() => setHexadecimal(prev => prev + 1)} />
      </div>
      <div className="bg-linear-to-r from-mhfd-purple to-mhfd-blue border-4 border-mhfd-dark-blue mb-4 p-4 rounded-2xl shadow">
        <h1 className="text-4xl font-bold mb-4 text-center text-mhfd-dark-blue">The Bits and Bytes</h1>
        <ul className="list-disc list-inside mb-2 font-bold text-lg text-mhfd-dark-blue">
          <li>A bit is the smallest unit of data in a computer and can have a value of either 0 or 1.</li>
          <li>8 bits make up a byte, which can represent 256 (2<sup>8</sup>) different values (from 0 to 255).</li>
          <li>ASCII stands for American Standard Code for Information Interchange.</li>
          <li>It is a character encoding standard that uses 7 bits to represent characters.</li>
        </ul>
      </div>
      <table className="table-auto w-full border-collapse border border-mhfd-dark-blue text-mhfd-dark-blue mb-4">
        <tr className="bg-mhfd-dark-blue text-white">
          <th>Binary</th>
          <th>Decimal</th>
          <th>Character</th>
        </tr>
        <tr className="border border-mhfd-dark-blue text-center">
          <td>1000001</td>
          <td>65</td>
          <td>A</td>
        </tr>
        <tr className="border border-mhfd-dark-blue text-center">
          <td>1000010</td>
          <td>66</td>
          <td>B</td>
        </tr>
        <tr className="border border-mhfd-dark-blue text-center">
          <td>1000011</td>
          <td>67</td>
          <td>C</td>
        </tr>
        <tr className="border border-mhfd-dark-blue text-center">
          <td>1100001</td>
          <td>97</td>
          <td>a</td>
        </tr>
        <tr className="border border-mhfd-dark-blue text-center">
          <td>1100010</td>
          <td>98</td>
          <td>b</td>
        </tr>
        <tr className="border border-mhfd-dark-blue text-center">
          <td>1100011</td>
          <td>99</td>
          <td>c</td>
        </tr>
      </table>
    </>
  )
}

export default Binary;
