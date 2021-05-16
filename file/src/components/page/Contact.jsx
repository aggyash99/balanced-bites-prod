import React, { useState } from 'react'
import Map from '../Map';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditLocationIcon from '@material-ui/icons/LocationOn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import WarningIcon from '@material-ui/icons/ErrorOutline'
import './contact.css';
import $ from 'jquery';
import emailjs from 'emailjs-com';
import Modal from './Modal';

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
    // console.log(Data)

  }


  function sendEmail(e) {
    e.preventDefault();
    if (!submitform())
      return;

    emailjs.sendForm('service_u77862v', 'template_d4a6rhq', e.target, 'user_s9XA9nBNNpdk7RQRaVfna')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);

      }
      );
    setShow(true);
    
  }

  function clearform() {
    
window.location.replace("/");
  }

  function placeholderActive() {

    var el = document.getElementById("exampleFormControlTextarea1");

    if (el.getAttribute('placeholder') && el.value === '') {
      return true;
    }
    return false;
  }


  function nameverify(name) {
    var regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
    return regex.test(name);
  }
  function phoneverify(phone) {
    var regex = /^\(?(\+([0-9]{2}( )?))?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
    return regex.test(phone);
  }

  function emailverify(email) {
    var regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+$/;
    return regex.test(email);
  }


  function textarealabelclick() {
    $("#textmessagelabel").addClass("textmessagelabelanim");
    $("#exampleFormControlTextarea1").trigger("focus");
  }

  function textareafocus() {
    $("#textmessagelabel").addClass("textmessagelabelanim");
  }
  function textareaclick() {
    $("#textmessagelabel").addClass("textmessagelabelanim");
  }
  function textareafocusout() {
    if ((placeholderActive()))
      $("#textmessagelabel").removeClass("textmessagelabelanim");
  }

  function contactmouseover(e) {
    const name = "\"" + e.target + "\"";
    if (name.includes("callto:8700326422"))
      $("#contact-icon-1").addClass("contact-icon-hover");
    else if (name.includes("https://goo.gl/maps/V9zRTXPGUrjiV78x8"))
      $("#contact-icon-2").addClass("contact-icon-hover");
    else if (name.includes("mailto:balancedbites10@gmail.com"))
      $("#contact-icon-3").addClass("contact-icon-hover");
    else if (name.includes("https://api.whatsapp.com/send?phone=+918700326422"))
      $("#contact-icon-4").addClass("contact-icon-hover");
    else if (name.includes("https://www.instagram.com/balancedbites10/?r=nametag"))
      $("#contact-icon-5").addClass("contact-icon-hover");

  }

  function contactmouseout(e) {
    const name = "\"" + e.target + "\"";
    if (name.includes("callto:8700326422"))
      $("#contact-icon-1").removeClass("contact-icon-hover");
    else if (name.includes("https://goo.gl/maps/V9zRTXPGUrjiV78x8"))
      $("#contact-icon-2").removeClass("contact-icon-hover");
    else if (name.includes("mailto:balancedbites10@gmail.com"))
      $("#contact-icon-3").removeClass("contact-icon-hover");
    else if (name.includes("https://api.whatsapp.com/send?phone=+918700326422"))
      $("#contact-icon-4").removeClass("contact-icon-hover");
    else if (name.includes("https://www.instagram.com/balancedbites10/?r=nametag"))
      $("#contact-icon-5").removeClass("contact-icon-hover");
  }

  const iconname = document.getElementById("name");
  const iconemail = document.getElementById("email");
  const iconnum = document.getElementById("num");
  function resultname() {
    $("#exampleFormControlInput1").removeClass("warningborder");
    $(iconname).addClass("hiddenelement");
    $("#exampleFormControlInput1").removeClass("acceptedborder");
    if (nameverify(Data.fullname) === true) {
      $("#exampleFormControlInput1").removeClass("warningborder");
      $(iconname).addClass("hiddenelement");
      $("#exampleFormControlInput1").addClass("acceptedborder");
      return true;
    }
    if (nameverify(Data.fullname) === false) {
      $(iconname).removeClass("hiddenelement");
      $("#exampleFormControlInput1").addClass("warningborder");
      return false;
    }

  }
  function resultphone() {
    $("#exampleFormControlInput2").removeClass("warningborder");
    $("#exampleFormControlInput2").removeClass("acceptedborder");

    $(iconnum).addClass("hiddenelement");
    if (phoneverify(Data.phone) === true) {
      $("#exampleFormControlInput2").removeClass("warningborder");
      $(iconnum).addClass("hiddenelement");

      $("#exampleFormControlInput2").addClass("acceptedborder");
      return true;
    }
    if (phoneverify(Data.phone) === false) {
      $(iconnum).removeClass("hiddenelement");
      $("#exampleFormControlInput2").addClass("warningborder");
      return false;
    }
  }
  function resultemail() {
    $("#exampleFormControlInput3").removeClass("warningborder");
    $("#exampleFormControlInput3").removeClass("acceptedborder");
    $(iconemail).addClass("hiddenelement");
    if (emailverify(Data.email) === true) {
      $("#exampleFormControlInput3").removeClass("warningborder");
      $(iconemail).addClass("hiddenelement");
      $("#exampleFormControlInput3").addClass("acceptedborder");
      return true;
    }
    if (emailverify(Data.email) === false) {
      $(iconemail).removeClass("hiddenelement");
      $("#exampleFormControlInput3").addClass("warningborder");
      return false;
    }
  }
  function submitform() {
    return (resultname() && resultphone() && resultemail());
  }
  
  const [show, setShow] =useState(false);
  return (
    <>
    
      <Modal onClose={() => clearform()} show={show} name={Data.fullname}/>
      <div className=" container-fluid contact_div">
        <div style={{ paddingTop: "55px", paddingBottom: "30px" }}>
          <h1 className="text-center contactheading" >Get in Touch <span id='bottomborder' className="borderbottom"><strong style={{ color: "#03ac11" }}>With us Today </strong></span></h1>
        </div>

        <div className="row">

          <div className="col-md-12 col-sm-12 col-lg-7 inputcontact formcontact p-lg-5">

            <div className="container-fluid paddingfixform" id='form'>

              <form onSubmit={sendEmail} className=" mx-auto" id="form">

                <div className="row">
                  <div className="col-1 d-sm d-xs-block"></div>
                  <div className="con col-sm-10" style={{ paddingBottom: "5%", verticalAlign: "Center" }}>
                    <span className="formheading">Contact Us</span>
                  </div></div>
                <div className="row form-group">
                  <div className="col-1 d-none d-sm-block"></div>
                  <div className="mb-3  col-sm-10 paddingtextarea" required>
                    <input type="text" className="form-control" required id="exampleFormControlInput1" name='fullname' autoComplete="off" value={Data.fullname} onChange={InputEvent} onKeyUp={resultname} placeholder="E" />
                    <label style={{ border: "none" }} className="form-label">Full Name</label>
                  </div>
                  <div className="col-1 d-none d-sm-block" style={{ verticalAlign: "bottom" }}>
                    <WarningIcon className="warningicon hiddenelement" id="name" style={{ fontSize: "35px" }} />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-1 d-none d-sm-block"></div>
                  <div className="mb-3  col-sm-10 paddingtextarea " required>
                    <input type="text" className="form-control" required id="exampleFormControlInput2" name='phone' autoComplete="off" value={Data.phone} onChange={InputEvent} onKeyUp={resultphone} placeholder="r" />
                    <label className="form-label">Phone No.</label>
                  </div>
                  <div className="col-1 d-none d-sm-block" >
                    <WarningIcon className="warningicon hiddenelement" id="num" style={{ fontSize: "35px" }} />
                  </div>

                </div>
                <div className="row form-group">
                  <div className="col-1 d-none d-sm-block"></div>
                  <div className="mb-3  col-sm-10 paddingtextarea" required>
                    <input type="email" className="form-control" required id="exampleFormControlInput3" name='email' autoComplete="off" value={Data.email} onChange={InputEvent} onKeyUp={resultemail} placeholder="m" style={{}} />
                    <label  className="form-label">Email address</label>
                  </div>
                  <div className="col-1 d-none d-sm-block" >
                    <WarningIcon className="warningicon hiddenelement" id="email" style={{ fontSize: "35px" }} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-1 d-none d-sm-block"></div>
                  <div className="mb-3 form-group col-sm-10 paddingtextarea" required>
                    <label className="textmessagelabel" id="textmessagelabel" onClick={textarealabelclick}>Your Message</label>
                    <textarea className="form-control textmessage" id="exampleFormControlTextarea1" rows="3" name='msg' autoComplete="off" value={Data.msg} onChange={InputEvent} onFocus={textareafocus} onBlur={textareafocusout} onClick={textareaclick} placeholder="message"></textarea>
                  </div>
                </div>

                <div className="col-lg-12 col-sm-12  d-flex justify-content-center">

                  <input className=" btncontact" type="submit" name="submit" onClick={submitform} />
                </div>
              </form>

            </div>
          </div>
          <div className="col-lg-5 col-sm-12 mt-sm-5 col-md-12">
            <div className="container icon-in-contact p-lg-5">
              <div className="mt-5 row " >
                <span className="col-1" >< PhoneIphoneIcon className="contact-icon" id='contact-icon-1' style={{ fontSize: "35px", transition: ".3s" }} /></span><span className="col-11 paddingmobile" ><a href="callto:8700326422" id="contactlink1" value="1" onMouseEnter={contactmouseover} onMouseOut={contactmouseout}>Call : +91 8700326422</a></span>
              </div>
              <div className="mt-5 row">
                <span className="col-1" >< EditLocationIcon className="contact-icon " id='contact-icon-2' style={{ fontSize: "35px", transition: ".3s" }}></EditLocationIcon></span><span className="col-11 paddingmobile" ><a href="https://goo.gl/maps/V9zRTXPGUrjiV78x8" id="contactlink2" onMouseEnter={contactmouseover} onMouseOut={contactmouseout}>Address : Hno. 288-89 G-26 Sec-3 Rohini , Delhi</a></span>
              </div>
              <div className="mt-5 row">
                <span className="col-1"><AccessTimeIcon className="contact-icon" id='contact-icon-6' style={{ fontSize: "35px", transition: ".3s" }} /></span><span className="col-11 paddingmobile" >Timing : Mon-Sat 10:00 AM - 7:00 PM</span>
              </div>
              <div className="mt-5 row">
                <span className="col-1"><MailOutlineIcon className="contact-icon" id='contact-icon-3' style={{ fontSize: "35px", transition: ".3s" }}></MailOutlineIcon></span><span className="col-11 paddingmobile" ><a href="mailto:balancedbites10@gmail.com" id="contactlink3" onMouseEnter={contactmouseover} onMouseOut={contactmouseout}>Email : balancedbites10@gmail.com</a></span>
              </div>
              <div className="mt-5 row">
                <span className="col-1"><WhatsAppIcon className="contact-icon" id='contact-icon-4' style={{ fontSize: "35px", transition: ".3s" }} /></span><span className="col-11 paddingmobile" ><a href="https://api.whatsapp.com/send?phone=+918700326422" id="contactlink4"  style={{ color: "black", textDecoration: "none" }} onMouseEnter={contactmouseover} onMouseOut={contactmouseout}>Whatsapp Us</a></span>
              </div>
              <div className="mt-5 row">
                <span className="col-1"> <InstagramIcon className="contact-icon" id='contact-icon-5' style={{ fontSize: "35px", transition: ".3s" }} /></span><span className="col-11 paddingmobile" ><a href="https://www.instagram.com/balancedbites10/?r=nametag" id="contactlink5" style={{ color: "black", textDecoration: "none" }} onMouseEnter={contactmouseover} onMouseOut={contactmouseout}>balancedbites10</a></span>
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
