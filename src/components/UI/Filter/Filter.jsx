import classes from "./Filter.module.css";

const Filter = ({children, ...props}) => {
    return (
        <div className={classes.Filter}>
            <div className={classes.FilterWrapper}>
                {children}
            </div>
        </div>
    );
};

export default Filter;