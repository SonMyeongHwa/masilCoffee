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
