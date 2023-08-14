"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { chartInfo, courseInfos } from '@/data'
import CourseInfoCard from '../components/card/CourseInfoCard'

function DashboardPage() {
 
  return (
    <div className="flex flex-col p-11">
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
          <LineChart
          width={800}
          height={300}
          data={chartInfo.progress}

          >
            <XAxis dataKey={`dayName`}/>
            <YAxis/>
            <Tooltip/>
            <Line type="monotone" dataKey="watchHours"  stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;

