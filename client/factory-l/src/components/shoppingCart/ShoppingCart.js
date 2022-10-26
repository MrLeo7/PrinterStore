import React, { useState } from "react";
import classes from "./ShoppingCart.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [cartClass,setCartClass] = useState(classes.shoppingCart)
  const itemNumber = useSelector((state) => state.cart.cartItems.length);
  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    
      localStorage.setItem("cart", JSON.stringify(cartItems));
      let cartItem = localStorage.getItem("cart");
      console.log(cartItems);
    
  }, [cartItems]);

 
  useEffect(()=>{
    setCartClass(classes.shoppingCartAnimated)
    setTimeout(()=>{setCartClass(classes.shoppingCart)},900)
  },[cartItems])
  return (
  
      <div className={cartClass} onClick={() => { navigate("/cart")}}>
        <ShoppingCartOutlinedIcon color="inherit" fontSize="medium" />

        <sup>{itemNumber}</sup>
      </div>
    
  );
};

export default ShoppingCart;
