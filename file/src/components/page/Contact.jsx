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
import WarningIcon from '@material-ui/icons/Error'
import './contact.css';
import $, { event } from 'jquery';
import emailjs from 'emailjs-com';

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
 
  function sendEmail(e) {
    e.preventDefault();
   if(!submitform())
   return;

    emailjs.sendForm('service_u77862v', 'template_d4a6rhq', e.target, 'user_s9XA9nBNNpdk7RQRaVfna')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
        console.log(error.text);
  });


  }

  function clearform()
  {
    Data.fullname='';
    
  }

  function placeholderActive() {
    
    var el = document.getElementById("exampleFormControlTextarea1");
    
    if (el.getAttribute('placeholder') && el.value === '') {
      return true;
    }
    return false;
  }
  
  
 // document.getElementById('contactlink').addEventListener("mouseenter", redhover);
  //function redhover() {
   // console.log("Works?")


  function nameverify(name)
  {
    var regex=/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    return regex.test(name);
  }
  function phoneverify(phone)
  {
    var regex=/^\(?(\+([0-9]{2}(\ )?))?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
    return regex.test(phone);
  }

  function emailverify(email)
  {
    var regex =/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+$/;
    return regex.test(email);
  }

const contact1 = document.getElementById('contactlink1');
const contact2 =document.getElementById('contactlink2');
const contact3 =document.getElementById('contactlink3');
const contact4 =document.getElementById('contactlink4');
const contact5 =document.getElementById('contactlink5');
const textarea=document.getElementById('exampleFormControlTextarea1');
const textmessagelabel=document.getElementById('textmessagelabel');

   function textarealabelclick(){
    $("#textmessagelabel").addClass("textmessagelabelanim");
   
    $(textarea).hide();
  }
  
function textareafocus(){
  $("#textmessagelabel").addClass("textmessagelabelanim");
}
function textareaclick(){
  $("#textmessagelabel").addClass("textmessagelabelanim");
}
function textareafocusout(){
  
  if((placeholderActive()))
  $("#textmessagelabel").removeClass("textmessagelabelanim");

}

if(contact1)  
{contact1.addEventListener('mouseover', function(){
    console.log("works");
    $("#contact-icon-1").addClass("contact-icon-hover");
  } )
  contact1.addEventListener('mouseout', function(){
    console.log("works");
    $("#contact-icon-1").removeClass("contact-icon-hover");
  } )}
  if(contact2)
  {contact2.addEventListener('mouseover', function(){
    console.log("works");
    $("#contact-icon-2").addClass("contact-icon-hover");
  } )
  contact2.addEventListener('mouseout', function(){
    console.log("works");
    $("#contact-icon-2").removeClass("contact-icon-hover");
  } )}
  if(contact3)
{contact3.addEventListener('mouseover', function(){
  console.log("works");
  $("#contact-icon-3").addClass("contact-icon-hover");
  } 
  )
  contact3.addEventListener('mouseout', function(){
    console.log("works");
    $("#contact-icon-3").removeClass("contact-icon-hover");
  } )}
  if(contact4)
{contact4.addEventListener('mouseover', function(){
  console.log("works");
  $("#contact-icon-4").addClass("contact-icon-hover");
  } )
  contact4.addEventListener('mouseout', function(){
    console.log("works");
    $("#contact-icon-4").removeClass("contact-icon-hover");
  } )}
  if(contact5)
  {contact5.addEventListener('mouseover', function(){
    console.log("works");
    $("#contact-icon-5").addClass("contact-icon-hover");
  } )
  contact5.addEventListener('mouseout', function(){
    console.log("works");
    $("#contact-icon-5").removeClass("contact-icon-hover");
  } )}
 
//} 
const iconname = document.getElementById("name");
const alertinline = document.getElementById("Alertinline");
   
const iconemail = document.getElementById("email");
const iconnum = document.getElementById("num");
function resultname()
{
  $("#exampleFormControlInput1").removeClass("warningborder");
    $(iconname).addClass("hiddenelement");
    $("#exampleFormControlInput1").removeClass("acceptedborder");
    if (nameverify(Data.phone)==true) {
      $("#exampleFormControlInput1").removeClass("warningborder");
      $(iconname).addClass("hiddenelement");
      $("#exampleFormControlInput1").addClass("acceptedborder");
    }
     else if (nameverify(Data.fullname)==false) {
      $(iconname).removeClass("hiddenelement");
      $("#exampleFormControlInput1").addClass("warningborder");
    
    }

}
function resultphone()
{
  $("#exampleFormControlInput2").removeClass("warningborder");
  $("#exampleFormControlInput2").removeClass("acceptedborder");

  $(iconnum).addClass("hiddenelement");
  if (phoneverify(Data.phone)==true) {
    $("#exampleFormControlInput2").removeClass("warningborder");
    $(iconnum).addClass("hiddenelement");

    $("#exampleFormControlInput2").addClass("acceptedborder");
  }
  if (phoneverify(Data.phone)==false) {
    $(iconnum).removeClass("hiddenelement");
    $("#exampleFormControlInput2").addClass("warningborder");
  
  }
}
function resultemail()
{
  console.log("callemail");
  $("#exampleFormControlInput3").removeClass("warningborder");
$("#exampleFormControlInput3").removeClass("acceptedborder");
$(iconemail).addClass("hiddenelement");
if (emailverify(Data.email)==true) {
  $("#exampleFormControlInput3").removeClass("warningborder");
  $(iconemail).addClass("hiddenelement");
  $("#exampleFormControlInput3").addClass("acceptedborder");
   
}
if (emailverify(Data.email)==false) {
  $(iconemail).removeClass("hiddenelement");
  $("#exampleFormControlInput3").addClass("warningborder");
 
}
}
  function submitform(){
    // if(Data.fullname === "")
    console.log("call");
   
  
    
      $("#exampleFormControlInput3").removeClass("warningborder");
      $(iconemail).addClass("hiddenelement");
    //const alertit;

   
    
    if (emailverify(Data.email)==true) {
      $("#exampleFormControlInput3").removeClass("warningborder");
      $(iconemail).addClass("hiddenelement");
      $("#exampleFormControlInput3").addClass("acceptedborder");
    }
    if ((nameverify(Data.fullname)==false && phoneverify(Data.phone)==false && emailverify(Data.email)==false) || (nameverify(Data.fullname)==false && emailverify(Data.email)==false) || (nameverify(Data.fullname)==false && phoneverify(Data.phone)==false)) {
      $(iconname).removeClass("hiddenelement");
      $("#exampleFormControlInput1").addClass("warningborder");
      $("#exampleFormControlInput1").removeClass("acceptedborder");return false;
    } else if (phoneverify(Data.phone)==false && emailverify(Data.email)==false) {
      $(iconnum).removeClass("hiddenelement");
      $("#exampleFormControlInput2").addClass("warningborder");
      return false;
    }  
    
return true;
    // alertinline.innerHTML=alertit;
    
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

              <form onSubmit={sendEmail} className=" mx-auto" style={{ paddingLeft: "30px", paddingRight: "30px" }} id="form">

                <div className="row">
                  <div className="col-1 d-sm d-xs-block"></div>
                  <div className="con col-sm-10" style={{ paddingBottom: "5%", verticalAlign: "Center" }}>
                    <span className="formheading">Send Message</span>
                  </div></div>
                <div className="row form-group">
                  <div className="col-1 d-none d-sm-block"></div>
                  <div className="mb-3  col-sm-10 paddingtextarea" required>
                    <input type="text" className="form-control" required id="exampleFormControlInput1" name='fullname' autoComplete="off" value={Data.fullname} onChange={InputEvent} onKeyUp={resultname} placeholder="E" />
                    <label for="exampleFormControlInput1" style={{ border: "none" }} className="form-label">Full Name</label>
                  </div>
                  <div className="col-1 d-none d-sm-block" style={{ verticalAlign: "bottom" }}>
                    <WarningIcon className="warningicon hiddenelement" id="name" style={{ fontSize: "27px" }} />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-1 d-none d-sm-block"></div>
                  <div className="mb-3  col-sm-10 paddingtextarea " required>
                    <input type="text" className="form-control" required id="exampleFormControlInput2" name='phone' autoComplete="off" value={Data.phone} onChange={InputEvent} onKeyUp={resultphone} placeholder="r" />
                    <label for="exampleFormControlInput2" className="form-label">Phone No.</label>
                  </div>
                  <div className="col-1 d-none d-sm-block" >
                    <WarningIcon className="warningicon hiddenelement" id="num" style={{ fontSize: "27px" }} />
                  </div>

                </div>
                <div className="row form-group">
                  <div className="col-1 d-none d-sm-block"></div>
                  <div className="mb-3  col-sm-10 paddingtextarea" required>
                    <input type="email" className="form-control" required id="exampleFormControlInput3" name='email' autoComplete="off" value={Data.email} onChange={InputEvent} onKeyUp={resultemail} placeholder="m" style={{}} />
                    <label for="exampleFormControlInput3" className="form-label">Email address</label>
                  </div>
                  <div className="col-1 d-none d-sm-block" >
                    <WarningIcon className="warningicon hiddenelement" id="email" style={{ fontSize: "27px" }} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-1 d-none d-sm-block"></div>
                  <div className="mb-3 form-group col-sm-10 paddingtextarea" required>
                    <label  class="textmessagelabel" id="textmessagelabel" onClick={textarealabelclick}>Your Message</label>
                    <textarea className="form-control textmessage" id="exampleFormControlTextarea1" rows="3" name='msg' autoComplete="off" value={Data.msg} onChange={InputEvent} onFocus={textareafocus} onBlur={textareafocusout} onClick={textareaclick} placeholder="message"></textarea>
                  </div>
                </div>
                
                <div className="col-lg-12 col-sm-12  d-flex justify-content-center">

                  <input className="btn btn-outline-primary btncontact" type="submit" name="submit" onClick={submitform}/>
                </div>
              </form>

            </div>
          </div>
          <div className="col-lg-5 col-sm-12 mt-sm-5 col-md-12">
            <div className="container icon-in-contact p-lg-5">
              <div className="mt-5 row">
                <span className="col-1" >< PhoneIphoneIcon className="contact-icon" id='contact-icon-1'style={{ fontSize: "35px", transition:".3s" }} /></span><span className="col-11 paddingmobile" ><a href="callto:8700326422" id="contactlink1">Call : +91 8700326422</a></span>
              </div>
              <div className="mt-5 row">
                <span className="col-1" >< EditLocationIcon className="contact-icon " id='contact-icon-2'style={{ fontSize: "35px", transition:".3s" }}></EditLocationIcon></span><span className="col-11 paddingmobile" ><a href="https://goo.gl/maps/V9zRTXPGUrjiV78x8" id="contactlink2">Address : Hno. 288-89 G-26 Sec-3 Rohini , Delhi</a></span>
              </div>
              <div className="mt-5 row">
                <span className="col-1"><AccessTimeIcon className="contact-icon" id='contact-icon-6'style={{ fontSize: "35px", transition:".3s" }} /></span><span className="col-11 paddingmobile" >Timing : Mon-Sat 10:00 AM - 7:00 PM</span>
              </div>
              <div className="mt-5 row">
                <span className="col-1"><MailOutlineIcon className="contact-icon" id='contact-icon-3'style={{ fontSize: "35px", transition:".3s" }}></MailOutlineIcon></span><span className="col-11 paddingmobile" ><a href="mailto:balancedbites10@gmail.com" id="contactlink3">Email : balancedbites10@gmail.com</a></span>
              </div>
              <div className="mt-5 row">
                <span className="col-1"><WhatsAppIcon className="contact-icon" id='contact-icon-4'style={{ fontSize: "35px", transition:".3s" }} /></span><span className="col-11 paddingmobile" ><a href="https://api.whatsapp.com/send?phone=+918700326422" id="contactlink4" target="_blank" style={{ color: "black", textDecoration: "none" }}>Whatsapp Us</a></span>
              </div>
              <div className="mt-5 row">
                <span className="col-1"> <InstagramIcon className="contact-icon" id='contact-icon-5' style={{ fontSize: "35px", transition:".3s" }} /></span><span className="col-11 paddingmobile" ><a href="https://www.instagram.com/balancedbites10/?r=nametag" id="contactlink5" style={{ color: "black", textDecoration: "none" }}>balancedbites10</a></span>
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
