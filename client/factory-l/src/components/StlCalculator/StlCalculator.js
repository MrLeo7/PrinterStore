// import React, { useState } from "react";
// import classes from "./StlCalculator.module.css";
// import CustomButton from "../customButton/CustomButton";

// import { StlViewer } from "react-stl-file-viewer";
// const StlCalculator = (props) => {
//   const [volume, setvolume] = useState(0);
//   let itemCost = {
//     silkPla: 33,
//     resin: 55,
//     nylon: 45,
//   };

//   const [selectedMaterial, setSelectedMaterial] = useState("silkPla");

//   const changeHandler = (e) => {
   
//     setSelectedMaterial(e.target.value);
//     console.log(e.target.value);
//     console.log(itemCost[selectedMaterial])
//   };

//   if(volume.toFixed(0).length>4){
//     setvolume(volume/(10**(volume.toFixed(0).length-3)))
//   }

//   return (
//     <div>
//       <StlViewer url={props.file} volume={setvolume} />
//       <div className={classes.main}>
//         <span>
//           {`Volume: ${volume.toFixed(2)} `}cm
//           <sup style={{ fontSize: "16px" }}>3</sup>
//         </span>
//         <div className={classes.materials}>
//           <p>Select Material:</p>
//           <div className={classes.materialList}>
//             <input defaultChecked type="radio" value="silkPla" id="1" name="material" onChange={changeHandler} />
//             Slik PLA
//             <input type="radio" value="resin" id="2" name="material" onChange={changeHandler} />
//             Resin
//             <input type="radio" value="nylon" id="3" name="material" onChange={changeHandler} />
//             Nylon
//           </div>
//         </div>
//         <p>Estimated Cost: ${((volume/1000).toFixed(2)*itemCost[selectedMaterial]).toFixed(2)} </p>
//       </div>
//       <div className={classes.orderButton}>

//         <CustomButton 
//         text='Place Your Order'
//         width='100%'
//         />
//         </div>
//     </div>
//   );
// };

// export default StlCalculator;
