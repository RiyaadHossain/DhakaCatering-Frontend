import React from "react";
import { getToken } from "./token";
import Loading from "../components/Loading";
import { useUserPersistencyQuery } from "../features/auth/authSlice";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const token = getToken();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    if (!token) navigate("/signin");
    const { isFetching, isError, data } = useUserPersistencyQuery(token);
    const email = data?.data?.email;

    if (isFetching) return <Loading />

    if (isError) navigate('/signin');

    if (!email) return <Navigate to="/signin" state={{ path: pathname }} />

    return children;
};

export default PrivateRoute;
