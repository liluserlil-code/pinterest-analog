import { type PropsWithChildren, ReactElement } from "react";
import HomeFeedPicturesProvider from "../context/homeFeedPictures/homePicturesFeedProvider";
import FavoritesProvider from "../context/favorites/favoritesProvider";


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