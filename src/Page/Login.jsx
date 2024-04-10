import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {signIn} =useContext(AuthContext)

    
    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
    } = useForm()
    const handleLogin = (data) => {
        const {email, password} =data
        signIn(email, password)
    }
    return (
        <div className="card shrink-0 md:w-[448px] md:mt-28 mx-auto shadow-2xl bg-base-100">
            <h1 className="font-bold text-4xl mt-6 text-center">Log In</h1>
            <p className="text-base text-center mt-3">Don&apos;t have an account?<span className="text-blue-600"> <NavLink to='/register'>Sign up</NavLink> </span></p>
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                <div className="form-control -mt-5">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register('email')} type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register('password')} type={ showPassword ? "text" : "password"}
                    placeholder="password" className="input input-bordered" required />
                    <label className="label">
                    <div className="relative">
                    <p onClick={() => setShowPassword(!showPassword)} className=" cursor-pointer absolute bottom-7 md:left-[350px] left-[290px]"> {showPassword ? <BsEyeSlash></BsEyeSlash> : <BsEyeFill></BsEyeFill> } </p>
                        </div>
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <button className="btn bg-violet-900 text-white text-base font-bold hover:bg-violet-800 hover:scale-105">Login</button>
                </div>
                <div className="flex items-center justify-around">
                    <hr className="w-[120px] border  border-slate-600 mt-1" /> <p className="text-base text-gray-700 text-center">or continue with</p> <hr className="w-[120px] border  border-slate-600 mt-1" />
                </div>
            </form>
            <div className="card-body -mt-12">
                <div className="form-control ">
                    <button className="btn bg-[#2585f9] text-white text-base font-bold hover:bg-[#3488ef] hover:scale-105">Login with Facebook</button>
                </div>
                <div className="form-control ">
                    <button className="btn bg-[#db4437] text-white text-base font-bold hover:bg-[#db4437] hover:scale-105">Login with Google</button>
                </div>
            </div>

        </div>
    );
};

export default Login;