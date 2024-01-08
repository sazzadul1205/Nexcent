import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const PublicLayout = () => {
    return (
        <div className="bg-white">
            <Navbar ></Navbar>
            <div className="pt-[84px]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PublicLayout;