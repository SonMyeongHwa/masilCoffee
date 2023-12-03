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
  overflow-x: hidden;
  /* 모바일 환경을 위한 미디어 쿼리 */
  @media (max-width: 966px) {
    width: 80%;
  }
  /* 탭을 위한 미디어 쿼리 */
  @media (max-width: 640px) {
    max-width: 70%;
  }
`;
export const StyleXContainer = styled.div`
  width: 650px;
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
`;
export const StyleX = styled.div`
  width: 30px;
  height: 30px;
  background-color: #472e27;
  border-radius: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  // 기본 스타일
  @media (max-width: 966px) {
    // 모바일 환경에서의 위치 조정
    top: 0;
    right: 15%;
    overflow-x: hidden;
  }
  @media (max-width: 764px) {
    // 탭 환경에서의 위치 조정
    top: 0;
    right: 20%;
    overflow-x: hidden;
  }
  @media (max-width: 704px) {
    // 탭 환경에서의 위치 조정
    top: 0;
    right: 25%;
    overflow-x: hidden;
  }
`;
