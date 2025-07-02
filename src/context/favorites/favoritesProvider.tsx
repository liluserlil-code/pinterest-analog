import { createContext, Dispatch, PropsWithChildren, ReactElement, SetStateAction } from "react";
import { IPictureArray } from "../../domains/picture";
import { useState } from "react";

export interface IFavoritesContext {
    favoritesList: IPictureArray;
    setFavoritesList: Dispatch<SetStateAction<IPictureArray>>;
};

export const favoritesContext = createContext<IFavoritesContext>({} as IFavoritesContext);

const FavoritesProvider = ({children}:PropsWithChildren):ReactElement => {
    const [favoritesArray, setFavoritesArray] = useState<IPictureArray>([]);
    return(
        <favoritesContext.Provider value={{favoritesList: favoritesArray, setFavoritesList: setFavoritesArray}}>{children}</favoritesContext.Provider>
    )
}

export default FavoritesProvider