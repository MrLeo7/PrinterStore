import React from "react";
import classes from "./OurServices.module.css";
import ListItem from "../listItem/ListItem";

const OurServices = () => {
  return (
    <div className={classes.wrapper}>
      <h2>Our Services</h2>
      <div className={classes.sectionsDiv}>
        <ListItem
          image="/assets/production_parts.jpg"
          width="400"
          height="400"
          text=" Upload customized models for 3D printing service—ensuring durability and strength in materials that result in end-use products meant to last."
          title="Production Parts"
          buttonLink="production"
        />
        <ListItem
          image="/assets/finishes.jpg"
          width="400"
          height="400"
          text="Whether designers prefer polishing, smoothing, dyeing–or a combination of finishing techniques–Factory L 3D printing services can perfect those final touches with shine, gloss, and color."
          title="Finishing"
          buttonLinkLink="finishing"
        />

        <ListItem
          image="/assets/prototyping.jpg"
          width="400"
          height="400"
          text="Take the guesswork out of product development with 3D printing services for high-performance models used in meetings, testing, and perfection of final parts."
          title="Rapid Prototyping"
          buttonLink="prototyping"
        />
      </div>
    </div>
  );
};

export default OurServices;
