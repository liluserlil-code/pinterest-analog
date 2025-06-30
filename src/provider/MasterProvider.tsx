import { type PropsWithChildren, ReactElement } from "react";
import PicturesFeedProvider from "./picturesFeedProvider";
import FavoritesProvider from "./favoritesProvider";


const MasterProvider = ({children}:PropsWithChildren):ReactElement => {
    return(
        <PicturesFeedProvider>
            <FavoritesProvider>{children}</FavoritesProvider>
        </PicturesFeedProvider>
    )
}

export default MasterProvider;