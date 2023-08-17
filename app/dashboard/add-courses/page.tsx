"use client"

import DashboardPageHeader from "@/app/components/dashboard/PageHeader";
import FileInput from "@/app/components/form/FileInput";
import FormHeading from "@/app/components/form/FormHeading";
import Input from "@/app/components/form/Input";
import TextArea from "@/app/components/form/TextArea";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function AddCourse() {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const pathname = usePathname();
  const arr = pathname?.split('/').slice(2);

  const handleAddCourse=async(data:any)=>{
    try {
      const response=await axios.post(`https://job-task-server.onrender.com/api/v1/course/create`,data)
      if(response.data){
        toast.success('Course added successfully.')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {arr && <DashboardPageHeader paths={arr} target={arr[arr.length - 1]} />}
      <div className="my-8 md:mx-2 lg:mx-12">
        <div className="px-10 pb-2 shadow-info rounded-lg">
          <form onSubmit={handleSubmit(handleAddCourse)} action="">
            <div className="grid grid-cols-12 gap-3">
              {/* LEFT FORM */}
              <div className="col-span-12 md:col-span-6">
                <FormHeading heading="File Upload" align="text-left"/>
                <FileInput id="content" label="Main Course File" register={register} placeholder="Upload" required />
                <FileInput id="thumbnail" label="Thumbnail File" register={register} placeholder="Upload" required small/>
                <FileInput id="intro" label="Introduction File" register={register} placeholder="Upload" required small/>
              </div>              
              {/* RIGHT FORM */}
              <div className="col-span-12 md:col-span-6">
              <FormHeading heading="Other Information" align="text-left"/>
              <Input id="tags" label="Tags" placeholder="Type here...." register={register} required border errors={errors}/>
              <Input id="lesson" label="Lesson Name" placeholder="Type here...." register={register} required border errors={errors}/>
              <TextArea id="description" label="Description / Overview" placeholder="Type here ...." register={register} required/>
              <Input id="price" label="Price" placeholder="$" register={register} required border errors={errors}/>
              </div>              
            </div>
            <button className='bg-form-primary py-4 px-7 text-white font-semibold w-full md:w-1/5 rounded-md' type='submit'>
                Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddCourse