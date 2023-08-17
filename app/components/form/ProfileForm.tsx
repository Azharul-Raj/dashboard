"use client"
import React from 'react'
import FormHeading from './FormHeading';
import { useForm } from 'react-hook-form';
import Input from './Input';
import Option from './Option';
import TextArea from './TextArea';
import axios from 'axios';

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

function ProfileForm({profile}:profileProps) {
    const {register,handleSubmit,formState:{errors}}=useForm();
    //@ts-ignore
    const {birth_date,cover_letter,email,full_name,gender,phone}=profile
    const handleUpdate=async(data:any)=>{
        try {
            const response= await axios.post(`https://job-task-server.onrender.com/api/v1/user/details/update`,data)
            if((await response).data){
                console.log(`Profile updated successfully.`)
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='bg-white p-5 rounded-lg'>
        <FormHeading heading='Personal Information' align='text-left'/>
        <form onSubmit={handleSubmit(handleUpdate)} className='flex flex-col' action="">
        <div className="flex flex-col md:flex-row  justify-between space-x-2">
            <Input id='fname' label='First Name' register={register} required placeholder={full_name?full_name.split(" ")[0]:'Rakib'} errors={errors} border/>
            <Input id='lname' label='Last Name' register={register} required placeholder={full_name?full_name.split(" ")[1]:'Rakib'} errors={errors} border/>
        </div>
        <div className="flex flex-col md:flex-row   justify-between space-x-2">
            <div className="w-full md:w-1/2">

            <Input id='birth-date' label='Date of Birth' register={register} required placeholder={birth_date?birth_date:'15 July, 1998'} errors={errors} border/>
            </div>
            <div className="w-full md:w-1/2">

            <Option id='gender' label='Gender' register={register} required errors={errors} options={['Male','Female','Others']} border/>
            </div>
        </div>
            <Input id='email' type='email' label='Email Address' register={register} required placeholder={email?email:'rakibhossain@gmail.com'} errors={errors} border/>
            <Input id='phone' label='Phone Number' register={register} required placeholder={phone?phone:'01456743643'} errors={errors} border/>
            <TextArea 
            id='cover' 
            label='Cover Letter' 
            placeholder={cover_letter?cover_letter:'Hello I am Sarah Smith a student in Sanjivni College Surat. I love to study with all my class friends and professors.'}
            register={register}
            required
            errors={errors}

            />
            <button className='bg-form-primary py-4 px-7 text-white font-semibold w-full lg:w-1/5 rounded-md' type='submit'>
                Update 
            </button>
        </form>
    </div>
  )
}

export default ProfileForm;