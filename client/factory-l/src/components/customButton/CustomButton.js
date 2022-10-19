import React from "react";
import classes from './CustomButton.module.css'

const CustomButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick} className={classes.button}><span>{props.text}</span></button>
    </div>
  );
};

export default CustomButton;
