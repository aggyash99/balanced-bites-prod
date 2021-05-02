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
import WarningIcon from '@material-ui/icons/ErrorOutline'
import './contact.css';
import $ from 'jquery';

function Contact() {
  const [Data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevval) => {
      return {
        ...prevval,
        [name]: value,
      };
    })
    console.log(Data)
  }
  const formsubmit = (e) => {
    e.preventDefault();
    console.log(Data);
  }

  const submitform = () => {
    // if(Data.fullname === "")
    const alertinline = document.getElementById("Alertinline");
    const iconname = document.getElementById("name");
    const iconemail = document.getElementById("email");
    const iconnum = document.getElementById("num");

    //const alertit;
    if ((Data.fullname == "" && Data.phone == "" && Data.email == "") || (Data.fullname == "" && Data.email == "") || (Data.fullname == "" && Data.phone == ""))
      $(iconname).removeClass("hiddenelement");
    else if(Data.phone == "" && Data.email == "")
    $(iconnum).removeClass("hiddenelement");
   
    else if (Data.fullname === "")
      $(iconname).removeClass("hiddenelement");
    else if (Data.phone === "")
      $(iconnum).removeClass("hiddenelement");
    else if (Data.email === "")
      $(iconemail).removeClass("hiddenelement");

    // alertinline.innerHTML=alertit;
    return "";
  }
  return (
    <>
      <div>

        <div className="jumbotron mb-5 jumbotron-fluid">
          <h1 className="text-center">Get in Touch <span className="borderbottom"><strong style={{ color: "#83f302" }}>With us Today </strong></span></h1>
        </div>
      </div>
      <div className=" container-fluid contact_div">

        <div className="row">

          <div className="col-md-12 col-sm-12 col-lg-7 input p-lg-5">

            <div className="container-fluid">

              <form action="Contactgmail.php" className=" mx-auto">

                <div className="con" style={{paddingBottom:"2%"}}>
                  <span className="formheading">SEND MESSAGE</span>
                </div>
                <div className="row">
                  <div className="mb-3 form-group col-11" required>
                    <input type="text" className="form-control" required id="exampleFormControlInput1" name='fullname' autoComplete="off" value={Data.fullname} onChange={InputEvent} placeholder="E" />
                    <label for="exampleFormControlInput1" style={{ border: "none" }} className="form-label">Full Name</label>
                  </div>
                  <div className="col-1">
                    <WarningIcon className="warningicon hiddenelement" id="name" style={{ fontSize: "35px", color: "red" }} />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 form-group row col-11" required>
                    <input type="text" className="form-control" required id="exampleFormControlInput2" name='phone' autoComplete="off" value={Data.phone} onChange={InputEvent} placeholder="r" />
                    <label for="exampleFormControlInput2" className="form-label">Phone No.</label>
                  </div>
                  <div className="col-1" >
                    <WarningIcon className="warningicon hiddenelement" id="num" style={{ fontSize: "35px", color: "red" }} />
                  </div>

                </div>
                <div className="row">
                  <div className="mb-3 form-group row col-11" required>
                    <input type="email" className="form-control" required id="exampleFormControlInput3" name='email' autoComplete="off" value={Data.email} onChange={InputEvent} placeholder="m" style={{}} />
                    <label for="exampleFormControlInput3" className="form-label">Email address</label>
                  </div>
                  <div className="col-1" >
                    <WarningIcon className="warningicon hiddenelement" id="email" style={{ fontSize: "35px", color: "red" }} />
                  </div>
                </div>
                <span style={{ color: "#83f302  " }}>Your Message</span>
                <div className="row">
                  <div className="mb-3 form-group col-11" required>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='msg' autoComplete="off" value={Data.msg} onChange={InputEvent} placeholder="Your Message"></textarea>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12  d-flex ">
                  <span id="Alertinline" class="alertinline"></span>
                </div>
                <div className="col-lg-12 col-sm-12  d-flex justify-content-center" style={{ paddingTop:"30px"}}>

                  <button className="btn btn-outline-primary btncontact" type="submit" onClick={submitform}>Submit form</button>
                </div>
              </form>

            </div>
          </div>
          <div className="col-lg-5 col-sm-12 mt-sm-5 col-md-12">
            <div className="container icon-in-contact p-lg-5">
              <div className="mt-5">
                <a href="callto:8700326422" ><span >< PhoneIphoneIcon className="contact-icon" style={{ fontSize: "35px" }} />Call : +91 8700326422</span></a>
              </div>
              <div className="mt-5">
                <span >< EditLocationIcon className="contact-icon" style={{ fontSize: "35px" }}></EditLocationIcon><a href="https://goo.gl/maps/V9zRTXPGUrjiV78x8">Address : Hno. 288-89 G-26 Sec-3 Rohini , Delhi</a></span>
              </div>
              <div className="mt-5">
                <span ><AccessTimeIcon className="contact-icon" style={{ fontSize: "35px" }} />Timing : Mon-Sat 10:00Am - 7:00 PM</span>
              </div>
              <div className="mt-5">
                <span ><MailOutlineIcon className="contact-icon" style={{ fontSize: "35px" }}></MailOutlineIcon><a href="mailto:balancedbites10@gmail.com">EMAIL : balancedbites10@gmail.com</a></span>
              </div>
              <div className="mt-5">
                <span><WhatsAppIcon className="contact-icon" style={{ fontSize: "35px" }} /><a href="https://api.whatsapp.com/send?phone=+918700326422" target="_blank" style={{ color: "black", textDecoration: "none" }}>Click to Whatsapp</a></span>
              </div>
              <div className="mt-5">
                <span> <InstagramIcon className="contact-icon" style={{ fontSize: "35px" }} /><a href="https://www.instagram.com/balancedbites10/?r=nametag" style={{ color: "black", textDecoration: "none" }}>balancedbites10</a></span>
              </div>
            </div>
          </div>

        </div>

        <Map />
      </div>



    </>
  );
}

export default Contact;
