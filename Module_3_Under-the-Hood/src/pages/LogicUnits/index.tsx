import { InfoCard } from "@/components/InfoCard";

const LogicUnits = () => {
  const link: string = 'https://www.youtube.com/watch?v=IOoy_eG8efI&t=833s'
  const link2: string = 'https://en.wikipedia.org/wiki/74181'
  const imgURL: string = 'https://upload.wikimedia.org/wikipedia/commons/d/d7/SN74S181N.JPG'

  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h1 className="text-4xl font-bold mb-4 text-center text-mhfd-dark-blue">The World's Smallest Calculator</h1>
      </a>
      <div className="mb-4">
        <InfoCard list={[
          <>The Arithmetic Logic Unit (ALU) is a digital circuit that performs arithmetic and logic operations.</>,
          <>The Central Processing Unit (CPU) is the primary component of a computer that performs most of the computer processing.</>,
          <>The Graphical Processing Unit (GPU) is responsible for rendering images and video.</>
        ]} />
        <a href={link2} target="_blank" rel="noopener noreferrer">
          <img src={imgURL} alt="ALU" className="mt-4 mx-auto" />
        </a>
      </div>
    </>
  )
}

export default LogicUnits;
