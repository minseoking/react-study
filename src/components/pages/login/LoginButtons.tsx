import {Button} from "@material-ui/core";

interface LoginButtonsProps {
    onClickLogin : React.MouseEventHandler<HTMLButtonElement>,
}

const LoginButtons = ({onClickLogin}: LoginButtonsProps) => {
    return (
        <>
            <div className="input-group">
                <Button onClick={onClickLogin} variant="contained" size="large">
                    로그인
                </Button>

            </div>
        </>
    )
}

export default LoginButtons;
