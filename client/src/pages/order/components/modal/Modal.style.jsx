import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const StyleModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: 765px;
  max-height: 90vh;
  overflow-y: auto;
  height: auto;
  padding: 50px;
  background-color: white;
`;
export const StyleXContainer = styled.div`
  width: 650px;
  display: flex;
  justify-content: end;
`;
export const StyleX = styled.div`
  width: 30px;
  height: 30px;
  background-color: #650818;
  border-radius: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyleText = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 510px;
`;
export const StyleImg = styled.div`
  width: 255px;
  height: 255px;
  background-color: #f5f5f5;
  border-radius: 40px;
  cursor: pointer;
  padding: 0;
`;
export const StyleInfo = styled.div`
  width: 255px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  > span {
    font-size: 25px;
    font-weight: 900;
  }
`;
export const StyleDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  > span {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
    background-color: #8e0e28;
    border-radius: 100%;
    color: white;
  }
`;
export const StylePaddingSpan = styled.div`
  color: #8e0e28;
  font-size: 20px;
  font-weight: 600;
`;
export const StyleQuantity = styled.div`
  > span {
    padding: 0 32px;
    font-size: 18px;
    font-weight: 600;
  }
  button {
    border: 1px solid #878585;
    border-radius: 100%;
    width: 25px;
    height: 25px;
    font-weight: 600;
    cursor: pointer;
    background-color: white;
  }
`;
export const StyleSlide = styled.div`
  width: 650px;
`;

export const StyleSlideBox = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isSlideOpen",
})`
  max-height: ${({ isSlideOpen }) => (isSlideOpen ? "258px" : "0")};
  transition: max-height 0.5s ease-in-out;
  max-height: ${(props) =>
    props.isSlideOpen ? "300px" : "0"}; // 예시로 300px 설정
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
export const StyleSlideBoxText = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top: 20px;
    font-weight: 900;
  }
  i {
    width: 650px;
    height: 1px;
    border-top: 2px solid #8e0e28;
  }
`;

export const StyleButton = styled.div`
  margin-top: 70px;
`;

// 디테일 옵션
export const StyleShotModal = styled.div`
  .slide-enter {
    transform: translateY(-100%);
    opacity: 0;
  }

  .slide-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
  }

  .slide-exit {
    transform: translateY(0);
    opacity: 1;
  }

  .slide-exit-active {
    transform: translateY(-100%);
    opacity: 0;
    transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
  }
`;
