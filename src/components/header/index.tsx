import { ReactElement } from "react";
import s from "./header.module.css"
import Button from "../button";

type Props = {
    buttonPath: string;
    buttonText: string;
    headerText: string
}
const Header = ({buttonPath, buttonText, headerText}:Props):ReactElement => {
    return(
        <div className={s.header}>
            <Button text={buttonText} path={buttonPath}/>
            <header className={s.name}>{headerText}</header>
        </div>
    )
}

export default Header;