import React from "react";
import * as Selected from "./style/MenuSelect.style";

const MenuSelect = ({ options, modal = null, onChange = null, defaultOption = null }) => {
  if (!options) {
    return null;
  }

  const defaultValue = defaultOption !== null ? defaultOption : null;

  const handleSelectChange = (e) => {
    const selected = e;
    if (onChange) {
      onChange(selected);
    }
  };

  return (
    <Selected.Selection modal={modal} onChange={handleSelectChange} value={defaultValue}>
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
