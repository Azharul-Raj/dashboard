"use client"
import useAutosizeTextArea from '@/app/hooks/useResize';
import React,{useRef,useState} from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps{
    id:string;
    label:string;
    placeholder:string
    register:UseFormRegister<FieldValues>
    type?:string;
    required:boolean;
    errors?:FieldErrors<FieldValues>
    border?:boolean
}

function TextArea({placeholder,id,label,register,required,errors,border}:InputProps) {
  const [value,setValue]=useState("")
    const textAreaRef =  useRef<HTMLInputElement | null>(null);
    // @ts-ignore
    useAutosizeTextArea(textAreaRef?.current,value)

    const { ref, ...rest } = register(id,{required})
    const autoResize=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
      const value=e.target?.value
      setValue(value)
    }

  return (
    <div className="w-full py-2">
        <label className='text-gray-900 block pb-1 text-lg font-semibold'>{label}</label>
      <textarea 
      {...rest}
      ref={(e) => {
        ref(e)
        // @ts-ignore
        textAreaRef.current = e // you can still assign to ref
      }}
      placeholder={placeholder}  className={` w-full px-1 border border-gray-400 ${border?
        'rounded':'rounded-lg'} focus:outline-none`} id={id}  
        value={value}
        rows={6}
        onChange={autoResize}
        />
      
      {errors && <p>{errors.root?.message}</p> }
    </div>
  )
}

export default TextArea;