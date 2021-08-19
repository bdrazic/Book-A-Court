import React, { useState, Fragment } from "react";
import Card from "../UI/Card";
import classes from "./AvailableSports.module.css";
import Tennis from "./Tennis";
import Soccer from "./Soccer";
import Basketball from "./Basketball";

const AvailableSports = () => {
  const [tennisShowing, setTennisShowing] = useState(false);
  const showTennisHandler = (event) => {
    setSoccerShowing(false);
    setBasketballShowing(false);
    setTennisShowing(true);
  };

  const [soccerShowing, setSoccerShowing] = useState(false);
  const showSoccerHandler = (event) => {
    event.preventDefault();
    setTennisShowing(false);
    setBasketballShowing(false);
    setSoccerShowing(true);
  };

  const [basketballShowing, setBasketballShowing] = useState(false);
  const showBasketballHandler = (event) => {
    event.preventDefault();
    setTennisShowing(false);
    setSoccerShowing(false);
    setBasketballShowing(true);
  }

  return (
    <Fragment >
    <section className={classes.sports}>
      <Card>
        <h1>IGRA MI SE</h1>
        <ul onClick={showBasketballHandler}>KOŠARKA</ul>
        <ul onClick={showTennisHandler}>TENIS</ul>
        <ul onClick={showSoccerHandler}>NOGOMET</ul>
      </Card>
      </section>
      {tennisShowing && <Tennis />}
      {soccerShowing && <Soccer />}
      {basketballShowing && <Basketball />}
    
    </Fragment>
  );
};

export default AvailableSports;
