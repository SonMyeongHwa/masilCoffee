import {
  StyledModal,
  StyleModalContainer,
  StyleX,
  StyleXContainer,
} from "./Modal.style";

const Modal = ({ closeModal, children }) => {
  return (
    <StyledModal>
      <StyleModalContainer>
        <StyleXContainer>
          <StyleX onClick={closeModal}>X</StyleX>
        </StyleXContainer>
        {children}
      </StyleModalContainer>
    </StyledModal>
  );
};
export default Modal;
