"use client"

import React, { useEffect, useState } from 'react'
import { Area, AreaChart, CartesianGrid, Legend, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
import ClientOnly from '../ClientOnly';
import { chartInfo } from '@/data';
import axios from 'axios';

interface screenProps{
  width:number;
  height:number
}

export default function ProgressChart() {
  const [cartData,setChartData]=useState([])
  useEffect(()=>{
    axios.get(`https://job-task-server.onrender.com/api/v1/dashboard/chart`)
    .then(res=>setChartData(res.data.progress))
    .catch(err=>console.log(err.message))
  },[])

  return (
      <div className="w-full h-72 md:h-96">
      <ResponsiveContainer width="100%" height="100%">
    <AreaChart
    width={850}
    height={200}
    data={chartInfo.progress}
    syncId="anyId"
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="dayName" />
    <YAxis dataKey={`watchHours`}/>
    <ZAxis dataKey={`date`}/>
    <Tooltip active/>
    <Area type="monotone" dataKey="watchHours" stroke="#82ca9d" fill="#6078EA3D" />
  </AreaChart>
  </ResponsiveContainer>
  </div>
  );
}
