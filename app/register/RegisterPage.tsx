"use client"
import {useState} from 'react'
import { useForm } from 'react-hook-form';
import FormHeading from '../components/form/FormHeading';
import Input from '../components/form/Input';

export default function RegisterPage() {const {formState:{errors}}=useForm()
const [data,setData]=useState();
const [step,setStep]=useState(0);
const [stepValue,setStepValue]=useState()

let formFields=
<>
    <FormHeading heading='Personal Information'/>
    <Input label='Full Name' id='name' required errors={errors} />
</>
return (
    <main className="flex min-h-screen flex-col items-center">
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
        <form action="">
            {formFields}
        <button type={step===2?'submit':'button'}>{step===2?'Confirm':"Next"}</button>
        </form>
    </main>
)
}
