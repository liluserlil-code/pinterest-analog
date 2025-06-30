import { ReactElement, useEffect, useState } from "react"
import Header from "../../components/header"
import API from "../../api";
import type { IPictureArray } from "../../domains/picture";

const PicturesFeed = ():ReactElement => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<IPictureArray>([]);
    
    const getPicturesFeed = async () => {
        try{
            setIsLoading(true);
            const response = await API.loadPicture();
            setResponse(response)

        }catch(error: any){
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getPicturesFeed();
    }, [])

    if(isLoading){
        return(<div>...Loading...</div>)
    }

    return(
        <Header buttonPath={"/favorites"} buttonText={"Your profile"} headerText={"Pinterest"}/>
    )
}

export default PicturesFeed