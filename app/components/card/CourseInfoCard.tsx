"use client"
import Image from 'next/image';
import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

import {FiArrowRight} from 'react-icons/fi'

interface CourseInfoCardProps{
  image:string;
  info:string;
  count:number;
  progress?:number;
  tag:string,
  color:string
}

function CourseInfoCard({image,info,count,progress,tag,color}:CourseInfoCardProps) {
  return (
    <div className='px-6 py-7 shadow-info rounded-lg'>
      <div className="flex flex-col justify-between">
        {/* TOP */}
        <div className="flex">
          <div className={`flex py-2 px-[18px] rounded-full
          ${tag=='complete' && 'bg-complete'}
          ${tag=='certificate' && 'bg-certificate'}
          ${tag=='progress' && 'bg-progress'}
          ${tag=='total' && 'bg-total'}
          `          
          }>
            <Image src={image} alt={info} />
          </div>
            <div className="ml-5">
              <h4 className='text-gray-900 text-3xl font-bold'>{count}</h4>
              <p className='text-gray-400'>{info}</p>
            </div>
        </div>
        {/* PROGRESS */}
        <div className="mt-16">
          {progress ?
          <div className='flex items-center justify-between'>
          <ProgressBar className='w-[80%]' customLabelStyles={{color:"transparent"}} completed={progress} bgColor={color} height='8px'/>
            <div className="w-[20%] ml-4">
              {progress}%
            </div>
          </div>
          :
          <div className="flex items-center text-[#4C6FFF]">
            <button className={`mr-3`}>View Courses</button>
            <FiArrowRight/>
          </div>
           } 
        </div>
      </div>
    </div>
  )
}

export default CourseInfoCard