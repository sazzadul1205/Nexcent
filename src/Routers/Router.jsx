import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../Layout/PublicLayout";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import Feature from "../Pages/Feature/Feature";
import Product from "../Pages/Product/Product";
import Testimonial from "../Pages/Testimonial/Testimonial";
import FAQ from "../Pages/FAQ/FAQ";

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
                path: '/service',
                element: <Services></Services>
            },
            {
                path: '/feature',
                element: <Feature></Feature>
            },
            {
                path: '/product',
                element: <Product></Product>
            },
            {
                path: '/testimonial',
                element: <Testimonial></Testimonial>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
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