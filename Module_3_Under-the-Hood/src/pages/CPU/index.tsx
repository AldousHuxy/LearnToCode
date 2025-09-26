import { InfoCard } from "@/components/InfoCard";

const CentralProcessingUnit = () => {
  const link: string = 'https://www.youtube.com/shorts/NezkfsyMnyw'

  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h1 className="text-4xl font-bold mb-4 text-center text-mhfd-dark-blue">Stronger Better Faster <span className="text-sm">Smaller</span></h1>
      </a>
      <InfoCard list={[
        <>The CPU (Central Processing Unit) is the brain of the computer where most calculations take place.</>,
        <>Modern CPUs are made up of millions or even billions of transistors.</>,
        <>A transistor is a tiny switch that can turn on or off, representing binary data (0s and 1s).</>,
        <>Moore's Law states that the size of transistors decreases over time, leading to more powerful and efficient CPUs.</>,
        <>CPUs can have multiple cores, allowing them to perform multiple tasks simultaneously.</>,
        <>The fastest computers in the world have processors that can perform trillions of calculations per second.</>,
      ]} />
    </>
  )
}

export default CentralProcessingUnit;
