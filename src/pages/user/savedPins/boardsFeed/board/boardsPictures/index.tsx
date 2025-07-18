import { ReactElement, useContext } from "react";
import { useParams } from "react-router-dom";
import PicturesFeed from "../../../../../../components/picturesFeed";
import { userContext } from "../../../../../../context/user/userProvider";
import { IPictureArray } from "../../../../../../domains/picture";
import { feedContext } from "../../../../../../context/homeFeedPictures/homePicturesFeedProvider";


const BoardsPictures = ():ReactElement => {
    const {name} = useParams();
    const {feedList} = useContext(feedContext);
    const board = useContext(userContext).boards.find(item => item.name === name)?.boardPictures;
    
    const picturesArray: IPictureArray = feedList.filter(item => board?.includes(item.id));

    if(board?.length === 0){
        return(<p>No pictures in this board</p>)
    }
    
    return(
        <>
        
        <PicturesFeed picturesArray={picturesArray} title={name}/>
        </>
    )
}

export default BoardsPictures;