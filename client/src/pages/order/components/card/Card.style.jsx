import styled from "styled-components";

export const StyledCard = styled.div`
 font-family: 'Noto Sans', sans-serif; // Noto Sans 폰트 적용
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 300px;
  height: 350px;
  cursor: pointer;
  border: 1px solid #f1f1f1;
  background-color: ${({ $clickMenu }) => ($clickMenu ? "rgba(183, 67, 67, 0.5)" : "initial")};
  color: #f5f5f5;
`;

export const StyledImage = styled.img`
  //width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  // object-fit: cover;
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  max-width: 320px;
  height: 350px;
  transition: opacity 1s ease, z-index 0.01s ease;
  opacity: ${({ $clickMenu }) => ($clickMenu ? 0.3 : 1)}; // $clickMenu 상태에 따라 투명도 변경
  z-index: ${({ $clickMenu }) => ($clickMenu ? -1 : 0)}; // $clickMenu 상태에 따라 z-index 변경
`;
export const StyledText = styled.div`
  max-width: 300px;
  margin: 15px auto 0;

  b {
    font-size: 18px;
    font-weight: 900;
  }
  p {
    font-size: 14px;
    margin: 5px 0 0;
  }
`;
export const StyledButtonText = styled.div`
  margin: 0 auto;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  div > b {
    font-size: 16px;
    font-weight: 900;
  }
  div > p {
    font-size: 14px;
  }
  button {
    display: block;
  }
`;

// // 이미지에 적용할 스타일 정의
// export const StyledImage = styled.img`
//   object-fit: cover;
//   overflow: hidden;
//   width: 300px;
//   height: 400px;
//   position: absolute;
//   top: 0;
//   z
// `;
