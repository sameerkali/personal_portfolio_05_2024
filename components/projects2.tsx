import { Separator } from "./ui/separator";
import YouTube from "react-youtube";
import Image from "next/image";
import project01 from "../public/pro-1.webp";
import project02 from "../public/pro-2.webp";
import project03 from "../public/pro-3.webp";
import project04 from "../public/pro-4.webp";
import project05 from "../public/pro-5.webp";
import project06 from "../public/pro-6.webp";
import Link from "next/link";

export const Projects2 = () => {

  const project01_link = "http://taleem.qa/";
  const project02_link = "https://divinezone.in/";
  const project03_link = "https://berismagic.in/"; 
  const project04_link = "https://homemaintenances.com/";
  const project05_link = "https://www.aliroadlines.in/";
  const project06_link = "https://www.expendifii.in/"; 
  const project07_link = "https://www.kurmato.com/";

  return (
    <div className="text-center">
      <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">
        Websites & Applications I've Created
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
            <Image src={project01} alt="Kurmato Website" />
          </Link>
        </div>
      </div>
    </div>
  );
};
