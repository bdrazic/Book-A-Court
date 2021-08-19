import React, { useState } from "react";
import classes from "./BasketballCourts.module.css";
import Button from "../../UI/Button/Button";

const BASKETBALL_COURTS = [
  {
    id: "b1",
    name: "Teren 1",
    description: "Košarkaški teren u dvorani",
    price: 200.0,
  },
];

const BasketballCourts = (props) => {
  const [buttonIsShowing, setButtonIsShowingHandler] = useState(false);
  const showButtonHandler = (event) => {
    setButtonIsShowingHandler(true);
  };

  return (
    <form>
      <ul className={classes.basketballCourts}>
        {BASKETBALL_COURTS.map((basketballCourtsItems) => (
          <li
            key={basketballCourtsItems.id}
            className={classes.basketballCourts}
          >
            <div>
              <h2 className={classes.title}>{basketballCourtsItems.name}</h2>
              <fieldset className={classes.fieldset}>
                <input
                  onClick={showButtonHandler}
                  className={classes.input}
                  type="radio"
                  name="odabir"
                  id={basketballCourtsItems.id}
                  value={basketballCourtsItems.name}
                />{" "}
                <label for={basketballCourtsItems.id}>Rezerviraj</label>
              </fieldset>
            </div>
            <div>{basketballCourtsItems.description}</div>
            <div>{basketballCourtsItems.price} kn/h</div>
          </li>
        ))}
      </ul>
      {buttonIsShowing && <Button onClick={props.onShowCart}>Potvrdi</Button>}
    </form>
  );
};

export default BasketballCourts;
