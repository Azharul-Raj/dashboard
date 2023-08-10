
import {useForm,FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form';

interface InputProps{
    id:string;
    label:string;
    register:UseFormRegister<FieldValues>
    type?:string;
    required:boolean;
    errors:FieldErrors<FieldValues>
}

function Input({id,label,type,required,errors,register}:InputProps) {
  return (
    <div className="w-full py-2">
        <label className='text-gray-900 block pb-1 text-xl font-semibold'>{label}</label>
      <input className='py-2 w-full px-1 border border-gray-700 rounded-[8px] focus:outline-none' id={id} type={type?type:'text'} {...register(id,{required})} />
      {errors && <p>{errors.root?.message}</p> }
    </div>
  )
}

export default Input;