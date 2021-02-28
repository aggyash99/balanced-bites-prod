import React from 'react';
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

        <div className="text">
        <p>
        Diet n Cure is a Weight Management company , serving its clients since 2013. We help our clients through Lifestyle Counselling ,Nutrition Counselling and customized Workout Plans to get in their best body shape
        </p>
        </div>
        </div>
 

        <div className="col-12 col-lg-3 pt-4">
        <div className="list"> 
        <ul>
        <li className="footerlink"><NavLink exact className="footerlinks"  to="/">Home</NavLink></li>
        <li className="footerlink"><NavLink exact className="footerlinks"  to="/About">About</NavLink></li>
        <li className="footerlink"><NavLink exact className="footerlinks" to="/Contact">Contact</NavLink></li>
        <li className="footerlink"><NavLink exact className="footerlinks" to="/Service">Programs</NavLink></li>
        <li className="footerlink"><NavLink exact className="footerlinks"  to="/Contact" > Terms And condition</NavLink></li>
        
        </ul>
        </div>
        </div>







        </div>
        </div>
        </>
    );
};

export default Footer;