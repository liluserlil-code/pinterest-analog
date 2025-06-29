import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import s from "./button.module.css"

type Props = {
    text: string;
    path: string;
}

const Button = ({text, path}: Props):ReactElement => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(path);
    }

    return(
        <button onClick={onClickHandler} className={s.button}>{text}</button>
    )
}

export default Button;