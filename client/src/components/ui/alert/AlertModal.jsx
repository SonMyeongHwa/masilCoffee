import React, { Fragment, useState} from 'react'
import ReactDOM from "react-dom";
import { Alert } from './AlertModal.style';


const AlertOverlay = (props) => {

  return (
    <Alert>
      {props.children}
    </Alert>
  )
}

const portalElement = document.getElementById("alert-overlays");

function AlertModal(props) {

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <AlertOverlay>{props.children}</AlertOverlay>,
        portalElement
      )}
    </Fragment>
  )
}

export default AlertModal
