import Image from 'next/image'
import React from 'react'

function DashboardPage() {
  return (
    <div className='px-6 py-7 shadow-info'>
      <div className="flex flex-col justify-between">
        {/* TOP */}
        <div className="">
          <div className="flex">
            {/* <Image/> */}
            <div className="">
              <h4></h4>
              <p></p>
            </div>
          </div>
        </div>
        {/* PROGRESS */}
        <div className=""></div>
      </div>
    </div>
  )
}

export default DashboardPage