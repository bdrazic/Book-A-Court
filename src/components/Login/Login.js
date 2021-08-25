import Modal from "../UI/Modal";
import classes from "./Login.module.css";
import React, { useState } from "react";
import Button from "../UI/Button/Button";
import UseLogin from "./UseLogin";
import validate from "./ValidateInfo";
import "./Login.css";
import FormSuccess from "./FormSuccess";

const Login = (props) => {
  const { handleChange, values, handleSubmit, errors, predaj } = UseLogin(validate);

  const [loginSubmitted, setLoginIsSubmitted] = useState(false);

  const handleClickHandler = () => {
    if (Object.keys(errors).length === 0 && predaj === true) {
        setLoginIsSubmitted(true);
    }
    };

  return (
    <Modal
      onClose={props.onCloseLogin}
      className={classes.modal}
      style={{ background: "none", backgroundColor: "none" }}
    >
      <div style={{ backgroundColor: "none" }}>
        <form className="login-form" onSubmit={handleSubmit} id="SignUpForma">
          <h1 style={{ fontSize: "20px" }} id="reg_uspjesna">
            Pridruži nam se tako što ćeš ispuniti potrebne informacije!
          </h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Korisničko ime:
            </label>
            <input
              id="username"
              className="form-input"
              type="text"
              name="username"
              placeholder="Unesite korisničko ime"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p className={classes.p}>{errors.username}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              E-Mail:
            </label>
            <input
              id="email"
              className="form-input"
              type="email"
              name="email"
              placeholder="Unesite E-mail"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className={classes.p}>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Lozinka:
            </label>
            <input
              id="password"
              className="form-input"
              type="password"
              name="password"
              placeholder="Unesite lozinku"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className={classes.p}>{errors.password}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password2" className="form-label">
              Potvrdite lozinku:
            </label>
            <input
              id="password2"
              className="form-input"
              type="password"
              name="password2"
              placeholder="Potvrdite lozinku"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && (
              <p className={classes.p}>{errors.password2}</p>
            )}
          </div>
          <span className="form-input-login">
            Već ste registrirani? Za Log In <a href="#">pritisnite ovdje.</a>
          </span>
          <div className={classes.actions}>
            <Button
              className={classes.button}
              type="submit"
              onClick={handleClickHandler}
            >
              Potvrdi
            </Button>
            <Button
              className={classes["button--alt"]}
              onClick={props.onCloseLogin}
            >
              Zatvori
            </Button>
            {loginSubmitted && <FormSuccess />}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
