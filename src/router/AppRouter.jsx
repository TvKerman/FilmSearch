import React from 'react';
import {Route, Routes} from "react-router";
import Main from "../pages/Main";
import FilmPage from "../pages/FilmPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Main/>} />
                <Route index path="/:id" element={<FilmPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;