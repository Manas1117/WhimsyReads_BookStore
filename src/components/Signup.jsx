import React from "react";
import { Link, json, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        "http://localhost:4001/user/signup",
        userInfo
      );
      console.log(res.data);
      if (res.data) {
        toast.success("Signed Successfully");
        navigate(from, { replace: true });
        window.location.reload();
      }
      sessionStorage.setItem("Users", JSON.stringify(res.data.user));
    } catch (err) {
      if (err.response) {
        console.log(err.message);
        toast.error("Error:" + err.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="h-screen justify-center items-center flex md:mx-96">
        <div className=" w-full md:w-3/4 ">
          <div className="modal-box dark:bg-slate-700">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-xs btn-circle btn-ghost bg-gray-500 text-white hover:bg-gray-600 absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div>
                <div className="my-6 flex flex-col">
                  <span className="font-semibold mx-3">Name</span>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70 dark:text-slate-950"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      {...register("fullname", { required: true })}
                      type="text"
                      className="grow dark:text-slate-950"
                      placeholder="Username"
                    />
                    {errors.fullname && (
                      <span className="text-xs text-orange-500">
                        This field is required
                      </span>
                    )}
                  </label>
                </div>
                <div className="my-6 flex flex-col">
                  <span className="font-semibold mx-3">Email</span>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70 dark:text-slate-950"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>

                    <input
                      {...register("email", { required: true })}
                      type="email"
                      className="grow dark:text-slate-950"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <span className="text-xs text-orange-500">
                        This field is required
                      </span>
                    )}
                  </label>
                </div>
                <div className="my-6 flex flex-col">
                  <span className="font-semibold mx-3">Password</span>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70 dark:text-slate-950"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      {...register("password", { required: true })}
                      type="password"
                      className="grow"
                    />
                    {errors.password && (
                      <span className="text-xs text-orange-500">
                        This field is required
                      </span>
                    )}
                  </label>
                </div>
                <div className="flex gap-3 mt-3 justify-between">
                  <button className="btn btn-active py-1 bg-gray-600 hover:bg-gray-700 text-white">
                    Signup
                  </button>
                  <p className="my-3">
                    Have Account?
                    <button
                      className="text-blue-400 underline cursor-pointer"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login
                    </button>
                    <Login />
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
