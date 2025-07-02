// появились огромные проблемы с памятью из-за использования 
// обычной переменной в качестве хранилища через useContext
// вкладка расходовала 600+ мб памяти
// Решение: loading="lazy" на img
// Решение 2: библиотека 'react-window'

import { ReactElement, useEffect, useState } from "react"
import Header from "../../components/header"
import API from "../../api";
import { useContext } from "react";
import { feedContext } from "../../context/homeFeedPictures/homePicturesFeedProvider"
import PicturesFeed from "../../components/picturesFeed";
import Loading from "./loading";
import s from "./homePage.module.css"

const HomePage = ():ReactElement => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    //const context = useContext(feedContext)![0]; // "!" - Это называется Non-Null Assertion Operator (оператор утверждения «не null / не undefined»).
    const {feedList, setFeedList} = useContext(feedContext);
    
    const getPicturesFeed = async () => {
        try{
            setIsLoading(true);
            const response = await API.loadPicture();
            setFeedList(response);

        }catch(error: any){
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getPicturesFeed();
    }, [])

    return(
        <div className={s.homepage}>
            <Header buttonPath={"/favorites"} buttonText={"Favorites"} headerText={"Pinterest"}/>
            {(isLoading ? <Loading/> : <PicturesFeed picturesArray={feedList}/>)}
        </div>
    )
}

export default HomePage;