import styled from "styled-components";

export const Bottom = styled.div``;
export const BottomBox = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  padding: 30px;
  border-radius: 20px;

  background-color: ${(props) => props.$bgColor || "defaultColor"};
  color: ${(props) => (props.$bgColor === "#d9d9d9" ? "black" : "white")};
  border: ${(props) => (props.isEven ? "1px solid #191414" : "none")};
  width: 100%;

  @media (max-width: 768px) {
    width: 100%; // 화면이 작을 때 가로 크기 조절
    font-size: smaller;
  }

  > div > b {
    font-size: 20px;
  }
  > div > p {
    font-size: 17px;
  }
  @media (max-width: 768px) {
    padding: 5px;
    font-size: smaller;
  }
`;
export const BottomSlide = styled.div`
  background-color: ${(props) => props.$bgColor || "defaultColor"};

  .slick-slider {
    overflow-x: hidden;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  // 네비게이션 버튼 숨김
  .slick-prev,
  .slick-next {
    display: none;
  }

  .slick-track {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
  }

  .slick-track > div {
    box-sizing: border-box;
    height: auto;
    margin: 0 30px;

    word-wrap: break-word;
    overflow-wrap: break-word;
    color: white;
    cursor: pointer;

    display: flex;
    align-items: center;
  }
  .slick-track > div > div {
    display: block;
    padding: 20px;
  }
  .slick-track > div > div > div {
    display: block;
  }
`;

export const SquareButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SquareButton = styled.div`
  margin-right: 10px;
  padding: 10px 0;
  background-color: ${(props) => props.$bgColor || "defaultColor"};
  > Button {
    font-size: 14px;
  }
`;
export const BsChat = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  font-size: 18px;
  > span {
    padding-left: 10px;
  }
`;
