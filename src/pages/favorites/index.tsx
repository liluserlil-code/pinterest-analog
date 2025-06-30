import { ReactElement } from "react"
import Header from "../../components/header"

const Favorites = ():ReactElement => {
    return(
        <Header buttonPath={"/"} buttonText={"Home"} headerText={"Favorites"}/>
    )
}

export default Favorites