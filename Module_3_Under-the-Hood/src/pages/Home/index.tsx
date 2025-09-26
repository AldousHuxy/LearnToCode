import adaLovelace from '@/assets/images/ada_lovelace.jpg';
import alanTuring from '@/assets/images/alan_turing.jpg';
import graceHopper from '@/assets/images/grace_hopper.jpg';
import timBernersLee from '@/assets/images/tim_berners-lee.jpg';
import { InfoCard } from '@/components/InfoCard';

const Home = () => {
  const image = (src: string, alt: string) => <img src={src} alt={alt} className="w-full h-auto" />

  return (
    <>
      <InfoCard list={[
        <>Ada Lovelace is often regarded as the first computer programmer.</>,
        <>Alan Turing is considered the father of theoretical computer science and artificial intelligence.</>,
        <>Grace Hopper was a pioneering computer scientist and instrumental in the development of COBOL.</>,
        <>Tim Berners-Lee is credited with inventing the World Wide Web.</>
      ]} />
      <div className="grid grid-cols-4 gap-4">
        {image(adaLovelace, "Ada Lovelace")}
        {image(alanTuring, "Alan Turing")}
        {image(graceHopper, "Grace Hopper")}
        {image(timBernersLee, "Tim Berners-Lee")}
      </div>
    </>
  )
}

export default Home;