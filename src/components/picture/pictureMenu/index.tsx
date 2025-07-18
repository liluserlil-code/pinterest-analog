import { ReactElement, useContext, useState } from "react";
import s from "../picture.module.css"
import { userContext } from "../../../context/user/userProvider";
import { feedContext } from "../../../context/homeFeedPictures/homePicturesFeedProvider"
import ModalWindow from "../../modalWindow";

type Props = {
    id: number;
    setIsFavorite: (value: boolean) => void;
    isFavorite: boolean;
}

const PictureMenu = ({id, setIsFavorite, isFavorite}: Props):ReactElement => {
    const {feedList, setFeedList} = useContext(feedContext);
    const {allPins, setAllPins} = useContext(userContext);
    const {unsortedPins, setUnsortedPins} = useContext(userContext);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onSaveClick = () => {
        setIsOpen(true);
    }
    const onDeleteClick = () => {
        setFeedList(feedList.filter((item: { id: number; }) => item.id !== id));
        setAllPins(allPins.filter(item => item !== id));
        setUnsortedPins(unsortedPins.filter(item => item !== id));
    }

    return(
        <div className={s.buttonsMenu}>
            { !useContext(userContext).allPins.some(item => item === id) && <button className={s.button} id="save" onClick={onSaveClick}>Сохранить</button>}
            {( isFavorite || useContext(userContext).allPins.some(item => item === id) ) && <button className={s.button} onClick={onDeleteClick}>Удалить</button>}
            {isOpen && (
            <ModalWindow
                id={id}
                setIsFavorite={setIsFavorite}
                setIsOpen={setIsOpen}
            />
        )}
        </div>
    )
}

export default PictureMenu