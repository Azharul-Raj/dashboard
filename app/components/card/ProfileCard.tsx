import Image from 'next/image';
import React from 'react'
import profilePicture from '../../../assets/picture.svg'
interface profileProps{
   profile:{
    birth_date:string;
    cover_letter:string;
    email:string;
    full_name:string;
    gender:string;
    phone:string;
   }|undefined
}

function ProfileCard({profile}:profileProps) {
    //@ts-ignore
    const {birth_date,full_name,gender}=profile
  return (
    <div className='bg-white w-full p-8 rounded-lg'>
        <div className="flex flex-col justify-center items-center">

        <Image width={200} className='rounded-full' src={profilePicture} alt='profile-picture'/>
        <p className='font-semibold text-2xl my-6'>{full_name?full_name:'Arif Patwary'}</p>
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
                    <p className='text-sm text-gray-500'>{gender?gender:'Male'}</p>
                </div>
            </div>
            {/* DATE OF BIRTH */}
            <div className="">
                <h5 className='text-xl font-[500]'>Date Of Birth</h5>
                <p className='text-sm text-gray-500'>{birth_date?birth_date:'02/05/2006'}</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard;