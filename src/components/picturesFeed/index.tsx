import { ReactElement } from "react";
import Picture from "../picture";
import {type IPictureArray } from "../../domains/picture"
import s from "./picturesFeed.module.css"
import { FixedSizeGrid as Grid } from 'react-window';

type Props = {
    picturesArray: IPictureArray
}

const PicturesFeed = ({picturesArray}: Props):ReactElement => {

    return(

        <Grid
            columnCount={3}
            columnWidth={220}
            height={700}
            rowCount={Math.ceil(picturesArray.length / 3)}
            rowHeight={220}
            width={660}
            className={s.grid}
        >
            {({ columnIndex, rowIndex, style}) => {
                const index = rowIndex * 3 + columnIndex;
                if (index >= picturesArray.length) return null;

                const picture = picturesArray[index];
                return (
                <div style={style} className={s.picturesfeed}>
                    <Picture key={picture.id} id={picture.id} url={picture.download_url} />
                </div>
                );
            }}
        </Grid>
    )
}

export default PicturesFeed