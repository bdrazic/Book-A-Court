import React, { useState } from "react";
import classes from "./TennisCourts.module.css";
import Button from "../../UI/Button/Button";

const TENNIS_COURTS = [
  {
    id: "t1",
    name: "Teren 1",
    description: "Pješčani teniski teren",
    price: 100.0,
  },
  {
    id: "t2",
    name: "Teren 2",
    description: "Pješčani teniski teren",
    price: 100.0,
  },
  {
    id: "t3",
    name: "Teren 3",
    description: "Gumeni teniski teren",
    price: 120.0,
  },
  {
    id: "t4",
    name: "Teren 4",
    description: "Betonski teniski teren",
    price: 80.0,
  },
];


const TennisCourts = (props) => {
  const [buttonIsShowing, setButtonIsShowingHandler] = useState(false);
  const showButtonHandler = (event) => {
    setButtonIsShowingHandler(true);
  };


  return (
    <form>
      <ul className={classes.tennisCourts}>
        {TENNIS_COURTS.map((tennisCourtsItems) => (
          <li key={tennisCourtsItems.id} className={classes.tennisCourts}>
            <div>
              <h2 className={classes.title}>{tennisCourtsItems.name}</h2>
              <fieldset className={classes.fieldset}>
                <input
                  onClick={showButtonHandler}
                  className={classes.input}
                  type="radio"
                  name="odabir"
                  id={tennisCourtsItems.id}
                  value={tennisCourtsItems.name}
                />{" "}
                <label for={tennisCourtsItems.id}>Rezerviraj</label>
              </fieldset>
            </div>
            <div>{tennisCourtsItems.description}</div>
            <div>{tennisCourtsItems.price} kn/h</div>
          </li>
        ))}
      </ul>
      {buttonIsShowing && <Button onClick={props.onShowCart}>Potvrdi</Button>}
    </form>
  );
};

export default TennisCourts;
