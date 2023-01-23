import React, { useEffect } from "react";
import { getToken } from "./token";
import Loading from "../components/Loading";
import { useUserPersistencyQuery } from "../features/auth/authAPI";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const token = getToken();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { isFetching, isError, data } = useUserPersistencyQuery(token);

    useEffect(() => {
        if (!token) navigate("/signin");
        if (isError) navigate('/signin');
    }, [token, isError, navigate])

    const email = data?.data?.email;

    if (isFetching) return <Loading />


    if (!email) return <Navigate to="/signin" state={{ path: pathname }} />

    return children;
};

export default PrivateRoute;
