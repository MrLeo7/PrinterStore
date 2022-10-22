import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import MuiDrawer from "../drawer/MuiDrawer";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <nav>
      <div className={classes.drawer}>
        <MuiDrawer />
      </div>
      <h1>
        <Link to="/">FACTORY L</Link>
      </h1>
      <div className={classes.navLinks}>
        <p>
          {" "}
          <Link to="marketplace"> MARKETPLACE </Link>
        </p>
        <p>
          {" "}
          <Link to="about"> ABOUT </Link>
        </p>
        <p>
          {" "}
          <Link to="materials"> MATERIALS </Link>
        </p>
      </div>
      <div className={classes.shoppingCart}>
        <ShoppingCartOutlinedIcon color="inherit" fontSize="medium" />
        
          <sup>1</sup>
        
      </div>
    </nav>
  );
};

export default Navbar;
