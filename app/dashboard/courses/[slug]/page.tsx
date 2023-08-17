"use client"
import React from 'react'
import {  usePathname } from 'next/navigation'
import DashboardPageHeader from '@/app/components/dashboard/PageHeader';
import CourseDetailsCard from '@/app/components/card/CourseDetailsCard';
import { course } from '@/data';

import {FiCheck,FiShoppingCart} from 'react-icons/fi'
import { CommentForm } from '@/app/components/form/CommentForm';
import Review from '@/app/components/Review';

function Details() {
    const pathname=usePathname();
    const arr=pathname?.split('/').slice(2);
  return (
    <>
    {arr && <DashboardPageHeader paths={arr} target={arr[arr.length-1]}/>}
    <section className='bg-gray-100 px-5 py-5'>
        <div className="grid grid-cols-12 gap-2">
          {/* LEFT SECTION  */}
            <div className="col-span-12 md:col-span-8">
                <CourseDetailsCard/>
                <div className="">
                  <Review/>
                </div>
            </div>
            {/* RIGHT SECTION */}
            <div className="hidden md:block md:col-span-4 bg-white md:p-2 lg:p-5 rounded-lg">
                <h4 className='font-[500] text-lg'>Basic Overview</h4>
                {
                  course.map((lesson,i)=>(
                    <div key={i} className="">
                      <h5 className='my-4'>{lesson.lesson}</h5>
                      {
                        lesson.chapters.map((ch,i)=>(
                          <div key={i} className="">
                          <div className="flex justify-between items-center my-2">
                            <div className="md:px-2 md:py-1 lg:px-4 lg:py-2  bg-[#E9EDFF] rounded-full my-1">
                              {ch.unit}
                            </div>
                            <div className="md:text-sm lg:text-base">
                            <p className=''>{ch.name}</p>
                            </div>
                            <div className="hidden lg:block">
                            <FiCheck/>
                            </div>
                          </div>
                          </div>
                        ))
                      }
                    </div>
                  ))
                }
                <div className="w-full">
                  <button className='text-white bg-form-primary w-full items-center justify-center rounded-lg flex py-2'><span className='text-2xl mr-2'><FiShoppingCart/></span> Buy Now</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Details