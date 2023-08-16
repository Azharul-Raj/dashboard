import React from 'react'
import Image from 'next/image';

import course from '../../../assets/course/course-image.png';
import film from '../../../assets/course/film-icon.svg'

function CourseCard() {
  return (
    <div className='bg-white p-2 rounded'>
        <Image className='rounded' src={course} alt='course-image'/>
        <h4 className='font-semibold'>Learning Maxon Cinem</h4>
        <div className="flex justify-between items-center pt-10">
            <div className="flex space-x-2 items-center">
              <Image src={film} alt='film'/>
              <span className='text-base md:text-xs lg:text-base'>59 Lessons (9h 11m)</span>
            </div>
            <button className='bg-form-primary px-3 py-0.5 text-white rounded'>140$</button>
        </div>
    </div>
  )
}

export default CourseCard;