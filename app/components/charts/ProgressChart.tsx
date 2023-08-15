"use client"

import React, { useEffect, useState } from 'react'
import { Area, AreaChart, CartesianGrid, Legend, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
import ClientOnly from '../ClientOnly';
import { chartInfo } from '@/data';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
interface screenProps{
  width:number;
  height:number
}

export default function ProgressChart() {
  

  return (
    <ClientOnly>
      <div className="w-full h-72 md:h-96">
      <ResponsiveContainer width="100%" height="100%">
    <AreaChart
    width={800}
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
    <Area type="monotone" dataKey="watchHours" stroke="#82ca9d" fill="#8884d8" />
  </AreaChart>
  </ResponsiveContainer>
  </div>
  </ClientOnly>
  );
}
