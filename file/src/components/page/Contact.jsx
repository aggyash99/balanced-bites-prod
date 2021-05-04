import React, { useState } from 'react'
import Map from '../Map';
import CallIcon from '@material-ui/icons/Call';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import { NavLink } from 'react-router-dom';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Contact() {
  const [Data,setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:"",
  });
  const InputEvent = (event) =>{
    const {name,value} = event.target;
    setData((prevval)=>{
      return {
        ...prevval,
        [name]:value,
      };
    })
    console.log(Data)
  }
  const formsubmit = (e)=>{
    e.preventDefault();
    console.log(Data);
  }

  const submitform = () =>{
   if(Data.fullname === "")
   alert('Please enter Valid Username');
   if(Data.phone==="")
   alert('Please enter Valid Phonenumber');
  if(Data.email==="")
  alert("please enter valid Email");
  return "";
  }
  return (
    <>
    <div>
      <div  className="jumbotron mb-5 jumbotron-fluid">
      <h1 className="text-center">Get in Touch <strong style={{color:"green"}}>With <span style={{borderBottom:"2px solid green"}}>us</span> Today </strong></h1>
    </div>
    </div>
    <div className = " container-fluid contact_div">
      
      <div className="row">
      
        <div className="col-md-12 col-sm-12 col-lg-6 input p-lg-5">
          
          <div className="container-fluid">

          <form action="Contactgmail.php"  className=" mx-auto">
            
          <div className="con text-center">
          <span >Send Message</span>
          </div>
            <div className="mb-3" required>
            <label for="exampleFormControlInput1" style={{border:"none"}} className="form-label">Full Name</label>
            <div className="d-flex align-items-center">
         
            <input type="text" className="form-control" required id="exampleFormControlInput1" name='fullname'autoComplete="off"  value={Data.fullname} onChange={InputEvent} placeholder="Enter your name"/>
            <FontAwesomeIcon icon={faExclamationCircle} style={{position:"relative",left:"-5%"}}></FontAwesomeIcon>
            </div>
            </div>
            <div className="mb-3" required>
            <label for="exampleFormControlInput2" className="form-label">Phone No.</label>
            <input type="text" className="form-control" required id="exampleFormControlInput2" name='phone'autoComplete="off"  value={Data.phone} onChange={InputEvent} placeholder="mobile number"/>
            </div>
            <div className="mb-3" required>
            <label for="exampleFormControlInput3" className="form-label">Email address</label>
            <input type="email" className="form-control" required id="exampleFormControlInput3" name='email'autoComplete="off"  value={Data.email} onChange={InputEvent} placeholder="name@example.com" style={{}}/>
            </div>
            <div className="mb-3" required>
            <label for="exampleFormControlTextarea1" className="form-label"  >Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='msg'autoComplete="off"  value={Data.msg} onChange={InputEvent}></textarea>
            </div>
            <div className="col-lg-12 col-sm-12  d-flex justify-content-center">
            <button className="btn btn-outline-primary" type="submit" onClick={submitform}>Submit form</button>
            </div>
          </form>
         
          </div>
        </div> 
      <div className="col-lg-6 col-sm-12 mt-sm-5 col-md-12">
      <div className="container icon-in-contact p-lg-5">
      <div className="">
        <span >< PhoneIphoneIcon className="contact-icon" style={{fontSize:"35px"}}/>Call : +91 8700326422</span>
      </div>
      <div className="mt-5">
      <span >< EditLocationIcon className="contact-icon" style={{fontSize:"35px"}}></EditLocationIcon>Address : Hno. 288-89 G-26 Sec-3 Rohini , Delhi</span>
      </div>
      <div className="mt-5">
        <span ><AccessTimeIcon className="contact-icon" style={{fontSize:"35px"}}/>Timing : Mon-Sat 10:00Am - 7:00 PM</span>
      </div>
      <div className="mt-5">
        <span ><MailOutlineIcon className="contact-icon"  style={{fontSize:"35px"}}></MailOutlineIcon>EMAIL : balancedbites10@gmail.com</span>
      </div>
      <div className="mt-5">
      <span><WhatsAppIcon className="contact-icon" style={{fontSize:"35px"}}/><a href="https://api.whatsapp.com/send?phone=+918700326422" target="_blank" style={{color:"black",textDecoration:"none"}}>Contact Us</a></span>
      </div>
      <div className="mt-5">
      <span> <InstagramIcon className="contact-icon" style={{fontSize:"35px"}}/><a href="https://www.instagram.com/balancedbites10/?r=nametag" style={{color:"black",textDecoration:"none"}}>balancedbites10</a></span>
      </div>
      </div>
      </div>

        </div>

         <Map/>
      </div>
     
      
    
    </>
  );
}

export default Contact;
