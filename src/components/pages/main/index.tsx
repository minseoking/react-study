import React, {useEffect, useState} from 'react';
import GeneralTemplate from "../../templates/GeneralTemplate";
import Axios from "../../../library/axios";
import {ResultModel} from "../../../models/ResultModel";
import {useRecoilValue} from "recoil";
import atom from "../../../recoil/user/atom";
import {ConditionModel} from "../../../models/ConditionModel";
import {MainModel} from "../../../models/MainModel";


const Main = () => {
    const [items, setItems] = useState<MainModel[]>([]);
    const user = useRecoilValue(atom.userState);

    const [condition, setCondition] = useState<ConditionModel>({})

    const fetchItem = async () => {
        try {
            const response = await Axios.getInstance()
                .get<ResultModel<MainModel[]>>('/api');
            if (response && response.data.Success && response.data.Result) {
                setItems(() => [...response.data.Result || []]);
            }
        } catch (err) {
            console.log("Error >>", err);
        }
    };

    useEffect(() => {
        if (condition.DataItems) {
            fetchItem();
        }
    }, [condition]);

    useEffect(() => {
        if (user.UserIdentity) {
            setCondition({
                DataItems: {
                    UserIdentity: user.UserIdentity,
                }
            });
        }
    }, [user]);

    return (
        <GeneralTemplate>

        </GeneralTemplate>
    )
}

export default Main;