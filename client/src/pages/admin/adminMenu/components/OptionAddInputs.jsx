import React, { useState } from "react";
import * as Modal from "./style/Modal.style";

const DynamicInput = ({ handleRemoveInput, id, initialValue = { name: null, price: null }, pre = false, onInputChange }) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = { ...inputValue, [name]: value };
    setInputValue(updatedValue);
  };
  onInputChange(id, inputValue);

  return (
    <Modal.AddInput>
      <Modal.Input
        type="text"
        name="name"
        placeholder="예) 1샷"
        defaultValue={initialValue.name}
        value={inputValue.name}
        onChange={handleChange}
        disabled={pre}
        required
      />
      <Modal.Input
        type="number"
        name="price"
        placeholder="예) 500"
        defaultValue={initialValue.price}
        value={inputValue.price}
        onChange={handleChange}
        disabled={pre}
        required
      />
      <Modal.MinusIcon onClick={() => handleRemoveInput(id)} />
    </Modal.AddInput>
  );
};

export default DynamicInput;
