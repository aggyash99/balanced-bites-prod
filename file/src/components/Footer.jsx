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
import { Link } from 'react-router-dom';
import Styled from 'styled-components'
import logo from '../Image/logo.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const Footer =()=>{
    return (
        <>
        <div className="End-footer" >
            <div className="container-fluid" style={{background : "#1c1c1c"}}>
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

            <div className="row mt-2">
            <Col className="col-lg-4 col-md-6 col-12">
                <span className="span1">About Us</span>
                <FooterLink className="foot1">
                <ul>
                <li>Muskan Bansal is a young & aspiring dietitian, nutritionist and Diabetes Educator from Delhi, India. She is enthusiastically working in the field of weight management and therapeutic nutrition. She believes in a natural way of achieving a healthy lifestyle...</li>
                <LINKS href="/about" className="newlink"><li >Read More</li></LINKS>
                </ul> 
                </FooterLink>
            </Col>  

            <Col className="col-lg-4 col-md-6 col-12">
                <span className="span2">Our Programs</span>
                <FooterLink className="foot2">
                <ul>
                <Link  to={{pathname:'/Program',state:{key : 0}}}><ArrowForwardIosIcon className="arrow-in-footer"/><li>Weight Loss</li></Link>
                <Link  to={{pathname:'/Program',state:{key : 1}}}><ArrowForwardIosIcon className="arrow-in-footer"/><li>Weight Gain</li></Link>
                <Link  to={{pathname:'/Program',state:{key : 6}}}><ArrowForwardIosIcon className="arrow-in-footer"/><li>Pregnancy</li></Link>
                <Link  to={{pathname:'/Program',state:{key : 5}}}><ArrowForwardIosIcon className="arrow-in-footer"/><li>Detox Diet</li></Link>
                <Link  to={{pathname:'/Program',state:{key : 7}}}><ArrowForwardIosIcon className="arrow-in-footer"/><li>Child Nutrition</li></Link>
                </ul>
                <ul>
                <Link  to={{pathname:'/Program',state:{key : 3}}}><ArrowForwardIosIcon className="arrow-in-footer"/><li>PCOS</li></Link >
                <Link  to={{pathname:'/Program',state:{key : 2}}}><ArrowForwardIosIcon className="arrow-in-footer"/><li>Diabetes</li></Link >
                <Link  to={{pathname:'/Program',state:{key : 8}}}><ArrowForwardIosIcon className="arrow-in-footer"/><li>Thyroid</li></Link >
                <Link  to={{pathname:'/Program',state:{key : 4}}}><ArrowForwardIosIcon className="arrow-in-footer"/><li>Hair & Skin care</li></Link >
                </ul>
                </FooterLink>
            </Col>  

            <Col className="col-lg-4 col-md-6 col-12">
            <span className="span3">Get In Touch</span>
            <FooterLink className="foot3">
            <ul>
            <div><CallIcon className="icon"/><li>Call : +91 8700326422</li></div>
            <div><AccessTimeIcon className="icon"/> <li>Timing : Mon-Sat 10:00Am - 7:00 PM</li></div>
            <div> <EditLocationIcon className="icon" /> <li>Address : Hno. 288-89 G-26 Sec-3 ROHINI , DELHI</li></div>
            <div><EmailIcon className="icon"/> <li>EMAIL : balancedbites10@gmail.com</li></div>
            </ul>
            </FooterLink>
            
            </Col>  

            </div>


            </div>


        </div>
        </>
    );
};

export default Footer;
const FooterLink = Styled.div`
li{
    text-align : left;
    padding : 10px; 
    transition : all 250ms;
    
}
.newlink{
    margin-top : -10px;
    color : grey;
}
ul{
    list-style : none;
    text-align : center;
    margin : 0;
    padding: 20px 0;
    font-size: 17px;
    a{
        color : white;
        display  : flex;
        width : 160px;
        align-items : center;
        .arrow-in-footer{
        width : 10px;
       
        }
        
        transition : all 250ms;
            &:hover{
                color: green;
            cursor : pointer;
            .arrow-in-footer{
                width : 11px; 
            }
            }
       
    }
}
.foot1{
    ul{
        padding : 0;
    }
}


display : flex; 
justify-content : space-around;
// align-items : center;

`
const Col = Styled.div`
color : white;
font-size : 20px;
font-family : poppins;
padding : 5px;
.span1{
    margin-left : 70px;

    @media (max-width : 400px)
    {
             margin-left : 30px;
    }    
}
    .span2{
        margin-left : 40px;
        
    @media (max-width : 400px)
    {
             margin-left : 20px;
    }
    }
    .span3{
        margin-left : 20px;
        
    @media (max-width : 400px)
    {
             margin-left : 20px;
    }
    }
span { 
    position : relative;
    &:before{
        position : absolute;
        content : "";
        width : 30px;
        height : 3px;
        background : #297300;
        bottom : -10px;
    }
}
.foot2{
    a{
        margin-left : 10px;
    }
}

.foot1{
    padding : 0px 20px;
    li{
        text-align : left;
        margin-left : 40px;
        @media (max-width : 400px)
        {
            margin : 0;
            padding : 0;
        }
    }
}
.foot3{
    padding : 0 20px ;
    text-align : left;
    li{
        text-align : left; 
        @media (max-width : 400px)
        {
            margin : 0;
            padding : 0;
        }
    }
    div{
        display : flex;
        align-items :center;
    }
}

`
 
const Img = Styled.img`
object-fit: contain;
width : 100%; 
`
const Icons = Styled.div`
padding : 10px;
a{
margin : 10px;
color : white;
}
display : flex;
align-items : center;
justify-content : center;
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
    bottom : 20px;
}
`

const Upper = Styled.div`
width : 350px; 
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