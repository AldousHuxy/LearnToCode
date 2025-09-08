import { InfoCard } from "@/components/InfoCard";

const ArithmeticLogicUnit = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <h1 className="col-span-6 text-4xl font-bold mb-4 text-center text-mhfd-dark-blue">The World's Smallest Calculator</h1>
      <div className="col-span-6 mb-4">
        <InfoCard list={[
          <>The Arithmetic Logic Unit (ALU) is a digital circuit that performs arithmetic and logic operations.</>,
          <>Since 2009, many Minecraft players have made attempts to create their own ALUs using redstone.</>,
          <>More recent updates to the game have allowed players to build complex computers with graphical interfaces.</>,
          <>Common operations include addition, subtraction, multiplication, and division.</>
        ]} />
      </div>
      <div className="col-span-6  flex justify-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/74181aluschematic.svg/1920px-74181aluschematic.svg.png"
          alt="Arithmetic Logic Unit Schematic"
        />
      </div>
    </div>
  )
}

export default ArithmeticLogicUnit;
