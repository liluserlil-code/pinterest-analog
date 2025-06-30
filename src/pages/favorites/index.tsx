import { ReactElement } from "react"
import { useContext } from "react"
import Header from "../../components/header"
import type { IPictureArray } from "../../domains/picture"
import { favoritesContext } from "../../context/context"
import PicturesFeed from "../../components/picturesFeed"
import s from "./favorites.module.css"

const Favorites = ():ReactElement => {
    const favoritesArray:IPictureArray = useContext(favoritesContext)![0]

    return(
        <div className={s.favorites}>
            <Header buttonPath={"/"} buttonText={"Home"} headerText={"Favorites"}/>
            <PicturesFeed picturesArray={favoritesArray}/>
        </div>
    )
}

export default Favorites