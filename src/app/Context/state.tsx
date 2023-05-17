// src/context/state.js
import { StaticImageData } from "next/image";
import { createContext, SetStateAction, Dispatch } from "react";
import CameraVector from "../utils/CameraVector.png"
import CrosshairsVector from "../utils/CrosshairsVector.png"
import DropVector from "../utils/DropVector.png"
import SpeakerVector from "../utils/SpeakerVector.png"

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
  choicesState: [
    {
      id: 1,
      icon: CameraVector,
      name: "High Resolution Camera",
      position: 1,
      description: "capture stunning, details, photos and videos",
      popup: ["Preserve memories", "create lasting impressions"]
    },
    {
      id: 2,
      icon: SpeakerVector,
      name: "Noise Cancelling Technology",
      position: 2,
      description: "immerse yourself in pure, unintrrupted sound",
      popup: ["Block out background noise", "Enhance your productivity"]
    },
    {
      id: 3,
      icon: DropVector,
      name: "Waterproof Design",
      position: 3,
      description: "use the device worry-free in various environments",
      popup: ["Withstand water exposure", "Providing peace of mind"]
    },
    {
      id: 4,
      icon: CrosshairsVector,
      name: "GPS Navigation system",
      position: 4,
      description: "easily find your way to any destination",
      popup: ["Seamlessly navigate", "Save time reduce stress"]
    },
  ],
  setChoicesState: () => {},
});

export default ChoicesContext;

// export function AppWrapper({ children }) {
//   let sharedState = [
//     { id: 1, name: 'Object 1' , position: 1 },
//     { id: 2, name: 'Object 2' , position: 2 },
//     { id: 3, name: 'Object 3' , position: 3 },
//     { id: 4, name: 'Object 4' , position: 4 }
//   ]

//   return (
//     <AppContext.Provider value={sharedState}>
//       {children}
//     </AppContext.Provider>
//   );
// }

// export function useAppContext() {
//   return useContext(AppContext);
// }
