import Link from "next/link"
import { Separator } from "./ui/separator"
import { Avatar } from "@mui/material"

export const Channels = () => {
    const channels = [
        {
            logo: '/kurmato_logo_shott.png',
            name: 'Kurmato',
            subs: 'Dec 23 - now',
            link: 'https://kurmato.com/'
        },
        {
            logo: '/4achievers_logo_shot.webp',
            name: '4Archivers',
            subs: 'July 23 - Dec 23',
            link: 'https://4archivers.com/'
        },
        {
            logo: '/abhiwan_logo_shortt.png',
            name: 'Abhiwan Technology',
            subs: 'May 23 - July 23',
            link: 'https://abhiwan.com/'
        },
        {
            logo: '/dahua_logo_shortt.png',
            name: 'Dahua Technology IN',
            subs: 'Oct 22 - Apr 23',
            link: 'https://dahua.com/'
        },
    ]
    // Avatar Styles
    const style = {
        width: {
          xs: 50, // width on extra-small devices
          sm: 100, // width on small devices
          md: 150, // default width
        },
        height: {
          xs: 50, // height on extra-small devices
          sm: 100, // height on small devices
          md: 150, // default height
        },
        // You can add more responsive keys (lg, xl) as needed
      };
    return (
        <div className="text-center">
                <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">Companys I've Worked With</h1>
                <div className="flex items-center justify-center">
                    <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
                </div>
               
               <div className="flex flex-col sm:flex-row items-center justify-center mx-auto sm:space-x-2 md:space-x-4 lg:space-x-8">
                {channels.map((channel, index) => (
                    <div key={index} className="mt-10 flex">
                        <div className="flex flex-col items-center">
                            <Link href={`${channel.link}`}>
                            <Avatar src={channel.logo} alt={channel.name} sx={style}/>
                            </Link>
                            <h1 className="font-semibold text-xl mt-4">{channel.name}</h1>
                            <p className="text-lg mt-2">{channel.subs}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
    )
}