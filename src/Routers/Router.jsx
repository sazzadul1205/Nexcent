import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../Layout/PublicLayout";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout></PublicLayout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Register',
                element: <Register></Register>
            }
        ]
    }
])