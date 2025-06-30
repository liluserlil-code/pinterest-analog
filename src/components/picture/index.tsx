import { ReactElement, useState } from "react";
import s from "./picture.module.css"
import PictureMenu from "./pictureMenu";

type Props = {
    id: number;
    url: string
}

const Picture = ({id, url}:Props):ReactElement => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    return(
        <div className={s.picture}>
            <img loading="lazy" src={url} alt="picture"/>
            <PictureMenu id={id} setIsFavorite={setIsFavorite}/>
            {isFavorite && <span className={s.isFavorite}>⭐</span>}
        </div>
    )
}

export default Picture