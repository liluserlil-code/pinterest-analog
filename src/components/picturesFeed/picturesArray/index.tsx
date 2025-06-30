import { ReactElement } from "react";
import Picture from "../../picture";
import { useContext } from "react";
import { feedContext } from "../../../context/context";
import {type IPictureArray, IPicture } from "../../../domains/picture"
import s from "./../picturesFeed.module.css"


const PicturesArray = ():ReactElement => {
    const picturesArray:IPictureArray = useContext(feedContext)![0]
    return(
        <div className={s.picturesfeed}>
            {picturesArray.map((picture: IPicture) => (
                <Picture key={picture.id} id={picture.id} url={picture.url}/>
            ))}
        </div>
    )
}

export default PicturesArray