import React from 'react'
import classes from "./Picture.module.css";

const picture = (props) => {
    return (
        <div className={classes.PictureContainer}>
            <img src={props.src} alt={'img'}/>
        </div>
    );
};

export default picture