import { ReactElement } from "react";
import s from "../picture.module.css"


const PictureMenu = ():ReactElement => {
    return(
        <div className={s.buttonsMenu}>
            <button className={s.button}>Сохранить</button>
            <button className={s.button}>Удалить</button>
        </div>
    )
}

export default PictureMenu