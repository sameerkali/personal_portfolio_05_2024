import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

export const Footer = () => {
    const links = [
        {
            href: 'https://twitter.com/sameer_faridi_',
            icon: <XIcon className='h-8 w-8'/>
        },
        {
            href: 'https://www.instagram.com/sameer.faridi_/',
            icon: <InstagramIcon className='h-9 w-9'/>
        },
        {
            href: 'https://github.com/sameerkali',
            icon: <GitHubIcon className='h-10 w-10'/>
        },
        {
            href: 'mailto:s.faridi007@gmail.com',
            icon: <EmailIcon className='h-8 w-8'/>
        }
    ]
    return (
        <div className='text-center pb-8'>
            <div className='flex items-center justify-center space-x-4'>
                
                {links.map((link, index) => (
                    <Link href={link.href} target='_blank' key={index} className='hover:opacity-45 transition duration-300'>
                        {link.icon}
                    </Link>
                
                ))}
                
            </div>
            <p className='text-sm text-slate-100/50'>s.faridi007@gmail.com</p>
            <p className='text-sm text-slate-100/50'>© sameerkali. All rights reserved.</p>
        </div>
    )
}