import React from 'react';
import './Component.css';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
const Header = () =>{
return (
<>
<header className=" ">
<div className="container-fluid ">
<div className="row head ">
 
<div className="col-lg-6 p-2 d-flex justify-content-center ">
    <div className="col-lg-4 ">
    <WhatsAppIcon className="whatsapp" /><a> Whatsapp :98761431736</a>
    </div>
    <div className="col-lg-6 d-flex justify-content-end ">
    <EmailIcon className="mail" /><a> Email : balancedbites10@gmail.com</a>
    </div>
  </div>

<div className="col-lg-4 p-2 d-flex gap-3  justify-content-lg-end">
<FacebookIcon />
<MailOutlineIcon/>
<InstagramIcon />
<EmailIcon/>
</div>
</div> 
</div>
</header>

</>
);


}
/*
<ul class="nav justify-content-around">
  <li class="nav-item">
    <NavLink class="nav-link " aria-current="page" to="/">LOCATION</NavLink>
  </li>
  <li class="nav-item">
    <NavLink class="nav-link" to="/">WhatsApp NO.</NavLink>
  </li>
  <li class="nav-item">
    <NavLink class="nav-link" to="/">SOCIAL WEB</NavLink>
  </li>
  <li class="nav-item">
   <NavLink class="nav-link" to="/">E-MAIL</NavLink>
  </li>
</ul>


*/


export default Header;