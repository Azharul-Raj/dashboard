"use client"
import React from 'react'
import FormHeading from './FormHeading';
import { useForm } from 'react-hook-form';
import Input from './Input';
import Option from './Option';
import TextArea from './TextArea';

function ProfileForm() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const handleUpdate=(data:any)=>{
        console.log(data)
    }
  return (
    <div className='bg-white p-5 rounded-lg'>
        <FormHeading heading='Personal Information' align='text-left'/>
        <form onSubmit={handleSubmit(handleUpdate)} className='flex flex-col' action="">
        <div className="flex flex-col md:flex-row  justify-between space-x-2">
            <Input id='fname' label='First Name' register={register} required placeholder='Rakib' errors={errors} border/>
            <Input id='lname' label='Last Name' register={register} required placeholder='Hossain' errors={errors} border/>
        </div>
        <div className="flex flex-col md:flex-row   justify-between space-x-2">
            <div className="w-full md:w-1/2">

            <Input id='birth-date' label='Date of Birth' register={register} required placeholder='15 July, 1998' errors={errors} border/>
            </div>
            <div className="w-full md:w-1/2">

            <Option id='gender' label='Gender' register={register} required errors={errors} options={['Male','Female','Others']} border/>
            </div>
        </div>
            <Input id='email' type='email' label='Email Address' register={register} required placeholder='rakibhossain@gmail.com' errors={errors} border/>
            <Input id='phone' label='Phone Number' register={register} required placeholder='01456743643' errors={errors} border/>
            <TextArea 
            id='cover' 
            label='Cover Letter' 
            placeholder='Hello I am Sarah Smith a student in Sanjivni College Surat. I love to study with all my class friends and professors.'
            register={register}
            required
            errors={errors}

            />
            <button className='bg-form-primary py-4 px-7 text-white font-semibold w-1/5 rounded-md' type='submit'>
                Update 
            </button>
        </form>
    </div>
  )
}

export default ProfileForm;