import React, {useEffect} from 'react';
import ListItem from "./UI/ListItem/ListItem";
import {useNavigate} from "react-router";
import {getHigherResolutionImage} from "../utils/imageFunctions";
import im from "../image/def.png";
import {useActions} from "../hooks/useActions";

const FilmListItem = ({film}) => {
    const { fetchFilmPlot } = useActions();
    const navigate = useNavigate();

    var image;
    if (film.Poster !== 'N/A') {
        image = getHigherResolutionImage(film.Poster);
    } else {
        image = im
    }

    useEffect(() => {
        fetchFilmPlot(film.imdbID)
    }, [])

    return (
        <ListItem
            id={film.imdbID}
            onClick={() => {
                navigate(`/${film.imdbID}`);
            }}
            title={film.Title}
            description={film.Plot}
            year={film.Year}
            rating={film.imdb}
            url={image}
        />
    );
};

export default FilmListItem;