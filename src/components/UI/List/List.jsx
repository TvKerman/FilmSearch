import React from 'react';
import classes from "./List.module.css";
import Masonry from "react-masonry-css";

const breakpointObj = {
    default: 4,
    4000: 8,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
};

const List = ({children, ...props}) => {
    return (
        <div className={classes.List} {...props}>
            <Masonry
                className={classes.Column}
                columnClassName="mx-3"
                breakpointCols={breakpointObj}>
                {children}
            </Masonry>
        </div>
    );
};

export default List;