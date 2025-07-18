import { createContext, Dispatch, PropsWithChildren, ReactElement, SetStateAction } from "react";
import { useState } from "react";

export interface IBoard {
    id: number;
    name: string;
    boardPictures: number[];
}

export type IBoardArray = IBoard[]

export interface IUserContext {
    allPins: number[];
    setAllPins: Dispatch<SetStateAction<number[]>>;
    unsortedPins: number[];
    setUnsortedPins: Dispatch<SetStateAction<number[]>>;
    boards: IBoardArray;
    setBoards: Dispatch<SetStateAction<IBoardArray>>;
};

export const userContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({children}:PropsWithChildren):ReactElement => {
    const [allPins, setAllPins] = useState<number[]>([]);
    const [unsortedPins, setUnsortedPins] = useState<number[]>([]);
    const [boards, setBoards] = useState<IBoardArray>([]);
    return(
        <userContext.Provider value={{
            allPins: allPins, 
            setAllPins: setAllPins,
            unsortedPins: unsortedPins,
            setUnsortedPins: setUnsortedPins,
            boards: boards,
            setBoards: setBoards,
        }}>{children}</userContext.Provider>
    )
}

export default UserProvider;