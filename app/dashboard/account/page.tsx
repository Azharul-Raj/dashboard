"use client"
import React,{useEffect,useState} from 'react'
import { usePathname } from 'next/navigation'

import DashboardPageHeader from '@/app/components/dashboard/PageHeader'
import ProfileCard from '@/app/components/card/ProfileCard';
import ProfileForm from '@/app/components/form/ProfileForm';
import axios from 'axios';
import { PuffLoader } from 'react-spinners';

function Profile() {
  const [profile,setProfile]=useState()
  const pathname=usePathname();
  const arr=pathname?.split('/').slice(2)
  useEffect(()=>{
    axios.get(`https://job-task-server.onrender.com/api/v1/user/details`,{
      headers:{
        Authorization:`${`Bearer ${localStorage.getItem('token')}`}`
      }
    })
    .then(res=>setProfile(res.data.user_data))
    .catch(err=>console.log(err))
  },[])
  console.log(profile)
  if(!profile) {
    return (
    <div className="flex justify-center items-center min-h-screen">
      <PuffLoader size={100} color="#36d7b7" />
    </div>
    )
  }
  
  return (
    <>
    {arr&&<DashboardPageHeader paths={arr} target={arr[arr.length-1]}/>}
    <div className="p-8 bg-gray-100 grid grid-cols-12 h-full gap-2">
      <div className="col-span-12 md:col-span-4">
        <ProfileCard profile={profile}/>
      </div>
      <div className="col-span-12 md:col-span-8">
        <ProfileForm profile={profile}/>
      </div>
    </div>
    </>
  )
}

export default Profile