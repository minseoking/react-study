import LoginButtonList from "./LoginButtons";
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import {UserModel} from "../../../models/UserModel";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {useState} from "react";

interface LoginAreaProps {
    user: UserModel
    onClickLogin: React.MouseEventHandler<HTMLButtonElement>,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
}


const LoginArea = ({user, onClickLogin, onChange}: LoginAreaProps) => {
    const [values, setValues] = useState({
        showPassword: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
        const {id, value} = event.target;
        setValues({...values, [id]: value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className="login-area">
            <h2 className="login-title">LOGIN</h2>
            <Box display='flex' flexDirection='column' width='25ch'>
                <TextField id="UserIdentity" label="ID" variant='outlined' onChange={onChange}
                           value={user.UserIdentity} autoComplete='off'/>

                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="UserPassword"
                        type={values.showPassword ? 'text' : 'password'}
                        value={user.UserPassword}
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <LoginButtonList
                    onClickLogin={onClickLogin}
                />
            </Box>

        </div>
    );
}

export default LoginArea;
