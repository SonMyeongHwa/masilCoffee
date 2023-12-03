import React, { useState } from "react";
import * as Modal from "./style/Modal.style";
import MenuSelect from "./MenuSelect";
import { TiDelete } from "react-icons/ti";
import DynamicInput from "./OptionAddInputs";

import axios from "axios";

const MenuModal = ({ title, closeModal }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputComponents, setInputComponents] = useState([]);

  const optionName = ["얼음", "드리즐", "휘핑", "우유", "직접입력"];

  const handleSelectChange = (e) => {
    const selected = e.target.value;
    if (selected === "직접입력") {
      setSelectedOption("");
      setShowInput(true);
    } else {
      setSelectedOption(selected);
      setShowInput(false);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddInput = () => {
    console.log(inputComponents);
    const newId = Math.random().toString(36).substring(7);
    const newInput = {
      id: newId,
      content: <DynamicInput key={newId} handleRemoveInput={handleRemoveInput} id={newId} />,
    };
    setInputComponents((prevInputs) => [...prevInputs, newInput]);
  };

  const handleRemoveInput = (id) => {
    setInputComponents((prevInputs) => prevInputs.filter((input) => input.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    axios
      .post("http://localhost:5000/api/v1/products", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Modal.ModalBackground>
      <Modal.ModalBox>
        <Modal.Title>
          <p>{title}</p>
          <TiDelete className="cancelIcon" onClick={closeModal} />
        </Modal.Title>
        <Modal.OptionFormBox>
          <Modal.Form onSubmit={handleSubmit}>
            <Modal.OptionP>
              <Modal.Label>옵션명 :</Modal.Label>
              <MenuSelect options={optionName} modal name="optionName" value={selectedOption} onChange={handleSelectChange} />
              {showInput && <Modal.Input type="text" name={inputValue} value={inputValue} placeholder="예) 샷추가" onChange={handleInputChange} />}
            </Modal.OptionP>
            <Modal.DetailInputBox>
              <Modal.OptionP>
                <Modal.Label>세부항목 :</Modal.Label>
                <Modal.Input type="text" name="name" placeholder="예) 1샷" required />
              </Modal.OptionP>
              <Modal.OptionP>
                <Modal.Label>가격 :</Modal.Label>
                <Modal.Input type="number" name="price" placeholder="0" required />
              </Modal.OptionP>
              <Modal.PlusIcon onClick={handleAddInput} />
            </Modal.DetailInputBox>
            {inputComponents.map((input, index) => (
              <div key={input.id}>{input.content}</div>
            ))}
            <Modal.OptionSubmit type="submit" onClick={handleSubmit}>
              옵션 추가하기
            </Modal.OptionSubmit>
          </Modal.Form>
        </Modal.OptionFormBox>
      </Modal.ModalBox>
    </Modal.ModalBackground>
  );
};

export default MenuModal;
