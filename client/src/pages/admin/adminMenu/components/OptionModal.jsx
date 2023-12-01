import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Modal from "./style/Modal.style";
import MenuSelect from "./MenuSelect";
import { TiDelete } from "react-icons/ti";
import DynamicInput from "./OptionAddInputs";
import { actionUpdateOption } from "../../../../redux/action/orderOptionAction";
import { updateOption } from "../../../../api/orderOption";

const OptionModal = ({ title, closeModal }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const allOptions = useSelector((state) => state.orderOption.options);
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputComponents, setInputComponents] = useState([]);
  const [inputOptionValues, setInputOptionValues] = useState([]);

  const optionName = ["선택없음", "shot", "syrup", "iceAmount", "whipping", "drizzle", "milk"];

  const options = [
    { shot: allOptions.shot },
    { syrup: allOptions.syrup },
    { iceAmount: allOptions.iceAmount },
    { whipping: allOptions.whipping },
    { drizzle: allOptions.drizzle },
    { milk: allOptions.milk },
  ];

  const handleSelectChange = (e) => {
    setInputOptionValues([]);
    setSelectedOption(e.target.value);
    const selectedOptionName = e.target.value;
    if (selectedOptionName === "선택없음") {
      return setInputComponents([]);
    }
    const select = options.filter((option) => {
      const optionName = Object.keys(option)[0];
      return optionName === selectedOptionName;
    });

    const optionName = Object.keys(select[0])[0];
    const optionValues = select[0][optionName];

    const selectedInput = optionValues.map((data, i) => {
      const newId = Math.random().toString(36).substring(7);
      const newInput = {
        id: newId,
        content: (
          <DynamicInput
            key={newId}
            handleRemoveInput={handleRemoveInput}
            id={newId}
            initialValue={{ name: data.name, price: data.price }}
            pre
            onInputChange={handleInputChange}
          />
        ),
      };
      return newInput;
    });
    setInputComponents(selectedInput);
  };

  const handleInputChange = (id, data) => {
    setInputOptionValues((prevInputOptionValues) => [...prevInputOptionValues, { id, ...data }]);
  };

  const handleAddInput = () => {
    const newId = Math.random().toString(36).substring(7);
    const newInput = {
      id: newId,
      content: <DynamicInput key={newId} handleRemoveInput={handleRemoveInput} id={newId} onInputChange={handleInputChange} />,
    };
    setInputComponents((prevInputs) => [...prevInputs, newInput]);
  };

  const handleRemoveInput = (id) => {
    setInputComponents((prevInputs) => prevInputs.filter((input) => input.id !== id));
    setInputOptionValues((prevInputs) => prevInputs.filter((input) => input.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const uniqueData = inputOptionValues.reduce((acc, current) => {
      const existingItemIndex = acc.findIndex((item) => item.id === current.id);

      if (existingItemIndex !== -1) {
        acc[existingItemIndex] = current;
      } else {
        acc.push(current);
      }
      return acc;
    }, []);

    const updateData = uniqueData.map((data) => ({
      name: data.name,
      price: data.price,
    }));
    const optionApiData = { [selectedOption]: updateData };

    const fn = async () => {
      try {
        const updatedData = await updateOption(allOptions._id, optionApiData, token);
        dispatch(actionUpdateOption(updatedData));
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
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
              <MenuSelect options={optionName} modal name="optionName" onChange={handleSelectChange} />
            </Modal.OptionP>
            <Modal.DetailInputBox>
              <Modal.OptionP>
                <Modal.Label>세부항목 :</Modal.Label>
                <Modal.Input type="text" name="name" placeholder="예) 1샷" disabled required />
              </Modal.OptionP>
              <Modal.OptionP>
                <Modal.Label>가격 :</Modal.Label>
                <Modal.Input type="number" name="price" placeholder="0" disabled required />
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
        <Modal.AllOption />
      </Modal.ModalBox>
    </Modal.ModalBackground>
  );
};

export default OptionModal;
