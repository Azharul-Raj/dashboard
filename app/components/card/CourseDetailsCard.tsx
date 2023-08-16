import React from 'react'
import Image from 'next/image';

import blogImage from '../../../assets/course/artifical-intaligence.jpg'

function CourseDetailsCard() {
  return (
    <div className='bg-white p-7'>
        <Image src={blogImage} alt='course-thumbnail'/>
        <h4 className='text-gray-900'>Artificial Intelligence & Machine Learning</h4>
    </div>
  )
}

export default CourseDetailsCard;