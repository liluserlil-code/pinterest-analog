import { useContext } from "react"
import type { IPictureArray } from "../../domains/picture"
import { feedContext, favoritesContext } from "../../context/context"

export class contextService {
    static setFavoritePicture (id: number) {
        const feedArray:IPictureArray = useContext(feedContext)![0]
        const favoriteArray:IPictureArray = useContext(feedContext)![0]
        const setContext = useContext(favoritesContext)![1];
        setContext([...favoriteArray, feedArray[id]])
    }

    static removePicture (id: number) {
        const newFeedArray:IPictureArray = (useContext(feedContext)![0]).filter(item => item.id !== id)
        const newFavoriteArray:IPictureArray = (useContext(feedContext)![0]).filter(item => item.id !== id)
        const setNewFeedArrayContext = useContext(favoritesContext)![1];
        const setNewFavoriteArrayContext = useContext(favoritesContext)![1];
        setNewFeedArrayContext(newFeedArray);
        setNewFavoriteArrayContext(newFavoriteArray);
    }
}