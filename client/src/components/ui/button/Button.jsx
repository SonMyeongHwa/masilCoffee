import { StyledButton } from "../../ui/button/Button.style";

const Button = ({ text, type, onClick }) => {
  const btnType = ["grey", "red", "white"].includes(type) ? type : "grey";
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
