import React, {useEffect, useRef, useState} from 'react';
import SearchForm from "../components/UI/SearchForm/SearchForm";
import List from "../components/UI/List/List";
import {getStorageValue} from "../utils/localStorageFunctions";
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";
import {useDebounce} from "../hooks/useDebounce";
import {useObserver} from "../hooks/useObserver";
import FilmListItem from "../components/FilmListItem";
import Loader from "../components/UI/Loader/Loader";
import FilmFilter from "../components/FilmFilter";

const Main = () => {
    const [searchQuery, setQuery] = useState(getStorageValue("searchQuery", ""));
    const [page, setPage] = useState(getStorageValue("startPage", 1))
    const [isStartSearch, setStartSearch] = useState(searchQuery !== "")
    const {fetchFilms, resetFilms} = useActions();
    const debouncedFetchFilms = useDebounce(fetchFilms, 0);
    const {films, loading, error, totalResults} = useSelector((state) => state.films);

    const intersectionRef = useRef();

    useEffect(() => {
        if (isStartSearch) {
            resetFilms();
            setPage(1);
            window.localStorage.setItem("searchQuery", searchQuery);
            debouncedFetchFilms(1, searchQuery.trim());
            setStartSearch(false)
        }
    }, [isStartSearch]);

    useEffect(() => {
        if (page !== 1) {
            debouncedFetchFilms(page, searchQuery.trim());
        }
    }, [page]);

    useObserver(intersectionRef,
        page < Math.ceil(totalResults / 10) && error == null,
        loading,
        () => {
        setPage((prevPage) => prevPage + 1);
    })

    return (
        <div className="App">
            <div className="TitleStyle">
                <SearchForm value={searchQuery} setValue={setQuery} setStart={setStartSearch}/>
            </div>

            <FilmFilter/>

            <List>
                {films.map((film) => (
                    <FilmListItem key={film.imdbID} film={film}/>
                ))}

            </List>
            {loading ?
                <div style={{position: "relative", left: "48%", width: "100%"}}>
                    <Loader/>
                </div> :
                null
            }

            <div ref={intersectionRef} style={{width: "100%", height: "10px"}}/>:
        </div>
    );
};

export default Main;