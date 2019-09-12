import React from 'react'
import classes from './Topics.module.css'

const topics = (props) => {
    return (
        <div className={classes.TopicsContainer}>
            <span className={classes.Title}>{props.title}</span>
            <img src={props.src} alt={'img'}/>
        </div>
    );
};

export default topics;