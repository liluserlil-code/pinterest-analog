import { ReactElement } from "react";
import s from "./board.module.css"
import { useNavigate } from "react-router-dom";

type Props = {
    id: number;
    name: string;
    boardPictures: number[];
}

const Board = ({name}: Props):ReactElement => {
    const navigate = useNavigate();

    const onHandleClick = () => {
        navigate(`/user/saved/boards/${name}`);
    }

    return(
        <button onClick={onHandleClick} className={s.board} >
            <p>{name}</p>
        </button>
    )
}

export default Board