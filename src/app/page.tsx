"use client"; // This is a client component
import Image from "next/image";
import { useState } from "react";
import ChoicesContext from "./Context/state";
import Wheel from "./Components/Wheel/Wheel";
import DescriptionsList from "./Components/Descriptions/DescriptionsList";
import CameraVector from "./utils/CameraVector.png"
import CrosshairsVector from "./utils/CrosshairsVector.png"
import DropVector from "./utils/DropVector.png"
import SpeakerVector from "./utils/SpeakerVector.png"

const Home = () => {
  const [language, setLanguage] = useState("en");
  // const value = { language, setLanguage };

  const [choicesState, setChoicesState] = useState([
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
  ]);
  const value = { choicesState, setChoicesState };

  return (
    <ChoicesContext.Provider value={value}>
      <main className="App">
        <div className="App__wheel">
          <Wheel />
        </div>
        <div className="App__details">
          <DescriptionsList />
        </div>
      </main>
    </ChoicesContext.Provider>
  );
};

export default Home;
