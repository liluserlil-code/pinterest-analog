import { ReactElement, useContext, useState } from "react";
import s from "./modalWindow.module.css"
import { IBoard, userContext } from "../../context/user/userProvider";
import { feedContext } from "../../context/homeFeedPictures/homePicturesFeedProvider";

type Props = {
    id: number;
    setIsFavorite: (value: boolean) => void;
    setIsOpen: (value: boolean) => void;
}

const ModalWindow = ({id, setIsFavorite, setIsOpen}: Props):ReactElement => {
    const {feedList} = useContext(feedContext);
    const {allPins, setAllPins} = useContext(userContext);
    const {unsortedPins, setUnsortedPins} = useContext(userContext);
    const {boards, setBoards} = useContext(userContext);
    const [newBoardName, setNewBoardName] = useState<string>("");
    
    const onSaveClick = () =>{
        if(!allPins.find(item => item === id)){
            const found = feedList.find(item => item.id === id);
            if (found) {
                setAllPins([...allPins, found.id]);
                if (newBoardName !== "" && !boards.find(item => item.name === newBoardName)){
                    const newBoard: IBoard = {id: boards.length, name: newBoardName, boardPictures: [id]}
                    setBoards([...boards, newBoard]);
                }else{
                    setUnsortedPins([...unsortedPins, found.id]);
                }
                setIsFavorite(true);
            }
        }
        setIsOpen(false);
    }

    const onCloseClick = () => {
        setIsOpen(false);
    }
    return(
        <div className={s.modalBack}>
            <div className={s.modalContent}>
                <h1 className={s.title}>Saving...</h1>
                <input
                    type="text" 
                    placeholder="new board name..." 
                    className={s.input}
                    onChange={e => setNewBoardName(e.target.value)}
                />
                <button onClick={onSaveClick} className={s.button}>Save</button>
                <button onClick={onCloseClick} className={s.button}>Close</button>
            </div>
        </div>
    )
}

export default ModalWindow;
