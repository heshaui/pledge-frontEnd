'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from "next/link"
import { usePathname } from "next/navigation"
const Header = () => {
    const links = [
        {path: '/', name: 'Home'}
    ]
    const pathname = usePathname()
    return (
        <header className='flex justify-between border-solid border-b-1 border-[#ccc] h-[70px] items-center px-[20px]'>
            <h3 className='text-[20px] font-bold'>PLEDGE</h3>
            <ul className='flex'>
                {
                    links.map(link => {
                        const active = (pathname === link.path || pathname === link.path + '/');
                        return (
                            <li className={`text-[18px] ${active ? 'font-bold' : 'font-[500]'}`}>
                                <Link href={link.path}>{link.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <ConnectButton />
        </header>
    )
}

export default Header;