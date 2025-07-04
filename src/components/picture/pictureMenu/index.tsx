import { ReactElement, useContext } from "react";
import s from "../picture.module.css"
import { favoritesContext } from "../../../context/favorites/favoritesProvider";
import { feedContext } from "../../../context/homeFeedPictures/homePicturesFeedProvider"

type Props = {
    id: number;
    setIsFavorite: (value: boolean) => void;
    isFavorite: boolean;
}

const PictureMenu = ({id, setIsFavorite, isFavorite}: Props):ReactElement => {
    const {feedList, setFeedList} = useContext(feedContext);
    const {favoritesList, setFavoritesList} = useContext(favoritesContext);

    const onSaveClick = () => {
        if(!favoritesList.find((item: { id: number; }) => item.id === id)){
            const found = feedList.find(item => item.id === id);
            if (found) {
                setFavoritesList([...favoritesList, found]);
                setIsFavorite(true);
            }
        }
    }
    const onDeleteClick = () => {
        setFeedList(feedList.filter((item: { id: number; }) => item.id !== id));
        setFavoritesList(favoritesList.filter((item: { id: number; }) => item.id !== id));
    }

    return(
        <div className={s.buttonsMenu}>
            <button className={s.button} id="save" onClick={onSaveClick}>Сохранить</button>
            {isFavorite && <button className={s.button} onClick={onDeleteClick}>Удалить</button>}
        </div>
    )
}

export default PictureMenu