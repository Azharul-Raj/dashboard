import React from 'react'

function DashboardPageHeader({paths,target}:{paths?:string[],target:string}) {
  return (
    <div className='p-4'>
        <h4 className='font-semibold text-base'>Discover</h4>
        <div className='flex mr-0.5'>Dashboard  {
            paths && paths.map(path=>(
                <p key={path} className=''>
                 {">"}
                 <span key={path} className={`${path==target?'text-form-primary':''}`}> {path}</span>
                 </p>
            ))
            }</div>
    </div>
  )
}

export default DashboardPageHeader