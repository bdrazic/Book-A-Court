import React, { useState } from "react";
import CardTwo from "../UI/CardTwo";
import classes from "./Sports.module.css";
import basketballLayoutImage from "../../assets/basketball-court.jpg";
import BasketballCourts from "./AvailableCourts/BasketballCourts";
import Cart from "../Cart/Cart";

const Basketball = () => {
  const [cartIsShowing, setCartIsShowing] = useState(false);

  const showCartHandler = () => {
    setCartIsShowing(true);
  };

  const hideCartHandler = () => {
    setCartIsShowing(false);
  };

  return (
    <section className={classes.sports}>
      <CardTwo>
        {cartIsShowing && <Cart onClose={hideCartHandler} />}
        <p>Dostupni tereni:</p>
        <img src={basketballLayoutImage} alt="Basketball court layout" />
        <BasketballCourts onShowCart={showCartHandler} />
      </CardTwo>
    </section>
  );
};

export default Basketball;
