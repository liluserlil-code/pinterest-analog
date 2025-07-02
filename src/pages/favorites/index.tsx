import { ReactElement } from "react"
import { useContext } from "react"
import Header from "../../components/header"
import PicturesFeed from "../../components/picturesFeed"
import s from "./favorites.module.css"
import { favoritesContext } from "../../context/favorites/favoritesProvider"

const Favorites = ():ReactElement => {
    // const favoritesArray:IPictureArray = useContext(favoritesContext)![0]
    const {favoritesList} = useContext(favoritesContext)

    return(
        <div className={s.favorites}>
            <Header buttonPath={"/"} buttonText={"Home"} headerText={"Favorites"}/>
            <PicturesFeed picturesArray={favoritesList}/>
        </div>
    )
}

export default Favorites