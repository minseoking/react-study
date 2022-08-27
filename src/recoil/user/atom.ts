import { atom } from 'recoil';
import {UserModel} from "../../models/UserModel";

const userState = atom<UserModel>({
    key: 'userState',
    default: {
        UserIdentity: '',
        UserPassword: '',
    }
});

export default {
    userState,
};