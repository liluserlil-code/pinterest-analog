import { type PropsWithChildren, ReactElement, useState } from "react";
import type {IPictureArray} from "../domains/picture"
import { feedContext } from "../context/context";
// import type {FeedContext} from "../domains/picture"

// export const feedContext = createContext<FeedContext>([[],() =>{}])

const PicturesFeedProvider = ({children}:PropsWithChildren):ReactElement => {
    const [feedArray, setFeedArray] = useState<IPictureArray>([])

    return(
        <feedContext.Provider value={[feedArray, setFeedArray]}>{children}</feedContext.Provider>
    )
}

export default PicturesFeedProvider