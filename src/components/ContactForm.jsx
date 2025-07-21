import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Login from "./Login";
function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="h-screen justify-center items-center flex mx-96">
        <div className="  w-3/4 ">
          <div className="modal-box dark:bg-slate-700">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-xs btn-circle btn-ghost bg-pink-500 text-white hover:bg-pink-600 absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-3xl">Contact Us</h3>
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
                      {...register("Name", { required: true })}
                      type="text"
                      className="grow dark:text-slate-950"
                      placeholder="Username"
                    />
                    {errors.Name && (
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
                      {...register("Email", { required: true })}
                      type="email"
                      className="grow dark:text-slate-950"
                      placeholder="Email"
                    />
                    {errors.Email && (
                      <span className="text-xs text-orange-500">
                        This field is required
                      </span>
                    )}
                  </label>
                </div>
                <div className="my-6 flex flex-col">
                  <span className="font-semibold mx-3">Message</span>
                  <textarea
                    {...register("Message", { required: true })}
                    placeholder="Message"
                    className="textarea textarea-bordered textarea-lg my-1 w-full max-w-xs"
                  ></textarea>
                </div>

                <div className="flex mt-3 justify-between">
                  <button className="btn btn-active py-1 bg-pink-600 hover:bg-pink-700 text-white">
                    Contact
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
