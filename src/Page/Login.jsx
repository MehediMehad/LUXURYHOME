
const Login = () => {
    return (
        <div className="card shrink-0 lg:w-[448px] md:mt-40 mx-auto shadow-2xl bg-base-100">
            <h1 className="font-bold text-4xl mt-6 text-center">Log In</h1>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <button className="btn bg-violet-900 text-white text-base font-bold hover:bg-violet-800 hover:scale-105">Login</button>
                </div>
                <div className="flex items-center justify-around">
                    <hr className="w-[120px] border  border-slate-600 mt-1" /> <p className="text-base text-gray-700 text-center">or continue with</p> <hr className="w-[120px] border  border-slate-600 mt-1" />
                </div>
                <div className="form-control ">
                    <button className="btn bg-[#2585f9] text-white text-base font-bold hover:bg-[#3488ef] hover:scale-105">Login with Facebook</button>
                </div>
                <div className="form-control ">
                    <button className="btn bg-[#db4437] text-white text-base font-bold hover:bg-[#db4437] hover:scale-105">Login with Google</button>
                </div>
            </form>
        </div>
    );
};

export default Login;