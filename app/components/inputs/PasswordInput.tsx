import React, { Dispatch, SetStateAction } from 'react'
import {FiEye,FiEyeOff} from 'react-icons/fi'

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps{
    id:string;
    label:string;
    placeholder:string
    register:UseFormRegister<FieldValues>
    isPassword:boolean;
    setIsPassword:Dispatch<SetStateAction<boolean>>
    type?:string;
    required:boolean;
    errors?:FieldErrors<FieldValues>
}

function PasswordInput({id,errors,label,placeholder,register,type,required,isPassword,setIsPassword}:InputProps) {
  return (
    <div className="w-full py-2 relative">
        <label className='text-gray-900 block pb-1 text-lg font-semibold'>{label}</label>
        <input placeholder={placeholder} className='py-2 w-full px-1 border border-gray-700 rounded-[8px] focus:outline-none' id={id} type={type?type:'text'} {...register(id,{required})} />
      <div className="absolute right-2 top-[50px]">
        {/* @ts-ignore */}
        <div onClick={()=>setIsPassword(value=>!value)}>{isPassword?<FiEyeOff/>:<FiEye/>}</div>
        </div>
      {errors && <p>{errors.root?.message}</p> }
    </div>
  )
}

export default PasswordInput