import Image from 'next/image';
import React from 'react'
import profile from '../../../assets/picture.svg'

function ProfileCard() {
  return (
    <div className='bg-white w-full p-8 rounded-lg'>
        <div className="flex flex-col justify-center items-center">

        <Image width={200} className='rounded-full' src={profile} alt='profile-picture'/>
        <p className='font-semibold text-2xl my-6'>Arif Patwary</p>
        </div>
        {/* DETAILS DIV */}
        <div className="space-y-3">
            <div className="">
                <h5 className='text-xl font-[500]'>About</h5>
                <p className='text-sm text-gray-500'>Hello I am Md Arif Patwary a student in Job Task Platfrom. I love to study with all my class friends and professors.</p>
            </div>
            {/* AGE & GENDER */}
            <div className="flex justify-between">
                <div className="">
                    <h5 className='text-xl font-[500]'>Age</h5>
                    <p className='text-sm text-gray-500'>17</p>
                </div>
                <div className="">
                    <h5 className='text-xl font-[500]'>Gender</h5>
                    <p className='text-sm text-gray-500'>Male</p>
                </div>
            </div>
            {/* DATE OF BIRTH */}
            <div className="">
                <h5 className='text-xl font-[500]'>Date Of Birth</h5>
                <p className='text-sm text-gray-500'>02/05/2006</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard;