import React, { useState } from "react";
import CardTwo from "../UI/CardTwo";
import classes from "./Sports.module.css";
import tennisLayoutImage from "../../assets/tennis-layout.jpg";
import TennisCourts from "./AvailableCourts/TennisCourts";
import Cart from "../Cart/Cart";

const Tennis = () => {
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
        <p>Dostupni tereni: </p>
        <img src={tennisLayoutImage} alt="Tennis courts layout" />
        <TennisCourts onShowCart={showCartHandler}/>
      </CardTwo>
    </section>
  );
};

export default Tennis;
