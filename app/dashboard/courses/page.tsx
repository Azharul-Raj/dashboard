"use client"

import React, { useRef, useState } from 'react'
import DashboardPageHeader from '@/app/components/dashboard/PageHeader';
import { usePathname } from 'next/navigation'
import {BiFilter} from 'react-icons/bi'
import {BsFillGridFill} from 'react-icons/bs'
import CourseCard from '@/app/components/card/CourseCard';

const arrays=[1,2,3,4,5,6,7,8,9]

function Courses() {
  const [sortBy,setSortBy]=useState<string>()
  const pathname=usePathname();
  const arr=pathname?.split('/').slice(2);
  return (
    <>
    {arr && <DashboardPageHeader paths={arr} target={arr[arr.length-1]}/>}
    <div className="px-10 md:px-4 lg:px-10 bg-gray-100 h-full">
      {/* <div className="pt-2"></div> */}
      {/* TOP SECTION  */}
      <div className="flex flex-col space-y-2 md:flex-row justify-between py-3">
        <div className="flex space-x-4">
          {/* First card */}
          <div className="flex items-center bg-white p-1 md:p-2 rounded">
              <h5 className='font-bold hidden md:block md:text-base text-gray-900'>Sort by:</h5>
              <select onChange={(e)=>setSortBy(e.target.value)} className='focus:outline-none' name="" id=""> 
              <option className='text-sm' value="popular">Popular</option>
              <option className='text-sm' value="trending">Trending</option>
              <option className='text-sm' value="regular">Regular</option>
              </select>
          </div>
          {/* Second card */}
          <div className="flex items-center bg-white p-1 md:p-2 rounded">
          <select className='focus:outline-none' name="" id=""> 
              <option value="">Courses</option>
              <option value="">Classes</option>
              </select>
          </div>
          {/* Third card */}
          <div className="flex items-center bg-white p-1 md:p-2 rounded">
              <h5 className='font-bold hidden md:block text-gray-900'>Category:</h5>
              <select className='focus:outline-none' name="" id=""> 
              <option value="">All Category</option>
              <option value="">Education</option>
              <option value="">Marketing</option>
              </select>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center bg-white p-2 rounded">
           <div className="text-xl">
           <BiFilter/>
            </div> 
             <span>Filters</span>
          </div>
          <div className="flex items-center bg-white p-2 rounded">
            <div className="text-form-primary">
            <BsFillGridFill/>
            </div>
          </div>
          </div>
      </div>
      {/* TOP SECTION  */}
      {/* COURSE SECTION */}
      <div className="grid grid-cols-12 gap-4">
        {
          arrays?.map(d=>(
            <div key={d} className="col-span-12 md:col-span-4 bg-white">
              <CourseCard/>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Courses;

