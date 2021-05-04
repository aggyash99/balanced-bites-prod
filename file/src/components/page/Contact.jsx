import React, { useState } from 'react'
import Map from '../Map';
import CallIcon from '@material-ui/icons/Call';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditLocationIcon from '@material-ui/icons/LocationOn';
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
    //console.log(Data)

  }
  const formsubmit = (e) => {
    e.preventDefault();
    console.log(Data);
  }
  
  
 // document.getElementById('contactlink').addEventListener("mouseenter", redhover);
  //function redhover() {
   // console.log("Works?")
 // }
 
const contact1 = document.getElementById('contactlink1');
const contact2 =document.getElementById('contactlink2')
const contact3 =document.getElementById('contactlink3')
const contact4 =document.getElementById('contactlink4')
const contact5 =document.getElementById('contactlink5')
if(contact1)  
contact1.addEventListener('click', function(){
    console.log("works");
    $("#contact-icon-1").addClass("contact-icon-hover");
  } )
  if(contact2)
  contact2.addEventListener('hover', function(){

  } )
  if(contact3)
contact3.addEventListener('hover', function(){

  } 
  )
  if(contact4)
contact4.addEventListener('hover', function(){

  } )
  if(contact5)
  contact5.addEventListener('hover', function(){

  } )

//}
  function submitform(){
    // if(Data.fullname === "")
    console.log("call");
    const alertinline = document.getElementById("Alertinline");
    const iconname = document.getElementById("name");
  const iconemail = document.getElementById("email");
  const iconnum = document.getElementById("num");
    $("#exampleFormControlInput1").removeClass("warningborder");
    $(iconname).addClass("hiddenelement");
    $("#exampleFormControlInput2").removeClass("warningborder");
      $(iconnum).addClass("hiddenelement");
      
      $("#exampleFormControlInput3").removeClass("warningborder");
      $(iconemail).addClass("hiddenelement");
    //const alertit;
    if ((Data.fullname == "" && Data.phone == "" && Data.email == "") || (Data.fullname == "" && Data.email == "") || (Data.fullname == "" && Data.phone == "")) {
      $(iconname).removeClass("hiddenelement");
      $("#exampleFormControlInput1").addClass("warningborder");
      $("#exampleFormControlInput1").removeClass("acceptedborder");
    } else if (Data.phone == "" && Data.email == "") {
      $(iconnum).removeClass("hiddenelement");
      $("#exampleFormControlInput2").addClass("warningborder");
    } else if (Data.fullname === "") {
      $(iconname).removeClass("hiddenelement");
      $("#exampleFormControlInput1").addClass("warningborder");
    } else if (Data.phone === "") {
      $(iconnum).removeClass("hiddenelement");
      $("#exampleFormControlInput2").addClass("warningborder");
    } else if (Data.email === "") {
      $(iconemail).removeClass("hiddenelement");
      $("#exampleFormControlInput3").addClass("warningborder");
    }
    if (Data.fullname != "") {
      $("#exampleFormControlInput1").removeClass("warningborder");
      $(iconname).addClass("hiddenelement");
      $("#exampleFormControlInput1").addClass("acceptedborder");
    }
    if (Data.phone != "") {
      $("#exampleFormControlInput2").removeClass("warningborder");
      $(iconnum).addClass("hiddenelement");
    }
    if (Data.email != "") {
      $("#exampleFormControlInput3").removeClass("warningborder");
      $(iconemail).addClass("hiddenelement");
    }

    // alertinline.innerHTML=alertit;
    return "";
  }
  return (
    <>


      <div className=" container-fluid contact_div">
        <div style={{ paddingTop: "55px", paddingBottom: "30px" }}>
          <h1 className="text-center" style={{ fontSize: "50px" }}>Get in Touch <span id='bottomborder' className="borderbottom"><strong style={{ color: "#03ac11" }}>With us Today </strong></span></h1>
        </div>

        <div className="row">

          <div className="col-md-12 col-sm-12 col-lg-7 input p-lg-5">

            <div className="container-fluid paddingfixform" id='form'>

              <form action="Contactgmail.php" className=" mx-auto" style={{ paddingLeft: "30px", paddingRight: "30px" }}>

                <div className="row">
                  <div className="col-1 d-sm d-xs-block"></div>
                  <div className="con col-sm-10" style={{ paddingBottom: "5%", verticalAlign: "Center" }}>
                    <span className="formheading">Send Message</span>
                  </div></div>
                <div className="row">
                  <div className="col-1 d-none d-sm-block"></div>
                  <div className="mb-3 form-group col-sm-10" required>
                    <input type="text" className="form-control" required id="exampleFormControlInput1" name='fullname' autoComplete="off" value={Data.fullname} onChange={InputEvent} placeholder="E" />
                    <label for="exampleFormControlInput1" style={{ border: "none" }} className="form-label">Full Name</label>
                  </div>
                  <div className="col-1 d-none d-sm-block" style={{ verticalAlign: "bottom" }}>
                    <WarningIcon className="warningicon hiddenelement" id="name" style={{ fontSize: "40px" }} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-1 d-none d-sm-block"></div>
                  <div className="mb-3 form-group col-sm-10 " required>
                    <input type="text" className="form-control" required id="exampleFormControlInput2" name='phone' autoComplete="off" value={Data.phone} onChange={InputEvent} placeholder="r" />
                    <label for="exampleFormControlInput2" className="form-label">Phone No.</label>
                  </div>
                  <div className="col-1 d-none d-sm-block" >
                    <WarningIcon className="warningicon hiddenelement" id="num" style={{ fontSize: "40px" }} />
                  </div>

                </div>
                <div className="row">
                  <div className="col-1 d-none d-sm-block"></div>
                  <div className="mb-3 form-group col-sm-10" required>
                    <input type="email" className="form-control" required id="exampleFormControlInput3" name='email' autoComplete="off" value={Data.email} onChange={InputEvent} placeholder="m" style={{}} />
                    <label for="exampleFormControlInput3" className="form-label">Email address</label>
                  </div>
                  <div className="col-1 d-none d-sm-block" >
                    <WarningIcon className="warningicon hiddenelement" id="email" style={{ fontSize: "40px" }} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-1 d-none d-sm-block"></div>
                  <div className="mb-3 form-group col-sm-10" required>
                    <span style={{ color: "Black  " }}>Your Message</span>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='msg' autoComplete="off" value={Data.msg} onChange={InputEvent} placeholder="Your Message"></textarea>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12  d-flex ">
                  <span id="Alertinline" class="alertinline"></span>
                </div>
                <div className="col-lg-12 col-sm-12  d-flex justify-content-center" style={{ paddingTop: "30px" }}>

                  <button className="btn btn-outline-primary btncontact" type="submit" onClick={submitform}>Submit form</button>
                </div>
              </form>

            </div>
          </div>
          <div className="col-lg-5 col-sm-12 mt-sm-5 col-md-12">
            <div className="container icon-in-contact p-lg-5">
              <div className="mt-5 row">
                <span className="col-1" >< PhoneIphoneIcon className="contact-icon" id='contact-icon-1'style={{ fontSize: "35px" }} /></span><span className="col-11 paddingmobile" ><a href="callto:8700326422" id="contactlink1">Call : +91 8700326422</a></span>
              </div>
              <div className="mt-5 row">
                <span className="col-1" >< EditLocationIcon className="contact-icon " id='contact-icon-2'style={{ fontSize: "35px" }}></EditLocationIcon></span><span className="col-11 paddingmobile" ><a href="https://goo.gl/maps/V9zRTXPGUrjiV78x8" id="contactlink2">Address : Hno. 288-89 G-26 Sec-3 Rohini , Delhi</a></span>
              </div>
              <div className="mt-5 row">
                <span className="col-1"><AccessTimeIcon className="contact-icon" id='contact-icon-6'style={{ fontSize: "35px" }} /></span><span className="col-11 paddingmobile" >Timing : Mon-Sat 10:00Am - 7:00 PM</span>
              </div>
              <div className="mt-5 row">
                <span className="col-1"><MailOutlineIcon className="contact-icon" id='contact-icon-3'style={{ fontSize: "35px" }}></MailOutlineIcon></span><span className="col-11 paddingmobile" ><a href="mailto:balancedbites10@gmail.com" id="contactlink3">EMAIL : balancedbites10@gmail.com</a></span>
              </div>
              <div className="mt-5 row">
                <span className="col-1"><WhatsAppIcon className="contact-icon" id='contact-icon-4'style={{ fontSize: "35px" }} /></span><span className="col-11 paddingmobile" ><a href="https://api.whatsapp.com/send?phone=+918700326422" id="contactlink4" target="_blank" style={{ color: "black", textDecoration: "none" }}>Click to Whatsapp</a></span>
              </div>
              <div className="mt-5 row">
                <span className="col-1"> <InstagramIcon className="contact-icon" id='contact-icon-5' style={{ fontSize: "35px" }} /></span><span className="col-11 paddingmobile" ><a href="https://www.instagram.com/balancedbites10/?r=nametag" id="contactlink5" style={{ color: "black", textDecoration: "none" }}>balancedbites10</a></span>
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
