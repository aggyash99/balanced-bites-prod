import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./modal.css";
import CloseIcon from '@material-ui/icons/Close'; 

const Modal = props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
        <>
   
        <div className="modal" onClick={props.onClose}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h4 className="modalheader">Thank You</h4>
                            <button className="btn btn-outline btnmodalclose" onClick={props.onClose} >
                            <CloseIcon  />
                            </button>
                            </div>
                    <div className="modal-body ">
                        <div className="row">
                            <div className="col-12 justifycontentcenter">We will contact you as soon as possible </div>
                        </div>
                        <div className="row">
                            <div className="col-12 justifycontentcenter" >
                    <button onClick={props.onClose} className="btn btn-outline btnmodal">Okay!</button>
                    </div></div></div>
                </div>
                </div>
       
        </>
        </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
