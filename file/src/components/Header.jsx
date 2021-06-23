import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
// import { Link } from 'react-router-dom';
const Header = () =>{
return (
<>

<div className="container-fluid ">
<div className="row head d-flex">
 

<div className="col-lg-3 col-6  text-center p-2 header2">
    <WhatsAppIcon className="whatsapp"/><a href="https://api.whatsapp.com/send?phone=+918700326422"style={{color:"white"}}><span className="p-2">8700326422</span></a>
    </div>

    <div className="col-lg-5 text-center p-2 headerEmail  header2 ">
    <EmailIcon className="mail" /><a href="mailto:balancedbites10@gmail.com" style={{color:"white"}}> balancedbites10@gmail.com</a>
    </div>
  

<div className="col-lg-4 col-6 p-2 d-flex gap-3 justify-content-center  header2">
<a href="https://www.facebook.com/Balancedbites10/"><FacebookIcon /></a >
<a href="mailto:balancedbites10@gmail.com"><MailOutlineIcon/></a >
<a href="https://www.instagram.com/balancedbites10/?r=nametag"><InstagramIcon /></a >
</div>
</div> 
</div>

</>
);


}  

export default Header;