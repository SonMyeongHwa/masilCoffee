import styled from "styled-components";

export const FileButtonWrap = styled.div`
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 5px;

  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const FileNameWrap = styled.span`
  margin-left: 10px;
  color: gray;
`;

export const TextArea = styled.textarea`
  font-family: "Noto Sans", sans-serif;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 0.5;
  resize: none;

  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  font-size: 1rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 150px;
  margin-right: ${(props) => (props.imagescount < 4 ? "5%" : "0")};
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.imagescount < 4 ? "flex-start" : "space-between"};
  margin: 15px 0;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #d9d9d9;
  color: black;
  border: none;
  cursor: pointer;
  padding: 5px;
`;

export const ButtonWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

//input 스타일
export const InputStyled = styled.input`
  height: 40px;
  font-size: 1rem;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

//키워드 감싸는 div
export const KeywordWrap = styled.div`
  display: flex;
  margin: 10px 0;
  flex-wrap: wrap;
`;

//키워드 스타일
export const KeywordRound = styled.span`
  box-sizing: border-box;
  padding: 1% 2%;
  border-radius: 30px;
  margin: 0 5px 5px 0;
  display: flex;
  align-items: center;
`;