"use client"

import { useEffect, useState } from 'react';
import {  courseInfos } from '@/data'
import CourseInfoCard from '../components/card/CourseInfoCard'
import ProgressChart from '../components/charts/ProgressChart';
import axios from 'axios';

function DashboardPage() {
  const [statistics,setStatistics]=useState()
 useEffect(()=>{
  axios.get(`https://job-task-server.onrender.com/api/v1/dashboard/statics`)
  .then(res=>setStatistics(res.data.statics))
  .catch(err=>console.log(err.message))
 },[])
  return (
    <div className="flex flex-col p-8 md:p-11">
      {/* COURSE INFOS */}
      <div className="grid grid-cols-12 gap-3">
        {
          courseInfos.map(({count,image,info,progress,tag,color})=>(
            <div key={tag} className="col-span-12 md:col-span-6 lg:col-span-4 ">
                <CourseInfoCard  count={count} progress={progress} color={color} image={image} tag={tag} info={info}/>
            </div>
          ))
        }
      </div>
      {/* CHARTS */}
      <div className="pt-4">
        <div className="p-6 shadow-info rounded-lg">
          <h4 className='font-bold'>Your Daily Progress</h4>
          {/* LINE CHART */}
          <ProgressChart/>
          {/* LINE CHART END */}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;

