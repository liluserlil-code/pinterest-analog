import { type PropsWithChildren, ReactElement } from "react";
import HomeFeedPicturesProvider from "../context/homeFeedPictures/homePicturesFeedProvider";
import FavoritesProvider from "../context/user/userProvider";


const MasterProvider = ({children}:PropsWithChildren):ReactElement => {
    return(
        <HomeFeedPicturesProvider>
            <FavoritesProvider>
                {children}
            </FavoritesProvider>
        </HomeFeedPicturesProvider>
    )
}

export default MasterProvider;