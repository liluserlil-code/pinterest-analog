import { ReactElement } from "react"
import Header from "../../components/header"

const PicturesFeed = ():ReactElement => {
    return(
        <Header buttonPath={"/favorites"} buttonText={"Your profile"} headerText={"Pinterest"}/>

    )
}

export default PicturesFeed