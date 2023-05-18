import "./description.scss";

const Description = (props: any) => {
  const { choice } = props;

  const isSelected = choice.position === 1;

  return (
    <div className={`description ${isSelected ? "selected" : ""}`} data-testid="description-div">
      {choice.description}
      <div
        className={`description__popup ${isSelected ? "selected-popup" : ""}`}
        data-testid="description-popup-div"
      >
        <p>{choice.popup[0]}</p>

        <p>{choice.popup[1]}</p>
      </div>
    </div>
  );
};

export default Description;
