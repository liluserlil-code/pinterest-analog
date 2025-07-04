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
    const isInFavorites: boolean = useContext(favoritesContext).favoritesList.some(item => item.id === id);

    return(
        <article className={s.picture}>
            <img src={url} alt="picture"/>
            <PictureMenu id={id} setIsFavorite={setIsFavorite}/>
            {( isFavorite || isInFavorites ) && <span className={s.isFavorite}>⭐</span>}
        </article>
    )
}

export default Picture