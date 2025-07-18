import { ReactElement } from "react"
import UserHeader from "../../components/headers/userHeader/userHeader"
import { Outlet } from "react-router-dom"
import s from "./user.module.css"

const User = ():ReactElement => {
    return(
        <div className={s.user}>
            <UserHeader/>
            <Outlet/>
        </div>
    )
}

export default User;