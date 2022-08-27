import React, {PropsWithChildren, useCallback, useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {useRecoilState} from "recoil";
import atom from "../../recoil/user/atom";
import LocalStorage from "../../library/localStorage";
import {UserModel} from "../../models/UserModel";
import {useNavigate} from "react-router";
import {BottomNavigation, BottomNavigationAction, Button} from "@material-ui/core";

interface GeneralTemplateProps {
}

const GeneralTemplate = ({children}: PropsWithChildren<GeneralTemplateProps>) => {
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(atom.userState);

    useEffect(() => {
        if (!user || !user.UserIdentity) {
            const storedUser = LocalStorage.get<UserModel>('ACCESS_USER');
            if (storedUser) {
                setUser(storedUser);
            }
        }
    }, []);


    const onClickLogout = useCallback(() => {
        LocalStorage.remove('ACCESS_USER');

        navigate('/Login');
    }, []);

    const [value, setValue] = React.useState(0);
    const [menus, setMenus] = useState([
        {
            id: 1,
            name: '메뉴1',
        },
        {
            id: 2,
            name: '메뉴2',
        },
        {
            id: 3,
            name: '메뉴3',
        },
        {
            id: 4,
            name: '메뉴4',
        }
    ]);

    return (
        <div id='wrapper'>
            <a>이름 ({user.UserIdentity})</a>
            <Button variant="contained" onClick={onClickLogout}>
                로그아웃
            </Button>
            {children}

            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                {menus.map(menu => (
                    <BottomNavigationAction label={menu.name} key={menu.id}></BottomNavigationAction>
                ))}
            </BottomNavigation>
        </div>
    )
}

const Header = styled.div`
    display: flex;
    position: relative;
    left: 0;
    top: 0;
    right: 0;
    font-size: 14px;
    background-color: #fff;
    border-top: #CECECE 1px solid;
    border-bottom: #CECECE 1px solid;
`;


export default GeneralTemplate;