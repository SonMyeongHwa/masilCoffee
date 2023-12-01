import React, { useState, useEffect } from "react";
import { CategoryWrap, CategoryBtn } from "../Recipe.style";
import {
  actionGetFilter,
  actionRemoveFilter,
  actionSearchBoards,
} from "../../../redux/action/boardAction";

const categorysArr = [
  {
    id: "filter-espresso",
    name: "에스프레소",
  },
  {
    id: "filter-noncoffee",
    name: "논커피",
  },
  {
    id: "filter-smoothie",
    name: "스무디",
  },
  {
    id: "filter-tea",
    name: "티",
  },
  {
    id: "filter-ade",
    name: "에이드",
  },
];

const CategoryButton = ({ query, category, setCategory, defaultValue, setCurrentPage}) => {
  const [activeStates, setActiveStates] = useState(Array(categorysArr.length).fill(false));

  useEffect(() => {
    if (query === "edit") {
      const newActiveStates = [...activeStates];

      if (defaultValue) { //게시글 수정
        const defaultIndex = categorysArr.findIndex((category) => category.name === defaultValue);
        
        newActiveStates[defaultIndex] = true;
      } else { //게시글 작성
        newActiveStates[0] = true; //첫 번째 카테고리를 활성화
        setCategory(categorysArr[0].name);
      }
      setActiveStates(newActiveStates);
    }
  }, []);
 
  const handleClick = (index, category) => {
    const newActiveStates = [...activeStates];
    
    if (query === "edit") {
      //게시글 작성
      newActiveStates.fill(false);
      newActiveStates[index] = !newActiveStates[index];
      setActiveStates(newActiveStates);
      setCategory(category); //formData에 넘겨줄 값
    } else {
      //게시글 리스트
      if (newActiveStates[index]) { //카테고리 선택된걸 해제
        newActiveStates.fill(false);
        setCategory(""); //전체 게시글
      } else { //카테고리 선택하기
        newActiveStates.fill(false);
        newActiveStates[index] = !newActiveStates[index];
        setCategory(category);
      }
      setActiveStates(newActiveStates);
      setCurrentPage((current) => 1); //현재 페이지 1로 초기화
    }
  };

  return (
    <CategoryWrap>
      {categorysArr.map((category, index) => (
        <CategoryBtn
          key={category.id}
          type="button"
          onClick={() => handleClick(index, category.name)}
          className={activeStates[index] ? "active" : ""}
        >
          {category.name}
        </CategoryBtn>
      ))}
    </CategoryWrap>
  );
};

export default CategoryButton;
