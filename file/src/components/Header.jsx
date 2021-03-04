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
<header >
<div className="container-fluid ">
<div className="row head">
<div className="col-1"></div>
<div className="col-lg-3 p-2 col-12 d-flex justify-content-around "><a ><WhatsAppIcon className="whatsapp" /> Whatsapp :98761431736</a>
</div>
<div className="col-lg-4 d-flex justify-content-around p-2 col-12"><a ><EmailIcon className="mail" /> Email : balancedbites10@gmail.com</a>
</div>
<div className="col-lg-2 p-2 d-flex gap-3 ">
<FacebookIcon />
<MailOutlineIcon/>
<InstagramIcon />
<EmailIcon/>
</div>
<div className="col-lg-2 p-2 d-flex justify-content-around" style={{backgroundColor:"green"}}>Contact : 9654874636</div>

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