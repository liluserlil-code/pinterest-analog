import { ReactElement, useContext } from "react";
import s from "../picture.module.css"
import { favoritesContext, feedContext } from "../../../context/context";

const PictureMenu = ({id}: {id: number}):ReactElement => {
    const feedPicturesArray = useContext(feedContext)![0];
    const favoritePicturesArray = useContext(favoritesContext)![0]

    const setFavoritePicturesArray = useContext(favoritesContext)![1]
    const setFeedPicturesArray = useContext(feedContext)![1]

    const onSaveClick = () => {
        if(!favoritePicturesArray.find(item => item.id === id))(
            setFavoritePicturesArray([...favoritePicturesArray, feedPicturesArray[id]])
        )
    }
    const onDeleteClick = () => {
        setFavoritePicturesArray(favoritePicturesArray.filter(item => item.id !== id))
        setFeedPicturesArray(feedPicturesArray.filter(item => item.id !== id))
    }

    return(
        <div className={s.buttonsMenu}>
            <button className={s.button} onClick={onSaveClick}>Сохранить</button>
            <button className={s.button} onClick={onDeleteClick}>Удалить</button>
        </div>
    )
}

export default PictureMenu