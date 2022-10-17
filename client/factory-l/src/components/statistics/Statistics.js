import React from "react";
import classes from "./Statistics.module.css";

export const Statistics = () => {
  return (
    <section className={classes.main}>
      <div className={classes.row}>
        <div className={classes.element}>
          <p className={classes.pTop}>
            10K <sup>+</sup>{" "}
          </p>
          <p className={classes.pBottom}> Parts 3D Printed</p>
        </div>
        <section className={classes.line}></section>
        <div className={classes.element}>
          <p className={classes.pTop}>
            3 
          </p>
          <p className={classes.pBottom}> 3D Printing Technologies</p>
        </div>
        <section className={classes.line}></section>
        <div className={classes.element}>
          <p className={classes.pTop}>
            10 <sup>+</sup>{" "}
          </p>
          <p className={classes.pBottom}> Materials and Finishings</p>
        </div>
        <section className={classes.line}></section>
        <div className={classes.element}>
          <p className={classes.pTop}>
            10 <sup>+</sup>{" "}
          </p>
          <p className={classes.pBottom}> Countries Shipped</p>
        </div>
        <section className={classes.line}></section>
        <div className={classes.element}>
          <p className={classes.pTop}>
            1K <sup>+</sup>{" "}
          </p>
          <p className={classes.pBottom}> Customers Served</p>
        </div>
        
      </div>
    </section>
  );
};

export default Statistics;
