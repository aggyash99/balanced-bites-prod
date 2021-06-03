import React from 'react';
import CallIcon from '@material-ui/icons/Call';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import EmailIcon from '@material-ui/icons/Email';
import CopyrightIcon from '@material-ui/icons/Copyright';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components'
import logo from '../Image/logo.png';
const Footer =()=>{
    return (
        <>
        <div className="End-footer" >
            <div className="container-fluid" style={{background : "black"}}>
            <div className="row">
                <IMGcolumn className="d-flex justify-content-center">
                <Upper>
                <Img src={logo} alt="footer-img"></Img>
               
                <Icons>
                        <LINKS   className="whatsapp" href="https://wa.link/k2f045" ><WhatsAppIcon></WhatsAppIcon></LINKS>
                        <LINKS   className="facebook" href="https://www.facebook.com/Balancedbites10/" ><FacebookIcon></FacebookIcon></LINKS>
                        <LINKS  className="mail"  href="balancedbites10@gmail.com" > <MailOutlineIcon ></MailOutlineIcon></LINKS>
                        <LINKS   className="insta" href="https://www.instagram.com/balancedbites10/?r=nametag" ><InstagramIcon  ></InstagramIcon></LINKS>
                </Icons>
                </Upper>
                </IMGcolumn> 
            </div>

            <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
                <span>Get In Touch</span>
            </div>  

            <div className="col-lg-6 col-md-6 col-12">
                <span>Programs</span>
            </div>  

            <div className="col-lg-3 col-md-6 col-12">
                <span></span>
            </div>  

            </div>


            </div>


        </div>
        </>
    );
};

export default Footer;
 
const Img = Styled.img`
object-fit: contain;
width : 100%; 
`
const Icons = Styled.div`
a{
margin : 10px;
color : white;
}
display : flex;
justify-content : space-around;
`
const LINKS = Styled.a`
 
text-align : right;
svg{
    font-size : 30px;
    padding : 2px; 
}  
padding : 2px;
border-radius : 25px;
`
const IMGcolumn = Styled.div`
position : relative;
&:before{
    content : "";
    width : 80%;
    height : 2px;
    background : #80808052;
    position : absolute;
    bottom : 0;
}
`

const Upper = Styled.div`
width : 270px; 
padding  : 30px 0; 

`

/**
 * 
 *      @programs
 *      <li className="footerlink"><NavLink exact className="footerlinks"  to="/">Weight loss</NavLink></li>
        <li className="footerlink"><NavLink exact className="footerlinks"  to="/About">Weight gain</NavLink></li>
        <li className="footerlink"><NavLink exact className="footerlinks" to="/Contact">Child Nutrition</NavLink></li>
        <li className="footerlink"><NavLink exact className="footerlinks" to="/Service">Theraputic Nutrition</NavLink></li>
        <li className="footerlink"><NavLink exact className="footerlinks"  to="/Contact" > Hair/Skin Care</NavLink></li>

        @address 
                <li><CallIcon className="icon"/>Call : +91 8700326422</li>
        <li><AccessTimeIcon className="icon"/>Timing : Mon-Sat 10:00Am - 7:00 PM</li>
        <li><EditLocationIcon className="icon" />Address : Hno. 288-89 G-26 Sec-3 ROHINI , DELHI</li>
        <li><EmailIcon className="icon"/>EMAIL : balancedbites10@gmail.com</li>

                @icons
                <a href="https://wa.link/k2f045" className="whatsapp"><WhatsAppIcon></WhatsAppIcon></a>
           <a href="https://www.facebook.com/Balancedbites10/" className="facebook"><FacebookIcon></FacebookIcon></a>
            <a href="balancedbites10@gmail.com" className="mail"> <MailOutlineIcon></MailOutlineIcon></a>
            <a href="https://www.instagram.com/balancedbites10/?r=nametag" className="insta"><InstagramIcon></InstagramIcon></a>
 * 


            @copyright 
            <CopyrightIcon className="icon"/>
 */