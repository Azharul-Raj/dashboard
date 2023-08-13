"use client"

import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { FieldValues, useForm } from 'react-hook-form';
import axios from 'axios'

import FormHeading from './components/form/FormHeading';
import Input from './components/form/Input';
import Option from './components/form/Option';
import { formParts, institutes, levels } from '@/data';

import success from '../assets/Frame.svg';
import PasswordInput from './components/form/PasswordInput';

const poppins=Poppins({subsets:['latin'],weight:['200','400','500']})

axios.defaults.baseURL=`https://job-task-server.onrender.com/api/v1`

enum STEPS {
    PERSONAL = 1,
    SECURITY = 2,
    CONFIRM = 3
}

export default function RegisterPage() {
    const { formState: { errors }, handleSubmit, register } = useForm<FieldValues>()
    const [isPassword,setIsPassword]=useState(true)
    const [step, setStep] = useState(STEPS.PERSONAL);
    const [stepsArray, setStepsArray] = useState<number[]>([1])
    //OnNext function
    const onNext = () => {
        setStep(value => value + 1)
    }
    
    const onSubmit = (data: any) => {
        setStepsArray(previous => [...previous, step + 1])
        if (step !== STEPS.SECURITY) {
            return onNext()
        }

        return onNext()
    }
    let formBody;
    if (step === STEPS.PERSONAL) {
        formBody =
            <>
                <FormHeading heading='Personal Information' />
                <Input placeholder='Type your Name' label='Full Name' register={register} id='name' required errors={errors} />
                <Input placeholder='Your Email' label='Email Address' type='email' register={register} id='email' required errors={errors} />
                <Option label='Position' required id='position' register={register} options={['Student', 'Teacher']} errors={errors} />
                <Option label='Institute Name' required id='institute' register={register} options={institutes} errors={errors} />
                <Option label='Education Level' required id='level' register={register} options={levels} errors={errors} />
            </>
    }
    if (step === STEPS.SECURITY) {
        formBody =
            <>
                <FormHeading heading='Security' />
                <PasswordInput id='password' label='Password' type={isPassword?'password':'text'} placeholder='Your Password' register={register} required isPassword={isPassword} setIsPassword={setIsPassword}/>
                <PasswordInput id='confirm-pass' label='Confirm Password' type={isPassword?'password':'text'} placeholder='Confirm Password' register={register} required isPassword={isPassword} setIsPassword={setIsPassword}/>
            </>
    }
    if (step === STEPS.CONFIRM) {
        formBody =
            <>
            <div className="flex flex-col justify-center items-center my-5">
                <div className="my-8">
                <Image  className='p-1 w-52 md:w-full bg-blue-300 rounded-full' src={success} alt='Success Image'/>
                </div>
                <h4 className='text-2xl text-gray-800 font-semibold my-2'>Thank You!</h4>
                <div className="lg:w-[45%] text-center">
                <p className={`${poppins.className} font-[400] text-gray-700 md:text-[18px]`}>Account Has Been Created. Enjoy Job Task.</p>
                </div>
            </div>
            </>
    }
    return (
        // <ClientOnly>
        <section className="flex min-h-screen flex-col items-center my-[2%]">
                {/* First icon part */}
                <div className=" flex justify-between items-center">
                    {
                        formParts.map(({ name, id }) => (
                            <div key={id} className="flex justify-between">
                                {/* rounded pointer */}
                                <div className={`border-[1px] ${stepsArray.includes(id) ? 'bg-form-primary' : ''} flex border-form-primary justify-center rounded-full`}>
                                    <p className={`py-1 px-[10px] md:py-2 md:px-4 text-sm md:text-base ${stepsArray.includes(id) ? 'text-white' : 'text-[#6078EA]'}`}>{id}</p>
                                </div>
                                <div className="items-center flex">
                                    <div className="h-[1px] mx-2 bg-blue-700 md:w-8 lg:w-20"></div>
                                    <p className={`${stepsArray.includes(id + 1) ? 'text-form-primary' : ''} text-sm md:text-[24px] ${id!==3?'mr-3':''}`}>{name}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            {/* The form will be here */}
            <div className="w-full md:flex justify-center items-center ">
                <form className='mx-2 lg:w-[600px]' onSubmit={handleSubmit(onSubmit)} >
                    {formBody}
                    {step!==3?<button className='w-full my-2 text-white bg-form-primary rounded-lg py-2' type='submit'>{step === 2 ? 'Confirm' : "Next"}</button>
                :
                <div className="text-center">
                <button className='text-base text-form-primary rounded-lg font-semibold py-3 px-8 border-2 border-form-primary'>Go to Home</button>   
                </div> 
                }

                </form>
            </div>
            {step===3 ||<div className="">
                <p className='text-gray-800 font-semibold'>Already Have An Account? <Link href={'/login'} className='text-blue-600 underline'>Log In</Link></p>
            </div>}
        </section>
        // </ClientOnly>
    )
}
