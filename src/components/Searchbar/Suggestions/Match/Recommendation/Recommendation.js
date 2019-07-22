import React from 'react'
import customProfilePicture from '../../../../../assets/img01.jpg'
import classes from './Recommendation.module.css'


const recommendation = (props) => {
    return (
        <div className={classes.People}>
            <img alt={'A very cool profile'} src={customProfilePicture}/>
            <div className={classes.Description}>
                <label>{props.name}</label>
                <span>{props.username}</span>
            </div>
        </div>
    )
};

export default recommendation