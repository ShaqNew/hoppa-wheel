import './description.scss'

const Description = (props:any) => {
    const {choice} = props

    const isSelected = choice.position === 1;

    return (
        <div className={`description`}>
            {choice.description}
            <div className={`description__popup ${isSelected ? "selected" : ""}`}>
                <p>{choice.popup[0]}</p>
                
                <p>{choice.popup[1]}</p>
            </div>
        </div>
    )
}

export default Description;