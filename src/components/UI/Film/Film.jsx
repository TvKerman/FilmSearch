import classes from "./Film.module.css";
import {getHigherResolutionImage} from "../../../utils/imageFunctions";
import im from "../../../image/def.png"

const Film = ({film, ratings}) => {
    var image;
    if (film.Poster !== 'N/A') {
        image = getHigherResolutionImage(film.Poster);
    } else {
        image = im
    }

    const baseInfo =
        [`Тип: ${film.Type}`,
         `Дата выхода: ${film.Released}`,
         `Возрастной рейтинг: ${film.Rated}`,
         `Продолжительность: ${film.Runtime}`,
         `Жанр: ${film.Genre}`,
         `Актеры: ${film.Actors}`,
         `Режиссёр: ${film.Director}`]


    return (
        <div className={classes.Film}>
            <div className={classes.FilmContainer}>
                <div className={classes.FilmPoster}>
                    <img src={image} style={{borderRadius: "1em 0px 0px 1em"}}/>
                </div>
                <div className={classes.FilmInfo}>
                    <div className={classes.FilmInfoContainer}>
                        <div className={classes.FilmTitle}>{film.Title}</div>
                        <div className={classes.FilmBaseInfoList}>
                            {baseInfo.map((info) => (
                                <div className={classes.FilmBaseInfoItem}>{info}</div>
                            ))}
                            <div className={classes.FilmBaseInfoItem} style={{marginTop: "2em"}}>Оценки</div>
                            {ratings.map((score) => (
                                <div className={classes.FilmBaseInfoItem}>{score.Source}: {score.Value}</div>
                            ))}
                        </div>
                        <div className={classes.FilmDescription}>Описание: {film.Plot}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Film;