import { Separator } from "./ui/separator";
import YouTube from "react-youtube";
import Image from "next/image";
import project01 from "../public/project2/one.webp";
import project02 from "../public/project2/two.webp";
import project03 from "../public/project2/three.webp";
import project04 from "../public/project2/four.webp";
import project05 from "../public/project2/five.webp";
import project06 from "../public/project2/six.webp";
import project07 from "../public/project2/seven.webp";
import project08 from "../public/project2/eight.webp";
import project09 from "../public/project2/nine.webp";
import project10 from "../public/project2/ten.webp";
import Link from "next/link";

export const Projects2 = () => {

  const project01_link = "http://taleem.qa/";
  const project02_link = "https://divinezone.in/";
  const project03_link = "https://berismagic.in/"; 
  const project04_link = "https://homemaintenances.com/";
  const project05_link = "https://www.aliroadlines.in/";
  const project06_link = "https://www.expendifii.in/"; 
  const project07_link = "https://www.kurmato.com/";
  //bytes projects
  const project09_link = "https://byte-digital.com.au//"; 
  const project10_link = "https://mathdingo.com/";
  const project08_link = "https://www.blua.bupa.com.au/";

  return (
    <div className="text-center">
      <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">
        Professional work
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div>

      <div className="flex justify-center">
        <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
          <Link target="_blank" href={project01_link}>
            <Image src={project01} alt="Taleem Application" />
          </Link>
          <Link target="_blank" href={project02_link}>
            <Image src={project02} alt="DivineZone Application" />
          </Link>
          <Link target="_blank" href={project03_link}>
            <Image src={project03} alt="BerisMagic Website" />
          </Link>
          <Link target="_blank" href={project04_link}>
            <Image src={project04} alt="Home Maintenance Website" />
          </Link>
          <Link target="_blank" href={project05_link}>
            <Image src={project05} alt="Ali Roadlines Website" />
          </Link>
          <Link target="_blank" href={project06_link}>
            <Image src={project06} alt="Expendifii Website" />
          </Link>
          <Link target="_blank" href={project07_link}>
            <Image src={project07} alt="Kurmato Website" />
          </Link>
          {/* byte */}
               <Link target="_blank" href={project08_link}>
            <Image src={project08} alt="Kurmato Website" />
          </Link>
               <Link target="_blank" href={project09_link}>
            <Image src={project09} alt="Kurmato Website" />
          </Link>
               <Link target="_blank" href={project10_link}>
            <Image src={project10} alt="Kurmato Website" />
          </Link>
        </div>
      </div>
    </div>
  );
};
