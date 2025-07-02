import { createContext, Dispatch, PropsWithChildren, ReactElement, SetStateAction } from "react";
import { IPictureArray } from "../../domains/picture";
import { useState } from "react";

export interface IFavoritesContext {
    favoritesList: IPictureArray;
    setFavoritesList: Dispatch<SetStateAction<IPictureArray>>;
    setFavoritesIds: Dispatch<SetStateAction<number[]>>;
    favoritesIds: number[];
};

export const favoritesContext = createContext<IFavoritesContext>({} as IFavoritesContext);

const FavoritesProvider = ({children}:PropsWithChildren):ReactElement => {
    const [favoritesArray, setFavoritesArray] = useState<IPictureArray>([]);
    const [favoritesIds, setFavoritesIds] = useState<number[]>([]);
    return(
        <favoritesContext.Provider value={{favoritesList: favoritesArray, setFavoritesList: setFavoritesArray, favoritesIds: favoritesIds, setFavoritesIds: setFavoritesIds}}>{children}</favoritesContext.Provider>
    )
}

export default FavoritesProvider