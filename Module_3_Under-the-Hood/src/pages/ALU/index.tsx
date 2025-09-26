import { InfoCard } from "@/components/InfoCard";

const ArithmeticLogicUnit = () => {
  const link: string = 'https://www.youtube.com/watch?v=IOoy_eG8efI&t=833s'

  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h1 className="text-4xl font-bold mb-4 text-center text-mhfd-dark-blue">The World's Smallest Calculator</h1>
      </a>
      <div className="mb-4">
        <InfoCard list={[
          <>The Arithmetic Logic Unit (ALU) is a digital circuit that performs arithmetic and logic operations.</>,
          <>Since 2009, many Minecraft players have made attempts to create their own ALUs using redstone.</>,
          <>More recent updates to the game have allowed players to build complex computers with graphical interfaces.</>,
          <>Common operations include addition, subtraction, multiplication, and division.</>
        ]} />
      </div>
    </>
  )
}

export default ArithmeticLogicUnit;
