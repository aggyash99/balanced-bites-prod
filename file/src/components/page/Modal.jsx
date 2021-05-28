import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./modal.css";
import CloseIcon from '@material-ui/icons/Close'; 
import Tick from '../../Image/tickmark.png';
import {Link} from 'react-router-dom';
const Modal = props => {

  
/* <video className="vidmodal" height="200" width="200" id="video" autoPlay>
                            <source  className="vidmodal2" src="https://media.tenor.com/videos/b1193bfdeb305b8e34dc975177590f53/mp4#t=0.1" type="video/mp4"/>
                          </video>
  
  style="--i:1"
style="--i:2"
style="--i:3"
style="--i:4"
style="--i:5"
style="--i:6"
style="--i:7"                        */

  
  var shortenedname;
  
    var i=0;
    for(;i<props.name.length;i++)
    {
      console.log(props.name[i]);
      if(props.name[i]===' ')
      break;
    }
    console.log(i);
    shortenedname=props.name.substring(0, i);
    console.log(shortenedname);

  const shortenedname2=shortenedname;

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{enter: 0, exit: 0 }}
    >
        <>
        <div className="modal" onClick={props.onClose}>
          
        <span className="underlinebordermodal "></span>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-body ">
                    <div className="row ">
                    <div className="col-12 justifycontentcenter  " >
                    <div className="resituateripplemodal">
                        <span className="RippleModal" style={{animationDelay:"0.5s"}}></span>
                        <span className="RippleModal" style={{animationDelay:"1s"}}></span>
                        <span className="RippleModal" style={{animationDelay:"1.5s"}}></span>
                        <span className="RippleModal" style={{animationDelay:"2s"}}></span>
                        <span className="RippleModal" style={{animationDelay:"2.5s"}}></span>
                        <span className="RippleModal" style={{animationDelay:"3s"}}></span>
                        <span className="RippleModal" style={{animationDelay:"3.5s"}}></span>
                        </div>
                        </div></div>
                    <div className="row ">
                          
                          <div className="col-12 btnmodalalign">
                          
                            <button className="btn btn-outline btnmodalclose"  >
                            <Link className="" to={{pathname:'/'}} target="_top" >
                            <CloseIcon style={{fontSize:"25px"}} /></Link>
                            </button></div></div>
                        
                        <div className="row ">
                         
                        <div className="col-12 justifycontentcenter heightincmodal " >
                         
                        <img src={Tick} height="175" width="175" className="vidmodal"></img> </div>
                   
                          </div>
                        <div className="row">
                            <div className="col-12 justifycontentcenter" style={{paddingBottom:"0px"}}>
                              <span className="modalmaintext">Hi {shortenedname2}, </span>
                              </div>
                            <div className="col-12 justifycontentcenter">
                              <span className="modalmaintext">Thank you for contacting us.</span> </div>
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
