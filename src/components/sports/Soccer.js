import React, { useState } from "react";
import CardTwo from "../UI/CardTwo";
import classes from "./Sports.module.css";
import soccerLayoutImage from "../../assets/football-layout.jpg";
import FootballCourts from "./AvailableCourts/FootballCourts";
import Cart from "../Cart/Cart";

const Soccer = () => {
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
        <img src={soccerLayoutImage} alt="Tennis courts layout" />
        <FootballCourts onShowCart={showCartHandler} />
      </CardTwo>
    </section>
  );
};

export default Soccer;
