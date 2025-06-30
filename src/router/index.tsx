import { ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import Favorites from "../pages/favorites";

const AppRouter = ():ReactElement => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;