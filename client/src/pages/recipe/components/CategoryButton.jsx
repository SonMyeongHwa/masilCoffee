import React from "react";
import {CategoryWrap, CategoryBtn} from "../Recipe.style";

const category = ["에스프레소", "논커피", "스무디", "티", "에이드"];

const CategoryButton = () => {
  return (
    <CategoryWrap>
      {category.map((name, idx) => (
        <CategoryBtn key={idx}>{name}</CategoryBtn>
      ))}
    </CategoryWrap>
  );
};

export default CategoryButton;
