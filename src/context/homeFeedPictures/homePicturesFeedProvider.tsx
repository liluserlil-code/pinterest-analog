import { createContext, Dispatch, PropsWithChildren, ReactElement, SetStateAction, useState } from "react";
import type {IPictureArray} from "../../domains/picture"

export interface IFeedContext {
    feedList: IPictureArray;
    setFeedList: Dispatch<SetStateAction<IPictureArray>>;
};

export const feedContext = createContext<IFeedContext>({} as IFeedContext)

const HomeFeedPicturesProvider = ({children}:PropsWithChildren):ReactElement => {
    const [feedArray, setFeedArray] = useState<IPictureArray>([])

    return(
        <feedContext.Provider value={{feedList: feedArray, setFeedList: setFeedArray}}>{children}</feedContext.Provider>
    )
}

export default HomeFeedPicturesProvider