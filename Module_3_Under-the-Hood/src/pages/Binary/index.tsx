import { useState } from 'react'
import { Card } from './Card';
import { InfoCard } from '@/components/InfoCard';

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
      <h1 className="text-4xl font-bold mb-4 text-center text-mhfd-dark-blue">It All Starts with Binary</h1>
      <InfoCard list={[
        <>The language of computers is binary, meaning all programs have to be compiled into 1's and 0's.</>,
        <>The Babylonians used the duodecimal system (12), counting the creases of their fingers with their thumb.</>,
        <>The Mayans used the vigesimal system (20), counting on their fingers and toes.</>
      ]} />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
        <Card title="Binary" value={binary} label={binaryLabel} onIncrement={() => setBinary(prev => prev + 1)} />
        <Card title="Octal" value={octal} label={octalLabel} onIncrement={() => setOctal(prev => prev + 1)} />
        <Card title="Decimal" value={decimal} label={decimalLabel} onIncrement={() => setDecimal(prev => prev + 1)} />
        <Card title="Duodecimal" value={duodecimal} label={duodecimalLabel} onIncrement={() => setDuodecimal(prev => prev + 1)} />
        <Card title="Hexadecimal" value={hexadecimal} label={hexLabel} onIncrement={() => setHexadecimal(prev => prev + 1)} />
      </div>
    </>
  )
}

export default Binary;
