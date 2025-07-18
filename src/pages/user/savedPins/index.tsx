import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import s from "./savedPins.module.css"
import Button from "../../../components/button";

const SavedPins = ():ReactElement => {
    return(
        <div className={s.content}>
            <nav className={s.nav}>
                <Button text={"All pins"} path={"pins"}/>
                <Button text={"Boards"} path={"boards"}/>
                <Button text={"Unsorted pins"} path={"unsorted"}/>
            </nav>
            <Outlet/>
        </div>
    )
}

export default SavedPins;