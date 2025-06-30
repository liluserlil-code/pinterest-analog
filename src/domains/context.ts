import { Dispatch, SetStateAction } from "react";
import type {IPictureArray} from "./picture"

export type IFavoritesContext = [IPictureArray, Dispatch<SetStateAction<IPictureArray>>]

export type IFeedContext = [IPictureArray, Dispatch<SetStateAction<IPictureArray>>]