import React from "react";
import * as Selected from "./style/MenuSelect.style";

const MenuSelect = ({ options, modal = null, onChange = null }) => {
  if (!options) {
    return null;
  }

  return (
    <Selected.Selection modal={modal} onChang={onChange}>
      {options.map((op, i) => {
        return (
          <option value={op} key={op + i}>
            {op}
          </option>
        );
      })}
    </Selected.Selection>
  );
};

export default MenuSelect;
