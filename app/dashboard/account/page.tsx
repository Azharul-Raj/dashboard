"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

import DashboardPageHeader from '@/app/components/dashboard/PageHeader'
import ProfileCard from '@/app/components/card/ProfileCard';
import ProfileForm from '@/app/components/form/ProfileForm';

function Profile() {
  const pathname=usePathname();
  const arr=pathname?.split('/').slice(2)
  return (
    <>
    {arr&&<DashboardPageHeader paths={arr} target={arr[arr.length-1]}/>}
    <div className="p-8 bg-gray-100 grid grid-cols-12 h-full gap-2">
      <div className="col-span-4">
        <ProfileCard/>
      </div>
      <div className="col-span-8">
        <ProfileForm/>
      </div>
    </div>
    </>
  )
}

export default Profile