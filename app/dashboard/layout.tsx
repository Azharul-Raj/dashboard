"use client"
import {useState} from 'react'

import SideBar from '../components/dashboard/SideBar';
import DashboardHeader from '../components/dashboard/DashboardHeader';

function DashboardLayout({children}:{children:React.ReactNode}) {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <section className='flex h-screen overflow-hidden '>
      {/* SIDEBAR */}
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
      {/* HEADER */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden flex-grow">
        <DashboardHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className="">
          {children}
        </div>
      </div>
    </section>
  )
}

export default DashboardLayout