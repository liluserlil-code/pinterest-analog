import { ReactElement, useContext } from "react";
import PicturesFeed from "../../../components/picturesFeed";
import { userContext } from "../../../context/user/userProvider";
import s from "./createdPins.module.css"

const CreatedPins = ():ReactElement => {
    const {createdPins} = useContext(userContext)
    return(
        <div className={s.content}>
            <PicturesFeed picturesArray={createdPins} title={"Created pins"}/>
        </div>
    )
}

export default CreatedPins;