import {  NavLink } from "react-router-dom";
import userDefaultPic from '../assets/user.png'

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        <div className="navbar justify-between bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52">
                        {navLinks}
                    </ul>
                </div>
                <NavLink to='/' className="md:text-4xl font-bold ml-7 w-96">LUXURY HOME</NavLink>
            </div>
            <div className="navbar hidden lg:flex">
                <ul className="menu-horizontal px-1 gap-x-10">
                    {navLinks}
                </ul>
            </div>
            <div className="dropdown dropdown-end lg:mr-10">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-24 mask mask-squircle">
                        <img alt="Tailwind CSS Navbar component" src={userDefaultPic} />
                    </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                        </a>
                    </li>
                    <li><a> Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;