import { ReactElement } from "react";
import s from "./loading.module.css"


const Loading = ():ReactElement => {
    return(
        <div className={s.loading}>...Loading...</div>
    )
}

export default Loading