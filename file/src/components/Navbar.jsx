import React from 'react'
import { NavLink , Link } from 'react-router-dom';
import logo from '../Image/logo.png';
import $ from 'jquery';
import './Navbar.css';
import data from '../Data/Sdata'
import CloseIcon from '@material-ui/icons/Close'; 
function Navbar() {
  function navCollapse(){
    $("#navFullScreen").addClass("fullscreenMove");
  }
  return (
      <>
    {
      // HEADER END
    }
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-lg-top top-0"  >
  <div className="container-fluid">
  <nav className="d-flex">
    <div>
     <NavLink className="navbar-brand " to="/"><img className="img-fluid img-thumbnail Navbar-image"  src={logo} alt="sorry" style={{}}/></NavLink></div>
     <button className="btn btn-outline  navHamBurger"  onClick={()=>{$("#navFullScreen").removeClass("fullscreenMove");}}>
     <span className="navbar-toggler-icon"></span>
                            </button>
    </nav>
    <div className=" collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto gap-2 ">
       
      <li className="nav-item "  >
          <NavLink exact activeClassName = "menu_active" className="nav-link active " aria-current="page" to="/"><span className="nav-name navbarhover" id="nav1">Home</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div> </li>
        
        <li className="nav-item programHover">
         
          <NavLink activeClassName = "menu_active" className="nav-link active " to="/Service"><span className="nav-name navbarhover" id="nav2">Program</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div>
          <span className="transitionElementProgram"></span>
          <div className="submenuprogram"><ul className="submenuprogram" >
          {/* <li>Weight Loss</li>
          <li>Weight Gain</li>
          <li>Diabetes</li>
          
          <li>PCOS</li>
          <li>Hair Skin Care</li>
          <li>Detox Diet</li>
          <li>Pregnancy</li>
          <li>Child Nutrition</li>
          <li>Thyroid</li> */}
          {
            data.map((value , key)=>{
              return <li><Link  to={{pathname:'/Program',
              state:{key : key}}} key={key}>{value.title}</Link></li>
            })
          }

        </ul></div></li>
        <li className="nav-item ">
          <NavLink activeClassName = "menu_active" className="nav-link active" to="/Contact" onClick={navCollapse}><span className="nav-name navbarhover" id="nav3">Contact</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div></li>
        <li className="nav-item " >
          <NavLink activeClassName = "menu_active" className="nav-link active" to="/About" onClick={navCollapse}><span className="nav-name navbarhover " id="nav4">About</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div> </li>
      </ul>
      
    </div>
    <div className="fullscreenWrapper fullscreenMove" id="navFullScreen">
    
    <div className="navWrapper " id="">
      <ul className="navItemWrapper">
      <button className="btn btn-outline navClose "  onClick={()=>{$("#navFullScreen").addClass("fullscreenMove");}}>
                             <CloseIcon style={{fontSize:"25px"}} />
                            </button>
      <li className="navItems  " onClick={navCollapse} >
          <NavLink exact activeClassName = "menu_active" className="nav-link active " aria-current="page" to="/"><span className="nav-name navbarhover" id="nav1">Home</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div> </li>
        
        <li className="navItems programHover" onClick={navCollapse}>
         
          <NavLink activeClassName = "menu_active" className="nav-link active " to="/Service"><span className="nav-name navbarhover" id="nav2">Program</span></NavLink>
         <div className="navbaranim start-home" id="animNavbar"></div>
         { /* <span className="transitionElementProgram"></span>
          <div className="submenuprogram"><ul className="submenuprogram" >
          {/* <li>Weight Loss</li>
          <li>Weight Gain</li>
          <li>Diabetes</li>
          
          <li>PCOS</li>
          <li>Hair Skin Care</li>
          <li>Detox Diet</li>
          <li>Pregnancy</li>
          <li>Child Nutrition</li>
          <li>Thyroid</li> }
          {
            data.map((value , key)=>{
              return <li><Link  to={{pathname:'/Program',
              state:{key : key}}} key={key}>{value.title}</Link></li>
            })
          }

        </ul></div>*/}</li>
        <li className="navItems  " onClick={navCollapse}>
          <NavLink activeClassName = "menu_active" className="nav-link active" to="/Contact"><span className="nav-name navbarhover" id="nav3">Contact</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div></li>
        <li className="navItems  " onClick={navCollapse}>
          <NavLink activeClassName = "menu_active" className="nav-link active" to="/About"><span className="nav-name navbarhover " id="nav4">About</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div> </li>
      </ul>
      
    </div></div>
  </div>
</nav>
</>
  );
}

export default Navbar;
