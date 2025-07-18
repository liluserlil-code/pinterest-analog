import { ReactElement, useContext } from "react";
import PicturesFeed from "../../../../components/picturesFeed";
import { userContext } from "../../../../context/user/userProvider";
import { feedContext } from "../../../../context/homeFeedPictures/homePicturesFeedProvider";
import { IPictureArray } from "../../../../domains/picture";

const UnsortedPins = ():ReactElement => {
    const {unsortedPins} = useContext(userContext);
    const {feedList} = useContext(feedContext);
    const picturesArray: IPictureArray = feedList.filter(item => unsortedPins.includes(item.id))
    return(
        <PicturesFeed picturesArray={picturesArray} title={"Unsorted pins"}/>
    )
}

export default UnsortedPins;