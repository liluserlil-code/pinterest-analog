import { ReactElement, useContext, useState } from "react";
import s from "./picture.module.css"
import PictureMenu from "./pictureMenu";
import { favoritesContext } from "../../context/favorites/favoritesProvider";

type Props = {
    id: number;
    url: string
}

const Picture = ({id, url}:Props):ReactElement => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const favoritesIds:boolean = useContext(favoritesContext).favoritesIds.includes(id)
    return(
        <div className={s.picture}>
            <img loading="lazy" src={url} alt="picture"/>
            <PictureMenu id={id} setIsFavorite={setIsFavorite}/>
            {(favoritesIds || isFavorite) && <span className={s.isFavorite}>⭐</span>}
        </div>
    )
}

export default Picture