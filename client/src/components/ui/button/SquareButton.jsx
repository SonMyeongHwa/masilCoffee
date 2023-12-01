import { StyledButton } from "./SquareButton.style";

const Button = ({ text, type, onClick }) => {
  const btnType = ["grey", "red"].includes(type) ? type : "grey";
  return (
    <StyledButton
      className={["Button", `Button_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "grey",
};

export default Button;
