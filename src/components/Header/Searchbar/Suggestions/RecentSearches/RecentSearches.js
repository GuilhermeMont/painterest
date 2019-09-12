import React from 'react'
import classes from './RecentSearches.module.css'

const recentSearches = (props) => {
    return(
      <span className={classes.RecentSearches}>
          {props.text}
      </span>
    );
};

export default recentSearches;