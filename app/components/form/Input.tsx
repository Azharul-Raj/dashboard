import {useForm,FieldError} from 'react-hook-form';

interface InputProps{
    id:string;
    name:string;
    type:string;
    required:boolean;
    errors:FieldError
}

function Input({id,name,type,required,errors}:InputProps) {
    const {register}=useForm()
  return (
    <div className="">
        <label>{name}</label>
      <input type={type} {...register(`${name}`,{required})} />
      {errors && <p>{errors.message}</p> }
    </div>
  )
}

export default Input