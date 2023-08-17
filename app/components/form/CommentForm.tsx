import { useForm } from "react-hook-form"
import TextArea from "../inputs/TextArea"
import axios from "axios";

export const CommentForm=()=>{
    const {register,handleSubmit,formState:{errors}}=useForm();

    const handleComment=async(data:any)=>{
        try {
            const response=await axios.post(`https://job-task-server.onrender.com/api/v1/course/comment/add`,data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }        
    }
    return(
        <div className="">
            <form onSubmit={handleSubmit(handleComment)} action="">
                <TextArea 
                label="Leave a comment"
                register={register}
                required
                border
                errors={errors}
                id="comment"
                placeholder="Write Your comment"/>
                <button className="lg:bg-form-primary lg:w-1/4 text-white py-2 rounded" type="submit">Publish Review</button>
            </form>
        </div>
    )
}