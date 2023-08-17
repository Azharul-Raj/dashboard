"use client"
import React, { useState } from 'react'
import Image from 'next/image';

import blogImage from '../../../assets/course/artifical-intaligence.jpg'
import author from '../../../assets/course/author.svg'

function CourseDetailsCard() {
  const [section,setSection]=useState("overview");
  return (
    <div className='bg-white p-7 rounded-lg'>
        <Image src={blogImage} alt='course-thumbnail'/>
        <h4 className='text-gray-900 text-[24px] md:py-4 font-semibold'>Artificial Intelligence & Machine Learning</h4>
        <p className='text-gray-500 py-2'>By <span className='font-semibold text-gray-900 '>Simon Shaw,</span> Illustrator and 3D designer</p>
        <div className="flex items-center md:py-2">
            <Image width={50} src={author} alt='author'/>
            <p className='font-semibold ml-4'>Simon Shaw</p>
        </div>
        <div className="flex space-x-4 md:py-2">
          <button
          onClick={()=>setSection('overview')}
          className={`${section=='overview'?'text-white bg-[#FF7800]':'text-gray-900'} px-2 py-1 rounded-full`}
          >
            Overview 
          </button>
          <button 
            onClick={()=>setSection('curriculum')}
          className={`${section=='curriculum'?'text-white bg-[#FF7800]':'text-gray-900'} px-2 py-1 rounded-full`}>
            Curriculum 
            </button>
        </div>
            {
              section=='overview'?
              <div className="">
                <p>IBM is the second-largest Predictive, consectetur adipiscing elit. Sit turpis egestas aenean amet ac rhoncus vitae tristique. A sed magna vitae nullam. Accumsan ullamcorper amet congue fermentum egestas purus molestie nam. Dolor, dictumst mauris vestibulum vehicula vel cras. Pellentesque nam congue auctor dolor mattis erat. Pharetra feugiat in justo purus dolor feugiat ultrices. Pretium at parturient curabitur eget nunc pharetra. Vitae pharetra adipiscing purus faucibus bibendum. Ultrices mi tristique et enim pretium lacus, vivamus. Augue eget fermentum, mauris viverra. Tristique arcu ipsum risus a arcu pellentesque pharetra velit. Neque, erat tristique volutpat faucibus mattis vulputate faucibus. Ut phasellus nulla at sociis est, turpis purus. Faucibus donec malesuada tristique quam commodo felis nulla.</p>
              </div>
              :
              <div className=""></div>
            }
    </div>
  )
}

export default CourseDetailsCard;