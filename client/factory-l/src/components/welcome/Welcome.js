import React from "react";
import classes from "./Welcome.module.css";
import { useNavigate } from "react-router";
import CustomButton from "../customButton/CustomButton";


function Welcome() {

  const navigate = useNavigate();
  return (
    <div className={classes.main}>
      <div className={classes.welcomeArticleAndImage}>
        <article className={classes.article}>
          <h1>3D Printing Service</h1>
          <div className={classes.pAndBox}>
            <div className={classes.verticalBox}> </div>
            <p>
              Create and customize. Streamline and save. Break down design
              barriers and scale your business with FactoryL 3D printing
              services
            </p>
          </div>
          <div className={classes.buttons}>
           <CustomButton 
           onClick={()=>{navigate('/quote')}}
           name='quote'
           text='Get a Quote'
           width='200px'/>
          </div>
        </article>

        <div className={classes.image}>
          
        {/* <img src="https://i.ibb.co/QJRPZvd/welcome-logo-tra.webp" alt="welcome-logo-tra" border="0" loading="lazy"> */}

          {/* </img> */}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
