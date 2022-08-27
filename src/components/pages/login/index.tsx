import React, {useCallback, useEffect, useState} from 'react';
import LoginArea from "./LoginArea";
import {useRecoilState} from "recoil";
import atom from "../../../recoil/user/atom";
import {useNavigate} from "react-router";
import LocalStorage from "../../../library/localStorage";
import Axios from "../../../library/axios";
import {ResultModel} from "../../../models/ResultModel";


const Login = () => {
    const [user, setUser] = useRecoilState(atom.userState);
    const navigate = useNavigate();

    useEffect(() => {
        setUser(user => ({
            ...user,
        }));
    }, []);

    const onChange = useCallback((e: { target: { id: any, value: any } }) => {
        const {id, value} = e.target;
        setUser(user => ({
            ...user,
            [id]: value
        }));
    }, [user]);

    const onClickLogin = async () => {
        try {
            const url = '/api/login';
            const result = await Axios.getInstance().post<ResultModel<object>>(url,
                {
                    ...user
                });
            if (result && result.data.Success) {
                LocalStorage.set('ACCESS_USER', user);

                navigate('/Main');
            }
        } catch (err) {
            console.log("Error >>", err);
        }

    }

    return (
        <>
            <LoginArea
                user={user}
                onClickLogin={onClickLogin}
                onChange={onChange}
            />
        </>
    )
}

export default Login;