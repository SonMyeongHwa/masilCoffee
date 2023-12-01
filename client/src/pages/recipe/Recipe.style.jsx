import styled from "styled-components";
import { Link } from "react-router-dom";

//배경
export const Background = styled.div`
  background: #d9d9d9;
  min-height: 100vh;

  @media all and (min-width: 1023px) {
    padding: 50px 0;
  }
`;

//배경위에 흰색 배경
export const ContainerWrap = styled.div`
  background: white;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 30px;
  border-radius: 0px;
  overflow: hidden; /* 자식이 부모의 border-radius를 따라가도록 함 */

  @media all and (min-width: 1023px) {
    width: 70vw;
    border-radius: 30px 0px 30px 0px;
  }
`;

//전체적인 내용 감싸는 div
export const Container = styled.div`
  width: 50vw;
  margin: 0 auto;

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 80vw;
  }

  @media all and (max-width: 767px) {
    width: 95vw;
  }
`;

//한 줄 감싸는 div
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

//제목
export const Title = styled.h1`
  text-align: center;
  margin: 0;
  flex-grow: 1;
  font-size: 30px;

  @media all and (max-width: 767px) {
    font-size: 25px;
  }
`;

//버튼
export const Button = styled.button`
  background: #8e0e28;
  color: white;
  padding: 8px 13px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;
`;

//input box
export const SearchInput = styled.input`
  width: 100%;
  padding: 0px 15px;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;

//카테고리 감싸는 div
export const CategoryWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

//카테고리 버튼
export const CategoryBtn = styled.button`
  padding: 1.5% 6%;
  border: 1px solid #d9d9d9;
  border-radius: 30px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s, color 0.2s ease, border 0.2s;

  background-color: ${(props) => props.className === "active" ? "#8e0e28" : "#f5f5f5"};
  color: ${(props) => props.className === "active" ? "white" : "black"};

  &:hover {
    background: #8e0e28;
    color: white;
    border: none;
  }

  @media all and (max-width: 767px) {
    padding: 1.5% 5%;
    font-size: 11px;
  }
`;

//게시글 감싸는 div
export const PostWrap = styled.div`
  border-top: 1px solid #d9d9d9;
  padding: 30px 0;

  &:hover {
    background: #F5F5F5;
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const ShowMore = styled.button`
  border: none;
  width: inherit;
  height: 50px;
  text-align: center;
  background: #878585;
  cursor: pointer;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;

  &:hover {
    background: #4f4f4f;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;