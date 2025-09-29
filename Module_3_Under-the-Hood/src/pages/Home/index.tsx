import adaLovelace from '@/assets/images/ada_lovelace.jpg';
import alanTuring from '@/assets/images/alan_turing.jpg';
import graceHopper from '@/assets/images/grace_hopper.jpg';
import timBernersLee from '@/assets/images/tim_berners-lee.jpg';

const PIONEERS = [
  {
    name: "Ada Lovelace",
    description: "Ada Lovelace is often regarded as the first computer programmer. She wrote the first algorithm intended for implementation on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine.",
    image: adaLovelace
  },
  {
    name: "Alan Turing",
    description: "Alan Turing was a mathematician, logician, and computer scientist who is widely considered to be the father of theoretical computer science and artificial intelligence. He played a crucial role in breaking the German Enigma code during World War II.",
    image: alanTuring
  },
  {
    name: "Grace Hopper",
    description: "Grace Hopper was a pioneering computer scientist and United States Navy rear admiral. She was one of the first programmers of the Harvard Mark I computer and developed the first compiler for a computer programming language.",
    image: graceHopper
  },
  {
    name: "Tim Berners-Lee",
    description: "Tim Berners-Lee is a computer scientist best known as the inventor of the World Wide Web. He proposed the idea of a global hypertext system in 1989 and implemented the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the internet.",
    image: timBernersLee
  }
]

const Home = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-center text-mhfd-dark-blue">Some Computing Pioneers</h1>
      <div className="grid grid-cols-4 gap-4">
        {PIONEERS.map((pioneer) => (
          <div key={pioneer.name} className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
            <img src={pioneer.image} alt={pioneer.name} className="w-full h-auto mb-4 rounded" />
            <h1 className="text-xl font-bold">{pioneer.name}</h1>
            <p>{pioneer.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home;