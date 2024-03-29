import { Link, NavLink } from "react-router-dom";
import Nexcent from '../../../assets/Navbar/Nexcent.svg';
import Icon from '../../../assets/Navbar/Icon.svg';
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: navLinks = [], isLoading } = useQuery({
        queryKey: ["navLinks"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/NavLink`);
            return res.data;
        },
    });

    if (isLoading) {
        return <Loader />;
    }

    const sortedNavLinks = [...navLinks].sort((a, b) => a.Role - b.Role);

    const nav = sortedNavLinks.map((link) => (
        <li key={link.to}>
            <NavLink
                to={link.to}
                exact
                className={({ isActive }) =>
                    `text-lg font-medium ${isActive
                        ? "text-[#4CAF4F]"
                        : "text-black hover:text-[#4CAF4F]"
                    }`
                }
            >
                {link.label}
            </NavLink>
        </li>
    ));

    return (
        <div className="navbar bg-[#F5F7FA] py-[30px] fixed z-50 lg:px-[350px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                        {nav}
                    </ul>
                </div>
                <Link to={'/'}>
                    <a className="text-xl hidden md:flex gap-1 ">
                        <img src={Icon} alt="" />
                        <img src={Nexcent} alt="" />
                    </a>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-12 px-1">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                {user ? (
                    <>
                        <button onClick={logOut} className="text-[#4CAF4F] hover:bg-green-100 p-2 rounded-xl px-5">Logout</button>
                        <button className="w-28 bg-[#4CAF4F] text-sm text-white p-2 rounded-md">Admin Panel</button>
                    </>
                ) : (
                    <>
                        <Link to={'/login'}><button className="text-[#4CAF4F] hover:bg-green-100 p-2 rounded-xl px-5">Login</button></Link>
                        <Link to={'/Register'}><button className="w-28 bg-[#4CAF4F] text-sm text-white p-2 rounded-md">Register</button></Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
