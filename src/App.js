import BookACourtSummary from "./components/Layout/BookACourtSummary";
import Header from "./components/Layout/Header";
import AvailableSports from "./components/sports/AvailableSports";
import React from "react";
import { CheckoutContext } from "./context/CheckoutContext";

function App() {
  return (
    <CheckoutContext.Provider
      value={document.getElementById("forma1", "forma2", "forma3")}
    >
      <div>
        <Header />
        <BookACourtSummary />
        <AvailableSports />
      </div>
    </CheckoutContext.Provider>
  );
}

export default App;
