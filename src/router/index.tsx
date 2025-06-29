import { ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PicturesFeed from "../pages/picturesFeed";
import Favorites from "../pages/favorites";

const AppRouter = ():ReactElement => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<PicturesFeed/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;