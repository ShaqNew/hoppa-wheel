"use client"; // This is a client component
// src/context/state.js
import { StaticImageData } from "next/image";
import { createContext, SetStateAction, Dispatch } from "react";
import { choicesList } from "../utils/choices";

// const AppContext = createContext();

interface IChoice {
  id: number;
  icon: StaticImageData;
  name: string;
  position: number;
  description: string;
  popup: string[];
}

interface IChoiceContext {
  choicesState: IChoice[];
  setChoicesState: Dispatch<SetStateAction<IChoice[]>>;
}

export const ChoicesContext = createContext<IChoiceContext>({
  choicesState: choicesList,
  setChoicesState: () => {},
});

export default ChoicesContext;
