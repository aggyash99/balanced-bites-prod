import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./modal.css";
import CloseIcon from '@material-ui/icons/Close'; 
import $ from 'jquery';
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


  function vidplay()
  {
    $("#video").addClass("opacitymodal");
    document.getElementById("video").play();
  }

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{enter: 0, exit: 0 }}
    >
        <>
   
        <div className="modal" onClick={props.onClose}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-body ">
                    <div className="row ">
                          
                          <div className="col-12 btnmodalalign">
                           
                            <button className="btn btn-outline btnmodalclose" onClick={props.onClose}  >
                            <CloseIcon  />
                            </button></div></div>
                        <div className="row ">
                          
                        <div className="col-12 justifycontentcenter" >
                        
                          <video className="vidmodal" height="200" width="200" id="video" autoPlay>
                            <source  src="https://media.tenor.com/videos/b1193bfdeb305b8e34dc975177590f53/mp4#t=0.1" type="video/mp4"/>
                          </video>
                          </div>
                          </div>
                        <div className="row">
                            <div className="col-12 justifycontentcenter">We will contact you as soon as possible </div>
                        </div>
                   </div>
                </div>
                </div>
       
        </>
        </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
