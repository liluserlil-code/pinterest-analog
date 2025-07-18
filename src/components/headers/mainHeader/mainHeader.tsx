import { ReactElement } from "react";
import s from "../header.module.css"
import Button from "../../button";

const MainHeader = ():ReactElement => {
    return(
        <div className={s.header}>
            <nav className={s.nav}>
                <Button text={"Profile"} path={"/user"}/>
            </nav>
            <header className={s.name}>{"Pinterest"}</header>
        </div>
    )
}

export default MainHeader;