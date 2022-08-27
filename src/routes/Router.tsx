import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from "../components/pages/error/Error404";
import PrivateRoute from "./PrivateRoute";
import Main from "../components/pages/main";
import Login from "../components/pages/login";

interface RouterProps {
}

const Router = ({}: RouterProps) => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Login />} />

            <Route element={<PrivateRoute authentication={false}/>}>
                <Route path="/Login" element={<Login/>} />
            </Route>

            <Route element={<PrivateRoute authentication={true}/>}>
                <Route path="/Main" element={<Main/>} />
            </Route>

            <Route path='/*' element={<Error404/>}/>
        </Routes>
    </BrowserRouter>
)

export default Router;