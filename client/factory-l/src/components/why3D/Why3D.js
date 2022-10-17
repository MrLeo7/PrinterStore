import React from "react";
import classes from "./Why3D.module.css";
export const Why3D = () => {
  return (
    <div className={classes.wrapper}>
      <h2>Why 3D Printing?</h2>
      <div className={classes.sectionsDiv}>
        <section>
        <div className={classes.image}>
          <img src="/assets/3dPirnter_drawing.jpg" width="200" height="200" />
          </div>
          <span>Reduce Assembly Time</span>
          <p>
            Don't waste time putting products together! Rely on 3D printing to
            make complex geometries that can be printed as one piece—or
            consolidated in one build.
          </p>
          <hr></hr>
        </section>
        <section>
          <div className={classes.image}>
            <img src="/assets/clock_drawing.jpg" width="225" height="200" />
          </div>
          <span>Fast Turnaround</span>
          <p>
            Working on a project for a customer that has to be just right? Get
            models back fast, and 3D print new iterations, if needed, for final
            feedback and production.
          </p>
          <hr></hr>
        </section>
        <section>
        <div className={classes.image}>
          <img src="/assets/badge_drawing.jpg" width="200" height="200" />
          </div>
          <span>Reliable Quality</span>
          <p>
            Proprietary processes, expert 3D printing operators, and inspections
            are our secrets to delivering exceptional, quality products every
            time.
          </p>
          <hr></hr>
        </section>
      </div>
    </div>
  );
};

export default Why3D;
