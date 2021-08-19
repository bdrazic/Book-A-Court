import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import Calendar from "react-calendar";
import React, { useState } from "react";
import styles from'./Calendar.module.css';
 
const Cart = (props) => {
  
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "t1", name: "tenis", amount: 1, price: 100.0 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <Calendar onChange={onChange} value={date} minDate={new Date()}  className={styles.calendar}/>
      {cartItems}
      <div className={classes.total}>
        <span>Odabrani datum:</span>
        <span>{date.toLocaleDateString()}</span><br/>
        <span>Ukupan iznos:</span>
        <span>100.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Zatvori
        </button>
        <button className={classes.button}>Potvrdi</button>
      </div>
    </Modal>
  );
};

export default Cart;
