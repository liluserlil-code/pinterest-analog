import { ReactElement, useContext } from "react";
import s from "../picture.module.css"
import { favoritesContext } from "../../../context/favorites/favoritesProvider";
import { feedContext } from "../../../context/homeFeedPictures/homePicturesFeedProvider"

type Props = {
    id: number;
    setIsFavorite: (value: boolean) => void;
}

const PictureMenu = ({id, setIsFavorite}: Props):ReactElement => {
    // const feedPicturesArray = useContext(feedContext)![0];
    // const favoritePicturesArray = useContext(favoritesContext)![0]

    // const setFavoritePicturesArray = useContext(favoritesContext)![1]
    // const setFeedPicturesArray = useContext(feedContext)![1]

    const {feedList, setFeedList} = useContext(feedContext);
    const {favoritesList, setFavoritesList} = useContext(favoritesContext)

    const onSaveClick = () => {
        if(!favoritesList.find((item: { id: number; }) => item.id === id))(
            setFavoritesList([...favoritesList, feedList[id]])
        )
        setIsFavorite(true);
    }
    const onDeleteClick = () => {
        setFavoritesList(favoritesList.filter((item: { id: number; }) => item.id !== id))
        setFeedList(feedList.filter((item: { id: number; }) => item.id !== id))
    }

    return(
        <div className={s.buttonsMenu}>
            <button className={s.button} id="save" onClick={onSaveClick}>Сохранить</button>
            <button className={s.button} onClick={onDeleteClick}>Удалить</button>
        </div>
    )
}

export default PictureMenu