import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
    return (
        <div>
            <div className="">
            <Navbar></Navbar>
            </div>
            <Outlet />
        </div>
    );
};

export default Root;