"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import DashboardPageHeader from '@/app/components/dashboard/PageHeader';
import CourseDetailsCard from '@/app/components/card/CourseDetailsCard';

function Details() {
    const pathname=usePathname();
    const arr=pathname?.split('/').slice(2);
  return (
    <>
    {arr && <DashboardPageHeader paths={arr} target={arr[arr.length-1]}/>}
    <section className='bg-gray-100 px-10 py-5'>
        <div className="grid grid-cols-12">
            <div className="col-span-9">
                <CourseDetailsCard/>
            </div>
            <div className="col-span-3"></div>
        </div>
    </section>
    </>
  )
}

export default Details