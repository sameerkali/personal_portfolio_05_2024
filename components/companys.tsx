import Link from "next/link";
import { Separator } from "./ui/separator";
import { Avatar } from "@mui/material";
import { ArrowRight } from "lucide-react";

export const Companys = () => {
  const channels = [
    {
      logo: "/techugo.jpeg",
      name: "Techugo",
      subs: "Set 24 - now",
      link: "https://techugo.com/"
    },
    {
      logo: "/kurmato_logo_shott.webp",
      name: "Kurmato (2 Year)",
      subs: "Oct 22 - Set 24",
      link: "https://kurmato.com/"
    },

  ];
  // Avatar Styles
  const style = {
    width: {
      xs: 50, // width on extra-small devices
      sm: 100, // width on small devices
      md: 150 // default width
    },
    height: {
      xs: 50, // height on extra-small devices
      sm: 100, // height on small devices
      md: 150 // default height
    }
  };
  return (
    <div className="text-center">
      <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">
        Companys I've Worked With
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center mx-auto sm:space-x-2 md:space-x-4 lg:space-x-8">
        {channels.map((channel, index) => (
          <div key={index} className="mt-10 flex">
            <div className="flex flex-col items-center">
              <Link target="_blank" href={`${channel.link}`}>
                <Avatar src={channel.logo} alt={channel.name} sx={style} />
              </Link>
              <h1 className="font-semibold text-xl mt-4">{channel.name}</h1>
              <p className="text-lg mt-2">{channel.subs}</p>
            </div>
          </div>
        ))}
      </div>
      <Link
        className="w-full px-10  items-center justify-center flex whitespace-nowrap transition duration-150 ease-in-out font-medium rounded py-4 hover:bg-gray-200  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80  group mt-24"
        target="_black"
        href="https://drive.google.com/file/d/1pXo5MegXvcLnb9yI-U3gpAqrZcYv0eID/view?usp=sharing"
      >
        Get My Resume{" "}
        <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
      </Link>
    </div>
  );
};
