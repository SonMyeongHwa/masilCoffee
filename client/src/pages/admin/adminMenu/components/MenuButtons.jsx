import React from "react";
import * as Buttons from "./style/MenuButton.style";

const MenuButtons = ({ name, title, isClicked }) => {
  return (
    <Buttons.Box className={name} onClick={isClicked}>
      {title}
    </Buttons.Box>
  );
};

export default MenuButtons;
