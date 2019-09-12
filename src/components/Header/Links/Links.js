import React from 'react'
import classes from './Links.module.css'

const links = (props) => {

  return (
      <div className={classes.LinksContainer}>
          <span className={classes.Link}>Home</span>
          <span className={classes.Link}>Following</span>
          <span className={classes.Link}>Profile</span>
      </div>
  )
};

export default links