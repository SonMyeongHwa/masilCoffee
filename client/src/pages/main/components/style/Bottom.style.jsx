import styled from "styled-components";

export const BottomSlide = styled.div`
  width: 2000px;
  margin: 0 auto;
  background-color: ${(props) => props.$bgColor || "defaultColor"};

  .slick-slider {
    width: 2000px;
    overflow-x: hidden;
  }

  .slick-track {
    width: 1920px;
  }

  .slick-track > div {
    box-sizing: border-box;
    height: auto;
    word-wrap: break-word;
    overflow-wrap: break-word;
    color: white;
    cursor: pointer;
  }
  .slick-track > div > div {
    width: 460px;
    display: block;
  }
  .slick-track > div > div > div {
    display: block;
  }
`;

export const Bottom = styled.div`
  width: 400px;
`;
export const BottomBox = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 30px;
  border-radius: 20px;
  margin: 70px 10px;

  background-color: ${(props) => props.$bgColor || "defaultColor"};
  color: ${(props) => (props.$bgColor === "#d9d9d9" ? "black" : "white")};
  /* border: ${(props) => (props.isEven ? "1px solid #191414" : "none")}; */
`;

export const SquareButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SquareButton = styled.div`
  margin-right: 10px;
  /* padding: 10px 0; */
  background-color: ${(props) => props.$bgColor || "defaultColor"};
  > Button {
    font-size: 14px;
  }
`;
export const Button = styled.span``;
export const BsChat = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  font-size: 18px;
  > span {
    padding-left: 10px;
  }
`;
export const TagBox = styled.span`
  padding: 10px;
  margin: 0 5px 5px 0;
  border-radius: 30px;
  background-color: white;
  color: black;
  font-size: 0.8rem;
  white-space: nowrap;
  font-weight: 900;
`;
export const TagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
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
`;

//댓글, 좋아요 갯수
export const CommentNum = styled.span`
  margin-left: 3px;
  width: 30px;
`;

export const Post = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;