import React from 'react'
import classes from './TitleAndDescription.module.css'
const TitleAndDescription = (props) => {
  return (
    <div className={classes.main}>
        <h2 className={classes.title}>{props.title}</h2>
        <div className={classes.pAndBox} >
            <div className={classes.verticalBox}></div>
            <p className={classes.description}> {props.description} </p>
        </div>
    </div>
  )
}

export default TitleAndDescription