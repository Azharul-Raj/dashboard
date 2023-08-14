import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface OptionProps{
    id:string;
    label:string;
    register:UseFormRegister<FieldValues>
    required:boolean;
    options?:string[];
    errors?:FieldErrors<FieldValues>
}

function Option({id,label,register,errors,options,required}:OptionProps) {
  return (
    <div className="py-2">
        <label className="block text-lg font-semibold" htmlFor={id}>{label}</label>
        <select className="w-full px-1 py-[10px] border border-gray-400 rounded-[8px] focus:outline-none caret-gray-900" {...register(id,{required})} name="" id="">
            {
                options?.map((value,i)=>(
                    <option key={i} value={value}>{value}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Option