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
        // <div className={`${placement}`} onClick={()=>{swapChoices(choice)}}>
            <button className={`choice ${placement}`} onClick={()=>{swapChoices(choice)}}>
                {/* <img src={icon} alt={name}/> */}
                {/* <Image src={icon} alt={name}/> */}
                <p className={`choice__text ${textPlacement}`}>{name}</p>
            </button>
        // </div>
    )
}

export default Choice;