import { InfoCard } from "@/components/InfoCard";

const LogicGates = () => {
  const link: string = "https://academo.org/demos/logic-gate-simulator/";
  const imgURL: string = "https://as1.ftcdn.net/v2/jpg/05/02/63/52/1000_F_502635240_S7hotQTlARZJiY3s7S9bkqlQSsUI5R33.jpg";

  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h1 className="text-4xl font-bold mb-4 text-center text-mhfd-dark-blue">Gateway to Complexity</h1>
        <InfoCard list={[
          <>Logic Gates are the building blocks of digital circuits.</>,
          <>The common types of logic gates are AND, OR, NOT, NAND, NOR, XOR, and XNOR.</>
        ]} />
        <img src={imgURL} alt="Logic Gates" className="object-cover w-full h-90" />
      </a>
    </>
  )
}

export default LogicGates;
