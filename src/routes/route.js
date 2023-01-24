import { createBrowserRouter } from "react-router-dom";
import WishList from "../pages/WishList/WishList";
import Main from "../layouts/Main";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Contact from "../pages/Contact/Contact";
import FoodItem from "../pages/FoodItem/FoodItem";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import NotFound from "../pages/NotFound/NotFound";
import Order from "../pages/Order/Order";
import PackageDetails from "../pages/PackageDetails.jsx/PackageDetails";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "../utils/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
            },
            {
                path: "/food-item/:id",
                element: <PrivateRoute><FoodItem /></PrivateRoute>,
            },
            {
                path: "/package/:id",
                element: <PrivateRoute><PackageDetails /></PrivateRoute>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/cart",
                element: <PrivateRoute><Cart /></PrivateRoute>,
            },
            {
                path: "/wishlist",
                element: <PrivateRoute><WishList /></PrivateRoute>,
            },
            {
                path: "/order/:id",
                element: <PrivateRoute><Order /></PrivateRoute>,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/signin",
                element: <SignIn />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export default routes;