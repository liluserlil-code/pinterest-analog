import { createContext } from "react";
import type {IFeedContext} from "../domains/context"
import type {IFavoritesContext} from "../domains/context"

export const feedContext = createContext<IFeedContext>([[],() =>{}])

export const favoritesContext = createContext<IFavoritesContext>([[], () => {}]);