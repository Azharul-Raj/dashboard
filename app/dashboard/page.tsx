import { courseInfos } from '@/data'
import Image from 'next/image'
import React from 'react'
import CourseInfoCard from '../components/card/CourseInfoCard'

function DashboardPage() {
  return (
    <div className="flex flex-col p-11">
      {/* COURSE INFOS */}
      <div className="grid grid-cols-12 gap-3">
        {
          courseInfos.map(({count,image,info,progress,tag,color})=>(
            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
                <CourseInfoCard count={count} progress={progress} color={color} image={image} tag={tag} info={info}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DashboardPage