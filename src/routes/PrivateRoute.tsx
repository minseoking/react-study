import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import LocalStorage from "../library/localStorage";
import {UserModel} from "../models/UserModel";

interface PrivateRouteProps {
    children ?: ReactElement;
    authentication : boolean;
}

const PrivateRoute = ({authentication}:PrivateRouteProps):React.ReactElement|null => {
    const accessUser = LocalStorage.get<UserModel>("ACCESS_USER");

    if(authentication) {
        return (accessUser === null || accessUser.UserIdentity === null) ? <Navigate to="/login"/> : <Outlet/>;

    } else {
        return (accessUser === null || accessUser.UserIdentity === null) ? <Outlet/> : <Navigate to='/'/>;
    }
}

export default PrivateRoute;