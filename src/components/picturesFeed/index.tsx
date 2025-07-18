import { ReactElement } from "react";
import Picture from "../picture";
import {type IPictureArray } from "../../domains/picture"
import s from "./picturesFeed.module.css"

type Props = {
    picturesArray: IPictureArray
    title?: string;
}

const PicturesFeed = ({picturesArray, title}: Props):ReactElement => {
    return(
        <div className={s.feed}>
            <p className={s.title}>{title}</p>
            <div className={s.picturesfeed}>
                {picturesArray.map((picture) => (
                    <Picture key={picture.id} id={picture.id} url={picture.download_url} />
                ))}
            </div>
        </div>
    )
}

export default PicturesFeed