import React, { useState } from "react";
import classes from "./FootballCourts.module.css";
import Button from "../../UI/Button/Button";

const FOOTBALL_COURTS = [
  {
    id: "n1",
    name: "Teren 1",
    description: "Nogometni teren",
    price: 250.0,
  },
];

const FootballCourts = (props) => {
  const [buttonIsShowing, setButtonIsShowingHandler] = useState(false);
  const showButtonHandler = (event) => {
    setButtonIsShowingHandler(true);
  };

  return (
    <form id="forma3">
      <ul className={classes.footballCourts}>
        {FOOTBALL_COURTS.map((footballCourtsItems) => (
          <li key={footballCourtsItems.id} className={classes.footballCourts}>
            <div>
              <h2 className={classes.title} style={{fontFamily: "Staatliches, cursive"}}>{footballCourtsItems.name}</h2>
              <fieldset className={classes.fieldset}>
                <input
                  onClick={showButtonHandler}
                  className={classes.input}
                  type="radio"
                  name="odabir-nogomet"
                  id={footballCourtsItems.id}
                  value={footballCourtsItems.name}
                  price={footballCourtsItems.price}
                />{" "}
                <label for={footballCourtsItems.id}>Rezerviraj</label>
              </fieldset>
            </div>
            <div style={{fontWeight: "bold"}}>{footballCourtsItems.description}</div>
            <div>{footballCourtsItems.price} kn/h</div>
          </li>
        ))}
      </ul>
      {buttonIsShowing && <Button onClick={props.onShowCart}>Potvrdi</Button>}
    </form>
  );
};

export default FootballCourts;
