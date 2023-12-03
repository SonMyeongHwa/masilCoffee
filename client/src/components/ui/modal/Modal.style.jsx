import styled from "styled-components";

export const BackDropGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 20vh;
  left: 25%;
  width: 50%;
  height: 50%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
