import styled from "styled-components";

//게시글 닉네임
export const PostNickname = styled.span`
  font-weight: bold;
`;

//게시글 날짜
export const PostDate = styled.span`
  font-size: 0.8rem;
  margin-left: 15px;
`;

//수정/삭제 감싸는 span
export const EditDeleteWrap = styled.span`
  float: right;
  font-size: 0.9rem;
`;

//수정/삭제
export const EditDelete = styled.span`
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background-color: #d9d9d9;
    border-radius: 15px;
  }
`;

//게시글
export const PostPre = styled.pre`
  font-size: 1rem;
  white-space: pre-wrap;
  word-break: break-all;
`;

//댓글, 좋아요 감싸는 div
export const CommentWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

// 좋아요 div
export const LikedWrap = styled.div`
  display: flex;
  cursor: pointer;
  color: ${({ liked }) => (liked ? "red" : "black")};

  &:hover {
    color: red;
  }
`;

//댓글, 좋아요 갯수
export const CommentNum = styled.span`
  margin-left: 3px;
  width: 40px;
`;

//태그 감싸는 div
export const TagWrap = styled.div`
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
`;

//태그
export const TagBox = styled.span`
  padding: 1% 2%;
  margin: 0 5px 5px 0;
  background-color: #8e0e28;
  color: white;
  display: flex;
  align-items: center;
  border-radius: 30px;
  font-size: 0.8rem;
  white-space: nowrap;
`;

//댓글 수정 input
export const InputStyled = styled.input`
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;