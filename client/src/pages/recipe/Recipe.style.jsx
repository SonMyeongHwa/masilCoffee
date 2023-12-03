import styled from "styled-components";

//배경
export const Background = styled.div`
  background: #8e0e28;
  min-height: 100vh;
`;

//배경위에 흰색 배경
export const ContainerWrap = styled.div`
  background: white;
  width: 70vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 30px 0;

  @media all and (max-width: 1023px) {
    width: 100vw;
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
  margin-right: 10px;
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
  transition: background 0.3s, color 0.3s ease, border 0.3s;

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

//게시글 닉네임
export const PostNickname = styled.span`
  font-weight: bold;
`;

//게시글 날짜
export const PostDate = styled.span`
  font-size: 0.8rem;
  margin-left: 15px;
`;

//게시글
export const PostPre = styled.pre`
  font-size: 1rem;
  white-space: pre-wrap;
  word-break: break-all;
  margin: 0.5rem 0;
`;

//댓글 감싸는 div
export const CommentWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

//댓글 갯수
export const CommentNum = styled.span`
  margin-left: 5px;
`;
