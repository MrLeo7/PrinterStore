import React from "react";
import { StlViewer } from "react-stl-viewer";
import classes from "./StlViewerV2.module.css";
import StlCalculator from "../StlCalculator/StlCalculator";
import DragAndDrop from "../dragAndDrop/DragAndDrop";
import { stlActions } from "../../features/stl/stlSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CustomButton from "../customButton/CustomButton";
const url = "test.stl";

const style = {
  top: 0,
  left: 0,
  width: "100%",
  height: "50vw",
};

function StlViewerV2() {
  const dispatch = useDispatch();
  const uploadHandler = (e) => {
    dispatch(stlActions.uploadFile(e));
  };
  const stlFile = useSelector((state) => state.stl.file);

  return (
    <div>
      <div className={classes.canvsas}>
        <StlViewer
          style={style}
          orbitControls
          shadows
          url={stlFile}
          showAxes
            
            />
      </div>
      <div className={classes.calculator}>
        <StlCalculator file={stlFile} />
        <DragAndDrop
          onChange={uploadHandler}
          text="Select STL File or drag it here:"
        />
      </div>
    </div>
  );
}

export default StlViewerV2;
