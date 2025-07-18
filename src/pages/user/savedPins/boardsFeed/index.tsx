import { ReactElement, useContext } from "react"
import Board from "./board"
import s from "./boarsFeed.module.css"
import { userContext } from "../../../../context/user/userProvider"


const BoardsFeed = ():ReactElement => {
    const {boards} = useContext(userContext)
    return(
    <div className={s.feed}>
        <p className={s.title}>Boards</p>
        <div className={s.boardFeed}>
            {boards.map((boards) => (
                <Board key={boards.id} id={boards.id} name={boards.name} boardPictures={boards.boardPictures}/>
            ))}
        </div>
    </div>)
}

export default BoardsFeed;