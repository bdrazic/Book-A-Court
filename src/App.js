import BookACourtSummary from "./components/Layout/BookACourtSummary";
import Header from "./components/Layout/Header";
import AvailableSports from "./components/sports/AvailableSports";
import React, { useState } from "react";
import { CheckoutContext } from "./context/CheckoutContext";
import Login from "./components/Login/Login";


function App() {
  const [isLoginShowing, setLoginIsShowing] = useState(false);

  const showLoginHandler = () => {
    setLoginIsShowing(true);
  };

  const hideLoginHandler = () => {
    setLoginIsShowing(false);
  };

  return (
    <CheckoutContext.Provider
      value={document.getElementById("forma1", "forma2", "forma3")}
    >
      <div>
        <Header onShowLogin={showLoginHandler}/>
        {isLoginShowing && <Login onCloseLogin={hideLoginHandler}/>}
        <BookACourtSummary />
        <AvailableSports />
      </div>
    </CheckoutContext.Provider>
  );
}

export default App;
