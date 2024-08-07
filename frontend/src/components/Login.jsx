import React from "react";
import {Link} from "react-router-dom"
import { useForm } from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-5">
              ✕
            </button>
            {/* </form> */}
          <h3 className="font-bold text-lg">Login !</h3>
          {/* email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="enter your email"
              className="w-80 px-3 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br/>
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          {/* password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="enter your password"
              className="w-80 px-3 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            <br/>
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          {/* Button */}
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1">
              Login
            </button>
            <p>
              Not Registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer"
              >
               signup
              </Link>{" "}
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;