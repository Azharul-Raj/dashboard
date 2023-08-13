"use client"
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import FormHeading from '../components/form/FormHeading';
import Input from '../components/form/Input';
import PasswordInput from '../components/form/PasswordInput';
import Link from 'next/link';
import axios from 'axios';


function Login() {
  const {register,handleSubmit,}=useForm();
  const [isPassword,setIsPassword]=useState(true);
  const [user,setUser]=useState()
 
  const handleLogin=async(data:any)=>{
    try {
      const response=await axios.post('https://job-task-server.onrender.com/api/v1/user/login',data);

      console.log(response.data)
      console.log('here')
    } catch (error) {
      console.log(error)
    }    
  }

  return (
    <section className="flex min-h-screen flex-col items-center my-[2%]">
      <div className="w-full md:flex justify-center items-center flex-col">
        <FormHeading heading='Welcome Back!!'/>
        <form onSubmit={handleSubmit(handleLogin)} className='mx-2  md:w-[600px]'>
          <Input id='email' type='email' label='Email Address*' placeholder='Enter Email Address' register={register} required />
          <PasswordInput id='password' label='Password' type={isPassword?'password':"text"} placeholder='Enter Password' isPassword={isPassword} setIsPassword={setIsPassword} register={register} required/>
        <button className='w-full my-2 text-white bg-form-primary rounded-lg py-2' type='submit'>Log In</button>
        </form>
        <div className="text-center">
        <p className='text-gray-800 font-semibold'>Don't Have An Account? <Link href={'/'} className='text-blue-600 underline'>Register Now</Link></p>
        </div>
      </div>

    </section>
  )
}

export default Login;