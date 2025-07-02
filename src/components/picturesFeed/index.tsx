import { ReactElement } from "react";
import Picture from "../picture";
import {type IPictureArray } from "../../domains/picture"
import s from "./picturesFeed.module.css"

type Props = {
    picturesArray: IPictureArray
}

const PicturesFeed = ({picturesArray}: Props):ReactElement => {
    return(
        <div className={s.content}>
            <div className={s.picturesfeed}>
                {picturesArray.map((picture) => (
                    <Picture key={picture.id} id={picture.id} url={picture.download_url} />
                ))}
            </div>
        </div>
    )
}

export default PicturesFeed