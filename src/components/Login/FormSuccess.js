import React from "react";
import CardTwo from "../UI/Card";
import Modal from "../UI/Modal";
import Button from "../UI/Button/Button";
import classes from "./FormSuccess.module.css";

function FormSuccess() {
  return (
    <div className={classes.div}>
      <h1
        style={{
          color: "green",
          fontWeight: "bold",
          fontSize: "20px",
          textAlign: "center",
          // marginTop:"15px",
          // padding:"10px",
          paddingLeft:"23px",
          alignContent:"center",
          textShadow:"-2px 0 black"
          }}
      >
        Registracija uspješna
      </h1>
    </div>
  );
}

export default FormSuccess;
