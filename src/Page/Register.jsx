import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {
    // UseContext
    const {createUser}= useContext(AuthContext)

    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
    } = useForm()
    const handleRegister = (data) => {
        const {email, password} =data
        console.log('d', email, password);
        createUser(email, password)
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.error(error)
        })
    }
// createUser

    return (
        <>
            <Helmet>
                <title>Register LUXURY Homes</title>
            </Helmet>
            <div className="card shrink-0 md:w-[448px] md:mt-28 mx-auto shadow-2xl bg-base-100">
                <h1 className="font-bold text-4xl mt-6 text-center">Register</h1>
                <p className="text-base text-center mt-3">Already have an account?<span className="text-blue-600"> <NavLink to='/login'>Log In</NavLink> </span></p>
                <form onSubmit={handleSubmit(handleRegister)} className="card-body">
                    <div className="form-control -mt-5">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input {...register('fullName')} type="text" placeholder="full name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email')} type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register('password')} type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label mt-1">
                            <input type="checkbox" name="tram" id="" /> <p className="text-xs ml-2"> I accept the <NavLink>Terms and condition</NavLink></p>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn bg-violet-900 text-white text-base font-bold hover:bg-violet-800 hover:scale-105">Register</button>
                    </div>
                </form>

            </div>
        </>
    );
};

export default Register;