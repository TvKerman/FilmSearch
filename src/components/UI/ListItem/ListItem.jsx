import React from 'react';
import classes from "./ListItem.module.css";
import {getHigherResolutionImage} from "../../../utils/imageFunctions";

const ListItem = ({title, description, url, rating, year, id, ...props}) => {
    return (
        <div className={classes.CardsItem} key={id} {...props}>
            <div className={classes.Card}>
                <div className={classes.CardImage}>
                    <img src={getHigherResolutionImage(url)}/>
                </div>
                <div className={classes.CardContent}>
                    <div className={classes.CardTitle}>{title}</div>
                    <div className={classes.CardText} style={{marginBottom: "0"}}>Год выхода: {year}</div>
                    <div className={classes.CardText}>IMDb: {rating}</div>
                    <div className={classes.CardText}>{description}</div>
                </div>
            </div>
        </div>
    );
};

export default ListItem;