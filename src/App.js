import BookACourtSummary from "./components/Layout/BookACourtSummary";
import Header from "./components/Layout/Header";
import AvailableSports from "./components/sports/AvailableSports";
import React, { useState } from "react";
import { CheckoutContext } from "./context/CheckoutContext";
import Login from "./components/Login/Login";
import Weather from "./components/Weather/Weather";

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
        <Header onShowLogin={showLoginHandler} />
        {isLoginShowing && <Login onCloseLogin={hideLoginHandler} />}

        <BookACourtSummary />
        <Weather />
        <AvailableSports />
    </CheckoutContext.Provider>
  );
}

export default App;
