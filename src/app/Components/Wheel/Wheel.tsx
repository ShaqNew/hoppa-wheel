import { useContext, useState } from "react";
import  ChoicesContext  from "@/app/Context/state";
import Choice from "./Choice/Choice";
import "./wheel.scss";

const Wheel = () => {
  const { choicesState, setChoicesState } = useContext(ChoicesContext);

  const swapChoices = (choice: any) => {
    // If the selected object is already in the first postion don't do anything
    if (choice.position > 1) {
        // Reassign each choice its new position
        setChoicesState((prevObjects) => {
        const newObjects = [...prevObjects];

        // Create a new reordered temp array with the choicen object at the front
        const index = choicesState.indexOf(choice);
        let reorderedArr = [...choicesState.slice(index), ...choicesState.slice(0, index)]

        // assign new position values sequantially according to the reordered array
        for(let i = 0; i<reorderedArr.length; i++){
            const newObjectsIndex = newObjects.indexOf(reorderedArr[i])
            newObjects[newObjectsIndex].position = i+1
        }

        return newObjects;
      });
    }
  };
  

  return (
    <div className="wheel" data-testid="wheel-div">
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
