import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
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