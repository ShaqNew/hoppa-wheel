import { useContext } from "react";
import  ChoicesContext  from "@/app/Context/state";
import "./descriptionsList.scss"
import Description from "./Desciption/Description";

const DescriptionsList = () => {
    const { choicesState, setChoicesState } = useContext(ChoicesContext);

    return (
        <div className="detailsList">
            {choicesState.map((choice, index) => (
                <Description key={index} choice={choice}/>
            ))}
        </div>
    )
}

export default DescriptionsList