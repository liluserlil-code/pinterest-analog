import { ReactElement, useContext } from "react";
import PicturesFeed from "../../../../components/picturesFeed";
import { userContext } from "../../../../context/user/userProvider";
import { feedContext } from "../../../../context/homeFeedPictures/homePicturesFeedProvider";
import { IPictureArray } from "../../../../domains/picture";

const AllPins = ():ReactElement => {
    const {allPins} = useContext(userContext);
    const {feedList} = useContext(feedContext);
    const picturesArray: IPictureArray = feedList.filter(item => allPins.includes(item.id))
    return(
        <PicturesFeed picturesArray={picturesArray} title={"All pins"}/>
    )
}

export default AllPins;