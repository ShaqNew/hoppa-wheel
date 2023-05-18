import './choice.scss'

const Choice = (props:any) => {
    const {choice, swapChoices} = props
    const {name, position, icon} = choice
    let placement = null
    let textPlacement = null

    switch(position){
        case 1:
            placement = "first-choice"
        break;
        case 2:
            placement = "second-choice"
        break;
        case 3:
            placement = "third-choice"
        break;
        case 4:
            placement = "fourth-choice"
        break;
    }

    switch(position){
        case 4:
            textPlacement = "fourth-choice__text"
            break;
        default:
            textPlacement = null
    }


    
    return (
            <button className={`choice ${placement}`} data-testid="choice-button" onClick={()=>{swapChoices(choice)}}>
            {/* I had trouble adding the icons properly */}
                {/* <img src={icon} alt={name}/> */}
                {/* <Image src={icon} alt={name}/> */}
                <p className={`choice__text ${textPlacement}`} data-testid="choice-button-text">{name}</p>
            </button>
    )
}

export default Choice;