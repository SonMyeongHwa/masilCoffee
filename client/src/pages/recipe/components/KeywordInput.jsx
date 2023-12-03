import React, { useState, useEffect } from "react";
import * as S from "../recipeWrite/RecipeWrite.style";
import RandomColor from "../../../util/RandomColor/RandomColor";
import { CgClose } from "react-icons/cg";

const KeywordInput = ({ keywords, setKeywords, defaultValue }) => {
  const [inputData, setinputData] = useState("");

  useEffect(() => {
    if (defaultValue) { //게시글 수정
      let keywordArr = [];
      defaultValue.forEach((value) => {
        const newKeyword = {
          text: value,
          color: RandomColor(),
        };
        keywordArr.push(newKeyword);
      })
      setKeywords(keywordArr);
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputData.trim() !== "") {
      const newKeyword = {
        text: inputData,
        color: RandomColor(),
      }

      setKeywords([...keywords, newKeyword]);
      setinputData("");
    }
  };

  const removeKeyword = (index) => {
    const updateKeywords = [...keywords];
    updateKeywords.splice(index, 1);
    setKeywords(updateKeywords);
  }

  return (
    <>
      <S.InputStyled
        type="text"
        placeholder="(선택) 키워드 입력 후 엔터를 눌러주세요."
        value={inputData}
        onChange={(e) => setinputData(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <S.KeywordWrap>
        {keywords.map((keyword, index) => (
          <S.KeywordRound
            key={index}
            style={{ background: keyword.color }}
          >
            {keyword.text}
            <CgClose
              style={{ cursor: "pointer", whiteSpace: "nowrap", marginLeft: "5px" }}
              onClick={() => removeKeyword(index)}
            />
          </S.KeywordRound>
        ))}
      </S.KeywordWrap>
    </>
  );
}

export default KeywordInput;