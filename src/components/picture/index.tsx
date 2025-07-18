import { ReactElement, useContext, useState } from "react";
import s from "./picture.module.css"
import PictureMenu from "./pictureMenu";
import { userContext } from "../../context/user/userProvider";

type Props = {
    id: number;
    url: string
}

const Picture = ({id, url}:Props):ReactElement => {
    const isInFavorites: boolean = useContext(userContext).allPins.some(item => item === id);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    return(
        <article className={s.picture}>
            <img src={url} alt="picture"/>
            <PictureMenu id={id} setIsFavorite={setIsFavorite} isFavorite={isFavorite}/>
            {( isFavorite || isInFavorites ) && <span className={s.isFavorite}>⭐</span>}
        </article>
    )
}

export default Picture