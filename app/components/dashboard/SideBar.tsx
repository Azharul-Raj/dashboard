"use client"
import React, { useState,Dispatch,SetStateAction } from 'react'
import {FiX} from 'react-icons/fi'

interface SidebarProps{
  isOpen:boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function SideBar({isOpen,setIsOpen}:SidebarProps) {
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

      </aside>
  )
}

export default SideBar