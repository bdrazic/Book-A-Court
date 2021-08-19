import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

import React from "react";

const Cart = (props) => {
  const cartItems = <ul className={classes['cart-items']}>{[
    { id: "t1", name: "Tenis", amount: 1, price: 100.0 }, 
    ].map((item) => <li>{item.name}</li>)}</ul>;

  return (
    <Modal onClose={props.onClose} >
      {cartItems}
      <div className={classes.total}>
          <span>Ukupan iznos:</span>
          <span>100.00</span>
      </div>
      <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>Zatvori</button>
          <button className={classes.button}>Potvrdi</button>
      </div>
    </Modal>
  );
};

export default Cart;
