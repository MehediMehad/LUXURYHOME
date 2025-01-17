import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>
            <div className="h-[80px]">
            <Navbar></Navbar>
            </div>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Root;