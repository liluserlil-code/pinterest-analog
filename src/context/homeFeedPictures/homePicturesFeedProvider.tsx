import { createContext, Dispatch, PropsWithChildren, ReactElement, SetStateAction, useState } from "react";
import type {IPictureArray} from "../../domains/picture"

export interface IFeedContext {
    feedList: IPictureArray;
    setFeedList: Dispatch<SetStateAction<IPictureArray>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
};

export const feedContext = createContext<IFeedContext>({} as IFeedContext)

const HomeFeedPicturesProvider = ({children}:PropsWithChildren):ReactElement => {
    const [feedArray, setFeedArray] = useState<IPictureArray>([])
    const [page, setPage] = useState<number>(1)

    return(
        <feedContext.Provider value={{feedList: feedArray, setFeedList: setFeedArray, page: page, setPage: setPage}}>{children}</feedContext.Provider>
    )
}

export default HomeFeedPicturesProvider