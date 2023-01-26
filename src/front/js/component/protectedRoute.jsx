import React from "react";
import { Navigate, Outlet } from 'react-router-dom'
import { Home } from './../pages/home.jsx'
import { Principal } from './principal.jsx'

const useAuth = (user) => {
    // requiere de que el usuario tenga un token para entrar
    return user && user.token
}

export const ProtectedRoutes = ({ children, user, redirectTo }) => {
    const isAuth = useAuth(user);
    console.log(isAuth);
    if (isAuth) {
        return <Outlet />;
    }
    return <Navigate to={redirectTo} />
}