import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";
import Film from "../components/UI/Film/Film";
import NavButton from "../components/UI/NavButton/NavButton";
import Loader from "../components/UI/Loader/Loader";

const FilmPage = () => {
    const params = useParams()
    const {film, ratings, loading, error} = useSelector((state) => state.singleFilm);
    const navigate = useNavigate()
    const {fetchFilm} = useActions()


    useEffect(() => {
        fetchFilm(params.id)
    }, [])

    return (
        <div className="App">

            <div style={{position: "relative", top: "2em", left: "15%", width: "70%"}}>
                <NavButton onClick={() => {navigate('/')}} style={{marginLeft: "30px"}}>Вернуться на главную страницу</NavButton>
            </div>
            {loading ?
                <div style={{position: "relative", width: "100%", left: "50%", top: "10em"}}>
                    <Loader/>
                </div>
                :
                null
            }

            {!loading && error == null?
                <Film film={film} ratings={ratings}/> :
                null
            }

        </div>
    );
};

export default FilmPage;