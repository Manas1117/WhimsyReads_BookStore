import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast  from 'react-hot-toast';


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
    const onSubmit = async(data) => {
        const userInfo = {
            email : data.email,
            password : data.password,
          }
          try {
              const res = await axios.post("http://localhost:4001/user/login", userInfo);
              console.log(res.data);
              if (res.data) {
                toast.success('Logged Successfully');
                setTimeout(()=>{
                    document.getElementById("my_modal_3").close();
                    window.location.reload()
                },2000)
              }
              sessionStorage.setItem("Users", JSON.stringify(res.data.user));
          } catch (err) {
              if(err.response){
                  console.log(err.message)
                  toast.error("Error:" + err.response.data.message);
              }
          }
    }
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-700">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <form >
                         <button className="btn btn-xs btn-circle btn-ghost bg-pink-500 text-white hover:bg-pink-600 absolute right-2 top-2">✕</button>
                        </form>
                    
                    <h3 className="font-bold text-lg">Login</h3>
                    <div>
                        <div className='my-6 flex flex-col'>
                        <span className='font-semibold mx-3'>Email</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70 dark:text-slate-950">
                                
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            
                            <input {...register("email", { required: true })} type="text" className="grow dark:text-slate-950" placeholder="Email" />
                            <br />
                            {errors.email && <span className='text-xs text-orange-500'>This field is required</span>}
                        </label>

                        </div>
                        <div className='my-6 flex flex-col' >
                        <span className='font-semibold mx-3'>Password</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70 dark:text-slate-950">
                                
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <br />
                            <input {...register("password", { required: true })} type="password" className="grow dark:text-slate-950 "  />
                            <br />
                            {errors.password && <span className='text-xs text-orange-500'>This field is required</span>}
                        </label>
                        </div>
                        <div className='flex mt-3 justify-between'>
                            <button className="btn btn-active py-1 bg-pink-600 hover:bg-pink-700 text-white">Login</button>
                            <p className='my-3'>Not Registered?<Link to={'/signUp'} className='text-blue-400 underline cursor-pointer'>Sign up</Link></p>
                        </div>
                    </div>
                    </form>
                </div>
            </dialog> 
        </div>
    )
}

export default Login
