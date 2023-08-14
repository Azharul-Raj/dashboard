"use client"
import React from 'react'
import FormHeading from './FormHeading';
import { useForm } from 'react-hook-form';
import Input from './Input';
import Option from './Option';

function ProfileForm() {
    const {register,handleSubmit,formState:{errors}}=useForm()
  return (
    <div className='bg-white p-5 rounded-lg'>
        <FormHeading heading='Personal Information' align='text-left'/>
        <form action="">
        <div className="flex justify-between space-x-2">
            <Input id='fname' label='First Name' register={register} required placeholder='Rakib' errors={errors} border/>
            <Input id='lname' label='Last Name' register={register} required placeholder='Hossain' errors={errors} border/>
        </div>
        <div className="flex justify-between space-x-2">
            <div className="w-1/2">

            <Input id='birth-date' label='Date of Birth' register={register} required placeholder='15 July, 1998' errors={errors} border/>
            </div>
            <div className="w-1/2">

            <Option id='gender' label='Gender' register={register} required errors={errors} options={['Male','Female','Others']}/>
            </div>
        </div>
        </form>
    </div>
  )
}

export default ProfileForm;