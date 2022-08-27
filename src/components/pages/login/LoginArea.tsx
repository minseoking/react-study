import LoginButtonList from "./LoginButtons";
import {TextField} from "@material-ui/core";
import {UserModel} from "../../../models/UserModel";

interface LoginAreaProps {
    user: UserModel
    onClickLogin: React.MouseEventHandler<HTMLButtonElement>,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
}

const LoginArea = ({user, onClickLogin, onChange}: LoginAreaProps) => {
    return (
        <div className="login-area">
            <h2 className="login-title">LOGIN</h2>
            <TextField id="UserIdentity" label="ID" variant="outlined" onChange={onChange}
                       value={user.UserIdentity}/>
            <TextField type='password' id="UserPassword" label="Password" variant="outlined" onChange={onChange}
                       value={user.UserPassword}/>
            <LoginButtonList
                onClickLogin={onClickLogin}
            />
        </div>
    );
}

export default LoginArea;
