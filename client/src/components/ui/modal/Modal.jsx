import { Fragment } from "react";
import ReactDOM from "react-dom";
import { BackDropGround, ModalContent } from "./Modal.style";


const Backdrop = (props) => {
  return <BackDropGround onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <ModalContent>
      <div>{props.children}</div>
    </ModalContent>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
