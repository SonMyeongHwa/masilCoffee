import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Modal from "./style/Modal.style";
import MenuSelect from "./MenuSelect";
import { TiDelete } from "react-icons/ti";
import { actionGetAllProducts, actionCreateProduct, actionUpdateProduct } from "../../../../redux/action/productAction";
import { createProduct, updateProduct } from "../../../../api/product";

const MenuModal = ({ title, closeModal, modifyProduct }) => {
  const dispatch = useDispatch();

  const sizeOptions = ["선택없음", "Tall", "Large"];
  const tempOptions = ["선택없음", "Ice", "Hot"];
  const categoryOptions = ["선택없음", "에스프레소", "논커피", "스무디", "티", "에이드"];

  const formData = new FormData();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    size: "",
    temp: "",
    kcal: "",
    info: "",
    file: "",
    recipe: "",
  });

  formData.append("name", product.name);
  formData.append("price", product.price);
  formData.append("category", product.category);
  formData.append("size", product.size);
  formData.append("temp", product.temp);
  formData.append("kcal", product.kcal);
  formData.append("info", product.info);
  formData.append("file", product.file);
  formData.append("recipe", product.recipe);

  useEffect(() => {
    if (modifyProduct) {
      setProduct({ ...modifyProduct });
    } else {
      setProduct({
        name: "",
        price: "",
        category: "",
        size: "",
        temp: "",
        kcal: "",
        info: "",
        file: "",
        recipe: "",
      });
    }
  }, [modifyProduct]);

  const handleChange = (key, e) => {
    if (key === "file") {
      const updatedProductFile = { ...product, [key]: e.target.files[0] };
      setProduct(updatedProductFile);
    } else {
      const updatedProduct = { ...product, [key]: e.target.value };
      setProduct(updatedProduct);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fn = async () => {
      if (modifyProduct) {
        try {
          const updatedProduct = await updateProduct(modifyProduct._id, formData);
          console.log("modifyProduct", modifyProduct, updatedProduct);
          dispatch(actionUpdateProduct(updatedProduct));
        } catch (error) {
          console.error("Failed to update product", error);
        }
      } else {
        try {
          const newProduct = await createProduct(formData);
          dispatch(actionCreateProduct(newProduct));
          dispatch(actionGetAllProducts());
        } catch (error) {
          console.error("Failed to create product", error);
        }
      }
    };
    fn();
    closeModal();
  };

  return (
    <Modal.ModalBackground>
      <Modal.ModalBox>
        <Modal.Title>
          <p>{title}</p>
          <TiDelete className="cancelIcon" onClick={closeModal} />
        </Modal.Title>
        <Modal.Form onSubmit={handleSubmit}>
          <Modal.P>
            <Modal.Label>이름 :</Modal.Label>
            <Modal.Input type="text" name="name" defaultValue={product.name || ""} onChange={(e) => handleChange("name", e)} required />
          </Modal.P>
          <Modal.P>
            <Modal.Label>가격 :</Modal.Label>
            <Modal.InputContainer>
              <Modal.Input type="number" name="price" defaultValue={product.price || ""} onChange={(e) => handleChange("price", e)} required />
              <Modal.CurrencyText>원</Modal.CurrencyText>
            </Modal.InputContainer>
          </Modal.P>
          <Modal.P>
            <Modal.Label>종류 :</Modal.Label>
            <MenuSelect
              options={categoryOptions}
              modal
              name="category"
              defaultOption={product.category}
              onChange={(selected) => handleChange("category", selected)}
            />
          </Modal.P>
          <Modal.P>
            <Modal.Label>사이즈 :</Modal.Label>
            <MenuSelect
              options={sizeOptions}
              modal
              name="size"
              defaultOption={product.size}
              onChange={(selected) => handleChange("size", selected)}
            />
          </Modal.P>
          <Modal.P>
            <Modal.Label>ICE/HOT :</Modal.Label>
            <MenuSelect
              options={tempOptions}
              modal
              name="temp"
              defaultOption={product.temp}
              onChange={(selected) => handleChange("temp", selected)}
            />
          </Modal.P>
          <Modal.P>
            <Modal.Label>1회 제공량 :</Modal.Label>
            <Modal.InputContainer>
              <Modal.Input type="number" name="kcal" defaultValue={product.kcal || ""} onChange={(e) => handleChange("kcal", e)} required />
              <Modal.CurrencyText>kcal</Modal.CurrencyText>
            </Modal.InputContainer>
          </Modal.P>
          <Modal.TextareaBox>
            <Modal.Label>상세 설명 :</Modal.Label>
            <textarea name="info" cols="30" rows="3" defaultValue={product.info || ""} onChange={(e) => handleChange("info", e)} required />
          </Modal.TextareaBox>
          <Modal.Label>사진 추가 :</Modal.Label>
          <Modal.ImgBox>
            <Modal.ImgLabel htmlFor="file">파일 선택</Modal.ImgLabel>
            <input type="file" id="file" name="file" defaultValue={product.file || ""} onChange={(e) => handleChange("file", e)} required />
            <p>{product.file && product.file.name}</p>
          </Modal.ImgBox>
          <Modal.TextareaBox large>
            <Modal.Label>꿀조합 추천 정보 :</Modal.Label>
            <textarea name="recipe" cols="30" defaultValue={product.recipe || ""} onChange={(e) => handleChange("recipe", e)} rows="3" required />
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
