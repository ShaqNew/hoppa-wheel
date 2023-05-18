"use client"; // This is a client component
import { useState } from "react";
import ChoicesContext from "./Context/state";
import Wheel from "./Components/Wheel/Wheel";
import DescriptionsList from "./Components/Descriptions/DescriptionsList";
import { choicesList } from "./utils/choices";

const Home = () => {
  const [choicesState, setChoicesState] = useState(choicesList);
  const value = { choicesState, setChoicesState };

  return (
    <ChoicesContext.Provider value={value}>
      <main className="App">
        <div className="App__wheel" data-testid="app-wheel-div">
          <Wheel />
        </div>
        <div className="App__description" data-testid="app-description-div">
          <DescriptionsList />
        </div>
      </main>
    </ChoicesContext.Provider>
  );
};

export default Home;
