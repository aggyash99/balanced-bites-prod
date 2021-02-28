import React from 'react';
import CallIcon from '@material-ui/icons/Call';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import EmailIcon from '@material-ui/icons/Email';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { NavLink } from 'react-router-dom';
import logo from '../Image/logo.png';
const Footer =()=>{
    return (
        <>
        <div className="container-fluid mx-auto footer mt-4">
        <div className="row p-5">
        
        <div className="col-12 col-lg-4 order-0">
            
        <div className="">
        <img src={logo} alt="sorry" style={{width:"100%"}}></img>
        </div>
        </div>
 

        <div className="col-12 col-lg-3">
        <h5 className=" text-center" style={{color:"white", marginTop:"-6px"}}>Programs</h5>
        <div className="list"> 
        <ul>
        <li className="footerlink"><NavLink exact className="footerlinks"  to="/">Weight loss</NavLink></li>
        <li className="footerlink"><NavLink exact className="footerlinks"  to="/About">Weight gain</NavLink></li>
        <li className="footerlink"><NavLink exact className="footerlinks" to="/Contact">Child Nutrition</NavLink></li>
        <li className="footerlink"><NavLink exact className="footerlinks" to="/Service">Theraputic Nutrition</NavLink></li>
        <li className="footerlink"><NavLink exact className="footerlinks"  to="/Contact" > Hair/Skin Care</NavLink></li>
        </ul>
        </div>
        </div>


        <div className="col-12 col-lg-5 mx-auto">
        <h5 className="text-center" style={{color:"white", marginTop:"-6px"}}>Contact</h5>
        <div className="contactlist">
        <ul type="none">
        <li><CallIcon className="icon"/>Call : +91 8700326422</li>
        <li><AccessTimeIcon className="icon"/>Timeing : Mon-Sat 10:00Am - 7:00 PM</li>
        <li><EditLocationIcon className="icon" />Location: HOUSE NO. 288-89, POCKET G-26, SECTOR 3, ROHINI , DELHI</li>
        <li><EmailIcon className="icon"/>EMAIL : balancedbites10@gmail.com</li>
        </ul>
        </div>
        </div>
        </div>

        <div className="row endfoot" >
        <h2 className=" text-center" style={{fontSize:"15px"}}><CopyrightIcon className="icon"/>COPYRIGHT</h2>
        </div>


        </div>
        </>
    );
};

export default Footer;