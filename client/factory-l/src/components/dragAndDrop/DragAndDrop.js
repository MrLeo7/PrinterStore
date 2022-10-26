import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import classes from "./DragAndDrop.module.css";
import { useState } from "react";

function DragAndDrop(props) {
  const [dragIsValid, setDragIsValid] = useState(false);
  // const [dragIsTouched, setDragIsTouched] = useState(false)
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [imageName, setImageName] = useState("");

  const uploadHandler = (event) => {
    event.preventDefault();
  };

  let files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  useEffect(() => {
    if (localStorage.getItem("image-name")) {
      setImageName(localStorage.getItem("image-name"));
    }
  }, []);

  useEffect(() => {
    if (files.length > 0) {
      setImageName(acceptedFiles[0].name);
      setDragIsValid(true);
      

      var reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onload = function () {
        localStorage.setItem("image", reader.result);
        //returns uploaded image and boolean to tell if it is empty or not
        props.onChange(reader.result, files.length > 0);
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
      return;
    } else {
      setDragIsValid(false);
    }
  }, [files]);
  let dragAndDropClass = classes.dragDrop;
  // if (dragIsValid && dragIsTouched) {
  //   dragAndDropClass = classes.dragDrop;
  // } else if(!dragIsValid && dragIsTouched) {
  //   dragAndDropClass = classes.dragDropInvalid;
  // }
  return (
    <section>
      <div
        {...getRootProps({ className: "dropzone" })}
        className={dragAndDropClass}
      >
        <input {...getInputProps()} />
        <div className={classes.dragText}>
          Choose an Image or drag it here:{" "}
        </div>
        <div className={classes.buttonAndText}>
          <button className={classes.dragButton} onClick={uploadHandler}>
            Select
          </button>
          {imageName}
        </div>
      </div>
    </section>
  );
}

export default DragAndDrop;
