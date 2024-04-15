import { NavLink } from "react-router-dom";
import {Navigate } from 'react-router-dom'
import userDefaultPic from '../assets/dddd.png'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut, signIn, createUser } = useContext(AuthContext)
    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    }
    const handleLogin =() =>{
        signIn()
    }
    const handleRegister =() =>{
        <Navigate to='register'/>
        createUser()
    }
    const navLinks = <>
        <NavLink to='/' className={({isActive})=> isActive? 'font-bold ml-3': 'font-normal ml-3'}>Home</NavLink>
        <NavLink to='/about' className={({isActive})=> isActive? 'font-bold ml-3': 'font-normal ml-3'}>About</NavLink>
        <NavLink to='/contact' className={({isActive})=> isActive? 'font-bold ml-3': 'font-normal ml-3'} >Contact </NavLink>
        <NavLink to='/profile' className={({isActive})=> isActive? 'font-bold ml-3': 'font-normal ml-3'} >Profile </NavLink>
        <NavLink to='/ll' className={({isActive})=> isActive? 'font-bold ml-3': 'font-normal ml-3'} >Update profile </NavLink>
    </>
    return (
        <div className="navbar justify-between bg-base-100  z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52">
                        {navLinks}
                    </ul>
                </div>
                <NavLink to='/' className="md:text-4xl font-bold ml-7 w-96 ">LUXURY HOME</NavLink>
            </div>
            <div className="navbar hidden lg:flex">
                <ul className="menu-horizontal px-1 gap-x-10 ">
                    {navLinks}
                </ul>
            </div>    
             <div className="dropdown dropdown-end lg:mr-10">
                {
                    user ? <>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="rounded-full ">
                                <img className="w-full" alt="Tailwind CSS Navbar component " src={user?.photoURL || userDefaultPic} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <p className="justify-between">
                                    {user.displayName}
                                </p>
                            </li>
                            <li><a> Settings</a></li>
                            {/* <li><a>Logout</a></li> */}
                            <li><NavLink onClick={handleSignOut} to='/login'>Sign Out</NavLink></li>
                        </ul>
                    </> :
                        <>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                                <div className=" rounded-full text-center">
                                    <img className="" alt="" src={userDefaultPic} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 ">
                            {/* <li><a>Logout</a></li> */}
                            <li><NavLink onClick={handleLogin} to='/login'>Log in</NavLink></li>
                            <li><NavLink onClick={handleRegister} to='/register'>Registration</NavLink></li>
                        </ul>
                        </>
                }


            </div>
        </div>
    );
};

export default Navbar;