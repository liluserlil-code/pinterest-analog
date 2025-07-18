// появились огромные проблемы с памятью из-за использования 
// обычной переменной в качестве хранилища через useContext
// вкладка расходовала 600+ мб памяти
// Решение: loading="lazy" на img
// Решение 2: библиотека 'react-window'

import { ReactElement, useEffect, useRef, useState } from "react"
import MainHeader from "../../components/headers/mainHeader/mainHeader"
import API from "../../api";
import { useContext } from "react";
import { feedContext } from "../../context/homeFeedPictures/homePicturesFeedProvider"
import PicturesFeed from "../../components/picturesFeed";
import Loading from "./loading";
import s from "./homePage.module.css"

const HomePage = ():ReactElement => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {feedList, setFeedList, page, setPage} = useContext(feedContext);
    const loaderRef = useRef<HTMLDivElement >(null)
    
    const getPicturesFeed = async () => {
        try{
            setIsLoading(true);
            const response = await API.loadPicture(page);
            setFeedList([...feedList, ...response]);
            setPage(prev => prev + 1);
        }catch(error: any){
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (!loaderRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isLoading) {
                getPicturesFeed();
                }
            },
            { root: null, threshold: 0.1 }
        );

        observer.observe(loaderRef.current);

        return () => observer.disconnect();
    }, [loaderRef.current, isLoading]);

    return(
        <div className={s.homepage}>
            <MainHeader/>
            <div className={s.content}>
                <PicturesFeed picturesArray={feedList}/>
                {(isLoading? <Loading/> : null)}
                <div ref={loaderRef} style={{ height: "20px" }} />
            </div>
        </div>
    )
}

export default HomePage;