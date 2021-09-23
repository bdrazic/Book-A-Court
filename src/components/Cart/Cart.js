import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import Calendar from "react-calendar";
import React, { useContext, useState } from "react";
import styles from "./Calendar.module.css";
import { CheckoutContext } from "../../context/CheckoutContext";
import Button from "../UI/Button/Button";
import Weather from "../Weather/Weather";

const Cart = (props) => {
  var odabir = useContext(CheckoutContext);

  if (document.getElementById("forma1")) {
    if (document.getElementById("t1").checked) {
      odabir = {
        naziv: "Teren 1",
        cijena: "100,00 kn",
        opis: "Pješčani teniski teren",
      };
    } else if (document.getElementById("t2").checked) {
      odabir = {
        naziv: "Teren 2",
        cijena: "100,00 kn",
        opis: "Pješčani teniski teren",
      };
    } else if (document.getElementById("t3").checked) {
      odabir = {
        naziv: "Teren 3",
        cijena: "120,00 kn",
        opis: "Gumeni teniski teren",
      };
    } else if (document.getElementById("t4").checked) {
      odabir = {
        naziv: "Teren 4",
        cijena: "80,00 kn",
        opis: "Betonski teniski teren",
      };
    }
  } else if (document.getElementById("forma2")) {
    if (document.getElementById("b1").checked) {
      odabir = {
        naziv: "Teren 1",
        cijena: "200,00 kn",
        opis: "Košarkaški teren u dvorani",
      };
    }
  } else if (document.getElementById("forma3")) {
    if (document.getElementById("n1").checked) {
      odabir = {
        naziv: "Teren 1",
        cijena: "250,00 kn",
        opis: "Nogometni teren",
      };
    }
  }

  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(date);
    console.log(time);
    console.log(odabir.naziv);
    console.log(odabir.opis);
    console.log(odabir.cijena);
  };
  const [time, setTime] = useState("");

  const timeChangeHandler = (event) => {
    setTime(event.target.value);
  };

  return (
    <Modal
      onClose={props.onClose}
      style={{ backgroundColor: "white", background: "white" }}
      className={classes.modal}
    >
      <form onSubmit={submitHandler} className={classes.cartForm}>
        <h1 className={classes.h1}>
          {odabir.naziv} - {odabir.opis}
        </h1>
        <Calendar
          onChange={onChange}
          value={date}
          minDate={new Date()}
          className={styles.calendar}
        />
        <div className={classes.total}>
          <span style={{ fontFamily: "Staatliches, cursive" }}>
            Odabrani datum: {date.toLocaleDateString()}
          </span>
          <div style={{ fontFamily: "Staatliches, cursive" }}>
            Ukupan iznos: {odabir.cijena}
          </div>
        </div>
        <div>
          <label className={classes.label}>
            Vrijeme rezervacije:
            <input
              id="time"
              style={{ fontSize: "20px", fontFamily: "Staatliches, cursive" }}
              type="time"
              min="07:00" required
              max="22:00"
              placeholder="Time"
              onChange={timeChangeHandler}
              name="time"
              value={time}
            />
          </label>
          <span>*07:00h-22:00h</span>
        </div>
        <Weather/>
        <div className={classes.actions}>
          <Button className={classes["button--alt"]} onClick={props.onClose}>
            Zatvori
          </Button>
          <Button className={classes.button} onClick={submitHandler}>
            Potvrdi
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default Cart;
