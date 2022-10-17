import React from "react";
import classes from "./MaterialList.module.css";
import ListItem from "../listItem/ListItem";
import CustomButton from "../customButton/CustomButton";
export const MaterialList = () => {
  return (
    <div className={classes.wrapper}>
        <div className={classes.head} >

      <h2>Materials</h2> <CustomButton text='Browse All Materials'/>
        </div>
      <div className={classes.sectionsDiv}>
        <ListItem
          image="/assets/nylon.jpg"
          width="400"
          height="400"
          text=" Nylon 12 [Versatile Plastic] is a durable nylon plastic that can be used for a wide range of applications, both for prototyping and for end products. Printed using Selective Laser Sintering (SLS) 3D printing services, when thin, it's flexible enough for hinges and springs and when thick, strong enough for structural components."
          title="Nylon"
        />
        <ListItem
          image="/assets/resin.jpg"
          width="400"
          height="400"
          text=" SLA allows you to print a model with extremely fine details. The layers are less than one hundred microns thin and form very quickly. Instead of fusing FDM wires, these layers chemically connect with each other. In this way, the object becomes essentially one uniform material."
          title="SLA resin"
        />

        <ListItem
          image="/assets/silk_pla.jpg"
          width="400"
          height="400"
          text="At a very Low cost, PLA is biodegradable under commercial composting conditions and will breakdown within twelve weeks, making it a more environmentally choice when it comes to plastics in contrast to traditional plastics which could take centuries to decompose and end up creating microplastics"
          title="Silk PLA"
        />
      </div>
    </div>
  );
};

export default MaterialList;
