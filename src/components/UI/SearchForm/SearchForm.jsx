import React, {useState} from 'react'
import classes from "./SearchForm.module.css";


const SearchForm = ({value, setValue, setStart, ...props}) => {
    const [isActive, setActive] = useState(false);
    const [film, setFilm] = useState(value);

    var classOverlay = [classes.SearchFormOverlay];
    var classBackground = [classes.SearchFormBackground];
    var classInput = [classes.ArrowInput];

    if (isActive) {
        classOverlay.push(classes.SearchFormOverlayVisibility);
        classBackground.push(classes.SearchFormBackgroundActive);
        classInput.push(classes.ArrowInputActive);
    }

    const startSearch = (event) => {
        event.preventDefault();
        setActive(false);
        setValue(film);
        setStart(true);
    }

    return (
        <div className={classes.SearchForm}>
            <div className={classOverlay.join(' ')} onClick={() => {setActive(false)}}></div>
            <div className={classBackground.join(' ')}></div>

            <div className={classes.Arrow}>
                <div className={classes.FormBoarder}>
                    <input className={classInput.join(' ')}
                           value={film}
                           onChange={(event) => {setFilm(event.target.value)}}
                           onClick={() => {setActive(true)}}/>
                    <button className={classes.ArrowButton} onClick={startSearch}>
                        Поиск
                    </button>
                </div>
            </div>
        </div>
);
}

export default SearchForm;