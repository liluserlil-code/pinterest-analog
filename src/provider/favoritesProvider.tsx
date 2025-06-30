import { type PropsWithChildren, ReactElement } from "react";
import { useState } from "react";
import type {IPictureArray} from "../domains/picture"
import { favoritesContext } from "../context/context";
// import type {FavoritesContext} from "../domains/picture"

// export const favoritesContext = createContext<FavoritesContext>([[], () => {}]);

const FavoritesProvider = ({children}:PropsWithChildren):ReactElement => {
    const [favoritesArray, setFavoritesArray] = useState<IPictureArray>([]);
    return(
        <favoritesContext.Provider value={[favoritesArray, setFavoritesArray]}>{children}</favoritesContext.Provider>
    )
}

export default FavoritesProvider