import { ReactElement } from "react";
import s from "../header.module.css"
import Button from "../../button";

const UserHeader = ():ReactElement => {
    return(
        <div className={s.header}>
            <nav className={s.nav}>
                <Button text={"Created"} path={"/user/created"}/>
                <Button text={"Saved"} path={"/user/saved"}/>
                <Button text={"Home"} path={"/"}/>
            </nav>
            <header className={s.name}>{"Profile"}</header>
        </div>
    )
}

export default UserHeader;