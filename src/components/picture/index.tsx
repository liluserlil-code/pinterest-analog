import { ReactElement } from "react";
import s from "./picture.module.css"
import PictureMenu from "./pictureMenu";

type Props = {
    id: number;
    url: string
}

const Picture = ({id, url}:Props):ReactElement => {
    return(
        <div className={s.picture}>
            <img src={url} alt="picture"/>
            <PictureMenu />
        </div>
    )
}

export default Picture