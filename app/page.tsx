"use client"
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import FormHeading from './components/form/FormHeading';
import Input from './components/form/Input';
import Option from './components/form/Option';
import { formParts, institutes, levels } from '@/data';
import Link from 'next/link';

enum STEPS {
    PERSONAL = 1,
    SECURITY = 2,
    CONFIRM = 3
}

export default function RegisterPage() {
    const { formState: { errors }, handleSubmit, register } = useForm<FieldValues>()
    const [data, setData] = useState();
    const [step, setStep] = useState(STEPS.PERSONAL);
    const [stepsArray, setStepsArray] = useState<number[]>([1])
    //OnNext function
    const onNext = () => {
        setStep(value => value + 1)
    }

    const onSubmit = (data: any) => {
        setStepsArray(previous => [...previous, step + 1])
        console.log(step)
        if (step !== STEPS.SECURITY) {
            return onNext()
        }
        console.log(data)
    }
    let formBody;
    if (step === STEPS.PERSONAL) {
        formBody =
            <>
                <FormHeading heading='Personal Information' />
                <Input label='Full Name' register={register} id='name' required errors={errors} />
                <Input label='Email Address' register={register} id='email' required errors={errors} />
                <Option label='Position' required id='position' register={register} options={['Student', 'Teacher']} errors={errors} />
                <Option label='Institute Name' required id='institute' register={register} options={institutes} errors={errors} />
                <Option label='Education Level' required id='level' register={register} options={levels} errors={errors} />
            </>
    }
    if (step === STEPS.SECURITY) {
        formBody =
            <>
                <FormHeading heading='Security' />
                <Input label='Password' register={register} type='password' id='password' required errors={errors} />
                <Input label='Confirm Password' register={register} type='password' id='confirm-password' required errors={errors} />
            </>
    }
    if (step === STEPS.CONFIRM) {
        formBody =
            <>

            </>
    }
    console.log(stepsArray)
    return (
        // <ClientOnly>
        <section className="flex min-h-screen flex-col items-center my-[5%]">
            <h1>This is the header.</h1>
            {/* Form heading part */}
            <div className="">
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
                                    <div className="h-[1px] mx-2 bg-blue-700 lg:w-20"></div>
                                    <p className={`${stepsArray.includes(id + 1) ? 'text-form-primary' : ''} text-sm md:text-[24px] ${id!==3?'mr-3':''}`}>{name}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            {/* The form will be here */}
            <div className="flex justify-center items-center ">
                <form className='w-full mx-2 lg:w-[600px]' onSubmit={handleSubmit(onSubmit)} >
                    {formBody}
                    <button className='w-full my-2 text-white bg-form-primary rounded-lg py-2' type='submit'>{step === 2 ? 'Confirm' : "Next"}</button>
                </form>
            </div>
            <div className="">
                <p className='text-gray-800 font-semibold'>Already Have An Account? <Link href={'/login'} className='text-blue-600'>Log In</Link></p>
            </div>
        </section>
        // </ClientOnly>
    )
}
