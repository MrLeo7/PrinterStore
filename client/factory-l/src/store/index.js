import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice'
import stlReducer from '../features/stl/stlSlice'

const store = configureStore({
    reducer: { cart: cartReducer , stl:stlReducer},
    
  });
  
  export default store;