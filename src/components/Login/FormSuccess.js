import React from "react";
import classes from "./FormSuccess.module.css";

function FormSuccess() {
  return (
    <div className={classes.div}>
      <h1
        style={{
          color: "green",
          fontWeight: "bold",
          fontSize: "23px",
          textAlign: "center",
          // marginTop:"15px",
          // padding:"10px",
          paddingLeft:"23px",
          alignContent:"center",
          textShadow:"-2px 0 black",
          marginTop:"11px"
          }}
      >
        Registracija uspješna
      </h1>
    </div>
  );
}

export default FormSuccess;
