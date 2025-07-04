import { ReactElement, useContext } from "react";
import s from "../picture.module.css"
import { favoritesContext } from "../../../context/favorites/favoritesProvider";
import { feedContext } from "../../../context/homeFeedPictures/homePicturesFeedProvider"

type Props = {
    id: number;
    setIsFavorite: (value: boolean) => void;
}

const PictureMenu = ({id, setIsFavorite}: Props):ReactElement => {
    const {feedList, setFeedList} = useContext(feedContext);
    const {favoritesList, setFavoritesList} = useContext(favoritesContext);

    const onSaveClick = () => {
        if(!favoritesList.find((item: { id: number; }) => item.id === id)){
            const found = feedList.find(item => item.id === id);
            console.log(found);
            if (found) {
                setFavoritesList([...favoritesList, found]);
                setIsFavorite(true);
            }
            // favoritesList.forEach(element => {
            //     console.log("fav " + element.id)
            // });
        }
    }
    const onDeleteClick = () => {
        setFeedList(feedList.filter((item: { id: number; }) => item.id !== id));
        setFavoritesList(favoritesList.filter((item: { id: number; }) => item.id !== id));
        // favoritesList.forEach(element => {
        //     console.log("fav " + element.id)
        // });
    }

    return(
        <div className={s.buttonsMenu}>
            <button className={s.button} id="save" onClick={onSaveClick}>Сохранить</button>
            <button className={s.button} onClick={onDeleteClick}>Удалить</button>
        </div>
    )
}

export default PictureMenu