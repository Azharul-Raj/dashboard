"use client"
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import FormHeading from '../../app/components/form/FormHeading';
import Input from '../../app/components/form/Input';
import Option from '../../app/components/form/Option';
import ClientOnly from '../../app/components/ClientOnly';

export default function RegisterPage() {
    const { formState: { errors },handleSubmit,register } = useForm<FieldValues>()
    const [data, setData] = useState();
    const [step, setStep] = useState();
    const [stepValue, setStepValue] = useState()

    const onSubmit=()=>{
    }

    let formFields =
        <>
            <FormHeading heading='Personal Information' />
            <Input label='Full Name' register={register} id='name' required errors={errors} />
            <Input label='Email Address' register={register} id='email' required errors={errors} />
            <Option label='Position' required id='position' register={register} options={['Student','Teacher']} errors={errors}/>
        </>
    return (
        <ClientOnly>
        <section className="flex min-h-screen flex-col items-center">
            <h1>This is the header.</h1>
            {/* Form heading part */}
            <div className="">
                {/* First icon part */}
                <div className=" flex justify-between items-center">
                    {/* rounded pointer */}
                    <div className="border-[1px]  flex border-blue-700 justify-center rounded-full">
                        <p className="py-2 px-4 text-black">1</p>
                    </div>
                    <div className="flex items-center">
                        <div className="h-[1px] mx-2 bg-blue-700 lg:w-20"></div>
                        <p className="text-black text-[24px]">Information</p>
                    </div>
                    {/* first end */}
                    {/* rounded second pointer */}
                    <div className="border-[1px] lg:ml-4 flex border-blue-700 justify-center rounded-full">
                        <p className="py-2 px-4 text-black">2</p>
                    </div>
                    <div className="flex items-center">
                        <div className="h-[1px] mx-2 bg-blue-700 lg:w-20"></div>
                        <p className="text-black text-[24px]">Security</p>
                    </div>
                    {/* second end */}
                    {/* rounded third pointer */}
                    <div className="border-[1px] lg:ml-4  flex border-blue-700 justify-center rounded-full">
                        <p className="py-2 px-4 text-black">3</p>
                    </div>
                    <div className="flex items-center">
                        <div className="h-[1px] mx-2 bg-blue-700 lg:w-20"></div>
                        <p className="text-black text-[24px]">Confirmation</p>
                    </div>
                    {/* third end */}
                </div>
            </div>
            {/* The form will be here */}
            <div className="flex justify-center items-center ">
                <form className='lg:w-[600px]' onSubmit={handleSubmit(onSubmit)} action="">
                    {formFields}
                    <button className='w-full text-white bg-blue-400 rounded-lg py-2' type={step === 2 ? 'submit' : 'button'}>{step === 2 ? 'Confirm' : "Next"}</button>
                </form>
            </div>
        </section>
        </ClientOnly>
    )
}
