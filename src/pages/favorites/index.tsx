import { ReactElement } from "react"
import Header from "../../components/header"

const Favorites = ():ReactElement => {
    return(
        <Header buttonPath={"/"} buttonText={"Home"} headerText={"Your profile"}/>
    )
}

export default Favorites