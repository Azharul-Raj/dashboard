"use client"
import React, { Dispatch,SetStateAction } from 'react'
import {FiX} from 'react-icons/fi';

import logo from '../../../assets/logo.png'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {BiHomeAlt2} from 'react-icons/bi'
import {FiHome} from 'react-icons/fi'
import { navItems } from '@/data';
import Link from 'next/link';

interface SidebarProps{
  isOpen:boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function SideBar({isOpen,setIsOpen}:SidebarProps) {
  const pathname=usePathname();
  console.log(pathname)
  return (
    <aside
    //   ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-[300px] flex-col overflow-y-hidden bg-gradient-to-b from-blue-400 via-indigo-400 to-indigo-500 duration-300 ease-linear lg:static lg:translate-x-0 ${
        isOpen ? 'translate-x-0 z-10 backdrop-blur bg-gradient-to-b from-blue-400/30 via-indigo-400/30 to-indigo-500 duration-300/30' : '-translate-x-full z-10'
      }`}>
        {/* cross Icon */}
        <div className="relative my-2 cursor-pointer lg:hidden">
          <div onClick={()=>setIsOpen(!isOpen)} className="absolute right-2 z-20 flex text-white bg-blue-700 rounded-full justify-center items-center p-2">
            <FiX/>
          </div>
        </div>
        {/* LOGO */}
        <div className="flex items-center space-x-2 pl-4">
          <Image width={50} src={logo} alt='logo' />
          <p className='text-xl font-bold text-white'>Dashboard</p>
        </div>
        {/* MENU */}
        <div className="mx-4 mt-8">
          {/* NAV ITEM */}
          {
            navItems.map(({Icon,url,name},i)=>(
          <Link href={url} key={i} className={`flex items-center text-white py-3 cursor-pointer ${pathname===url?'bg-blue-500/90 lg:bg-white/30 backdrop-blur':''} rounded-lg space-x-2 my-2`}>
            <div className="ml-2 ">
            {Icon}
            </div>
            <h5>{name}</h5>
          </Link>
            ))
          }
        </div>
      </aside>
  )
}

export default SideBar