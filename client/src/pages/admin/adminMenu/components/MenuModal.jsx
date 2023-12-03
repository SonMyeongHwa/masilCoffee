import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import * as Modal from "./style/Modal.style";
import MenuSelect from "./MenuSelect";
import { TiDelete } from "react-icons/ti";
import { actionCreateProduct } from "../../../../redux/action/productAction";
import { createProduct } from "../../../../api/product";

const MenuModal = ({ title, closeModal }) => {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const size = ["Tall", "Large"];
  const temp = ["Ice", "Hot"];
  const category = ["에스프레소", "논커피", "스무디", "티", "에이드"];

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const selectedValue = formRef.current.size.value;
    formData.append("image", selectedFile);
    formData.append("size", selectedValue);

    for (const pair of formData.entries()) {
      console.log("formdata", pair[0] + ", " + pair[1]);
    }

    const fn = async () => {
      try {
        const newProducts = await createProduct(formData);
        console.log(newProducts);
        dispatch(actionCreateProduct(newProducts));
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
        <Modal.Form ref={formRef} onSubmit={handleSubmit}>
          <Modal.P>
            <Modal.Label>이름 :</Modal.Label>
            <Modal.Input type="text" name="name" required />
          </Modal.P>
          <Modal.P>
            <Modal.Label>가격 :</Modal.Label>
            <Modal.InputContainer>
              <Modal.Input type="number" name="price" required />
              <Modal.CurrencyText>원</Modal.CurrencyText>
            </Modal.InputContainer>
          </Modal.P>
          <Modal.P>
            <Modal.Label>종류 :</Modal.Label>
            <MenuSelect options={category} modal name="category" />
          </Modal.P>
          <Modal.P>
            <Modal.Label>사이즈 :</Modal.Label>
            <MenuSelect options={size} modal name="size" />
          </Modal.P>
          <Modal.P>
            <Modal.Label>ICE/HOT :</Modal.Label>
            <MenuSelect options={temp} modal name="temp" />
          </Modal.P>
          <Modal.P>
            <Modal.Label>1회 제공량 :</Modal.Label>
            <Modal.InputContainer>
              <Modal.Input type="number" name="kcal" required />
              <Modal.CurrencyText>kcal</Modal.CurrencyText>
            </Modal.InputContainer>
          </Modal.P>
          <Modal.TextareaBox>
            <Modal.Label>상세 설명 :</Modal.Label>
            <textarea name="info" cols="30" rows="3" required />
          </Modal.TextareaBox>
          <Modal.Label>사진 추가 :</Modal.Label>
          <Modal.ImgBox>
            <Modal.ImgLabel htmlFor="file">파일 선택</Modal.ImgLabel>
            <input type="file" id="file" onChange={handleFileChange} name="image" required />
            <p>{selectedFile && selectedFile.name}</p>
          </Modal.ImgBox>
          <Modal.TextareaBox large>
            <Modal.Label>꿀조합 추천 정보 :</Modal.Label>
            <textarea name="bestCombo" cols="30" rows="3" required />
          </Modal.TextareaBox>

          <Modal.Submit type="submit" onClick={handleSubmit}>
            제출하기
          </Modal.Submit>
        </Modal.Form>
      </Modal.ModalBox>
    </Modal.ModalBackground>
  );
};

export default MenuModal;
