import { useContext, useState } from "react";
import  ChoicesContext  from "@/app/Context/state";
import Choice from "./Choice/Choice";
import "./wheel.scss";

const Wheel = () => {
  const { choicesState, setChoicesState } = useContext(ChoicesContext);

  const swapChoices = (choice: any) => {
    // If the selected object is already in the first postion don't do anything
    if (choice.position > 1) {
        setChoicesState((prevObjects) => {
        const newObjects = [...prevObjects];

        // Find the the selected object
        let selectedObj = newObjects.filter(
          (obj) => obj.position === choice.position
        )[0];

        // swap the selected object's position with object in the first position
        let firstObject = newObjects.filter((obj) => obj.position === 1)[0];
        firstObject.position = selectedObj.position;
        selectedObj.position = 1;
        console.log("ARR: ", choicesState)

        return newObjects;
      });
    }
  };
  

  return (
    <div className="wheel">
      {choicesState.map((choice, index) => (
        <Choice
          key={index}
          choice={choice}
          swapChoices={swapChoices}
        />
      ))}
    </div>
  );
};

export default Wheel;
