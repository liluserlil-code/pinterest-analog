import { ReactElement } from "react";
import s from "./header.module.css"
import Button from "../button";

const Header = ():ReactElement => {
    return(
        <div className={s.header}>
            <Button text={"Your profile"} path={"/favorites"}/>
            <header className={s.name}>Pinterest</header>
        </div>
    )
}

export default Header;