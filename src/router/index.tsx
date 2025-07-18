import { ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import User from "../pages/user";
import UnsortedPins from "../pages/user/savedPins/unsortedPins";
import AllPins from "../pages/user/savedPins/allPins";
import CreatedPins from "../pages/user/createdPins";
import SavedPins from "../pages/user/savedPins";
import BoardsFeed from "../pages/user/savedPins/boardsFeed";
import BoardsPictures from "../pages/user/savedPins/boardsFeed/board/boardsPictures";

const AppRouter = ():ReactElement => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/user" element={<User/>}>
                    <Route path="created" element={<CreatedPins/>}/>
                    <Route path="saved" element={<SavedPins/>}>
                        <Route path="pins" element={<AllPins/>}/>
                        <Route path="boards" element={<BoardsFeed/>}/>
                            <Route path="boards/:name" element={<BoardsPictures/>}/>
                        <Route path="unsorted" element={<UnsortedPins/>}/>
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;