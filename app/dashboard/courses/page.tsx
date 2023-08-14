"use client"

import DashboardPageHeader from '@/app/components/dashboard/PageHeader';
import { usePathname } from 'next/navigation'
import React from 'react'

function Courses() {
  const pathname=usePathname();
  const arr=pathname?.split('/').slice(2);
  return (
    <>
    {arr && <DashboardPageHeader paths={arr} target={arr[arr.length-1]}/>}
    </>
  )
}

export default Courses