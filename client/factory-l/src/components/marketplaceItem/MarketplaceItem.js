import React from "react";
import classes from "./MarketplaceItem.module.css";
import { useNavigate } from "react-router";

const MarketplaceItem = (props) => {
  const navigate = useNavigate();
  let id = props.id;
  const clickHandler = (e) => {
    e.preventDefault();
    navigate("/products/" + id);
  };
  return (
    <div className={classes.itemCard} onClick={clickHandler}>
      <img src={props.image} width="100%" />
      <span className={classes.itemName}>{props.name}</span>
      <div>
        <span className={classes.price}>${props.price}</span> by{" "}
        <span className={classes.creator}>{props.creator}</span>
      </div>
    </div>
  );
};

export default MarketplaceItem;
