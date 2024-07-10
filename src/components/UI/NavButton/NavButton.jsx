import React from 'react';
import classes from "./NavButton.module.css";

const NavButton = ({children, ...prop}) => {
    return (
        <div className={classes.NavButton} {...prop}>
            {children}
        </div>
    );
};

export default NavButton;