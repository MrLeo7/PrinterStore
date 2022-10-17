import React from 'react'
import classes from './ListItem.module.css'

function ListItem(props) {
    
    const clickHandler=(props)=>{

    }
  return (
    <section className={classes.sections}>
    <div className={classes.image}>
      <img src={props.image} width={props.width} height={props.height} />
      </div>
      <span>{props.title}</span>
      <p>
        {props.text}
      </p>
      {props.button && <button className={classes.button} onClick={clickHandler} >Learn More</button>}
      <hr></hr>
    </section>
  )
}

export default ListItem