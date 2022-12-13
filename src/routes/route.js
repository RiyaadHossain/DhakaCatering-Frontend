import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import FoodItem from "../pages/FoodItem/FoodItem";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";

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
                element: <FoodItem />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
    /*     {
            path: "/dashboard",
            element: <Dashboard />,
            children: [
                {
                    path: "/dashboard",
                    element: <ProductList />,
                },
                {
                    path: "add-product",
                    element: <AddProduct />,
                },
                {
                    path: "update-product/:id",
                    element: <UpdateProduct />,
                },
            ],
        }, */
]);

export default routes;