import { useSelector } from "react-redux";
import { useState } from "react";
import ShoppingCartItem from "../shoppingCartItem/ShoppingCartItem";
import CustomButton from "../customButton/CustomButton";
import classes from "./ShoppingCartExpanded.module.css";


let total = 0;
const ShoppingCartExpanded = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    let priceSums = []
    const initialValue = 0;

    cartItems.map(item => { priceSums.push(item.price*item.quantity) 
    console.log(priceSums)
    })    
    
    const sum = priceSums.reduce(
        (a, b) => a + b,  initialValue
        );
        console.log(sum.toFixed(2))
    
  let cartItemsExpanded = cartItems.map((item) => {
     
    return (
      <ShoppingCartItem 
      id={item._id}
      image={item.image}
      name={item.name}
      quantity={item.quantity}
      price={item.price}
      
      key={Math.random()}

      
      />
    );
  });
  return (
    <div className={classes.main}>
      <div className={classes.items}>
        <h1> Your Cart</h1>
        {cartItemsExpanded}
      </div>
      <div className={classes.checkout}>
        <h2>Subtotal:${sum.toFixed(2)}</h2>
        <CustomButton 
        text = 'Checkout'
        width='90%'/>


      </div>
    </div>
  );
};

export default ShoppingCartExpanded;
