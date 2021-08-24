import Modal from "../UI/Modal";
import classes from "./Login.module.css";
import React from "react";
import Button from "../UI/Button/Button";

const Login = (props) => {
  return (
    <Modal onClose={props.onCloseLogin}>
      <div className={classes.actions}>
        <Button className={classes.button}>Potvrdi</Button>
        <Button className={classes["button--alt"]} onClick={props.onCloseLogin}>
          Zatvori
        </Button>
      </div>
    </Modal>
  );
};

export default Login;
