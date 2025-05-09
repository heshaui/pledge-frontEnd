'use client'
import Link from "next/link"
import Image from 'next/image'
import WalletConnect from "../WalletConnect";
import logo from '_assets/images/vector.png';
import { usePathname } from "next/navigation"
const Header = () => {
    const links = [
        {path: '/', name: 'Market'},
        {path: '/Market/:mode'},

    ]
    const pathname = usePathname()
    return (
        <header className='border-b-1 border-[#ccc] h-[70px]'>
            <div className='w-[1200px] h-[100%] m-auto flex justify-between items-center'>
                <div className="flex items-center">
                    <Link href="/" className='mr-[15px]'><Image src={logo} alt="Logo" width={100} height={100} /></Link>
                    <ul className='flex'>
                        {
                            links.map((link, key) => {
                                const active = (pathname === link.path || pathname === link.path + '/');
                                return (
                                    <li key={key} className={`text-[20px] ${active ? 'text-[#333]' : 'text-[#666]'}`}>
                                        <Link href={link.path}>{link.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <WalletConnect />
            </div>
        </header>
    )
}

export default Header;