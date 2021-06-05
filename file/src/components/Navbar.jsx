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
    $("#navClose").addClass("fullscreenMove2");
    $("#hamOpt").removeClass("hamTransform");
    $("#hamOpt2").removeClass("hamTransform2");
    $("#hamOpt3").removeClass("hamTransform3");
    $("#primaryHamButton").trigger("focus");
  }function navExpand(){
    $("#navFullScreen").removeClass("fullscreenMove");
    $("#navClose").removeClass("fullscreenMove2");
    $("#hamOpt").addClass("hamTransform");
    $("#hamOpt2").addClass("hamTransform2");
    $("#hamOpt3").addClass("hamTransform3");
  }
  window.onscroll=function()
    {  if(document.getElementById("movingpicbg"))
    document.getElementById("movingpicbg").style.backdropFilter="blur("+(0.05*window.scrollY)+"px)";
      if(window.scrollY>125)
      {
        $("#nav1").addClass("navSmall");
        $("#nav2").addClass("navSmall");
        $("#nav3").addClass("navSmall");
        $("#nav4").addClass("navSmall");
        
        $("#brandImg").removeClass("navImg2");
      }
      else
      {
        $("#nav1").removeClass("navSmall");
        $("#nav2").removeClass("navSmall");
        $("#nav3").removeClass("navSmall");
        $("#nav4").removeClass("navSmall");
        $("#brandImg").addClass("navImg2");
        

      }
    }
  var navOpen=0;
  return (
      <>
    {
      // HEADER END
    }
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-lg-top top-0"  >
  <div className="container-fluid">
  <nav className="d-flex">
    <div>
     <NavLink className="navbar-brand " to="/"><img className="img-fluid img-thumbnail Navbar-image navImg2"  src={logo} alt="Balanced Bites" id="brandImg" style={{}}/></NavLink></div>
     <button className="btn btn-outline  navHamBurger" id="primaryHamButton" onClick={()=>{
       if(navOpen==0)
       {
         navExpand();
         navOpen=1;
       }else
       {
         navCollapse();
         navOpen=0;
         
       }
     }}>
    <div><span className="hamMod ham1" id="hamOpt"></span><span className="hamMod ham2" id="hamOpt2"></span><span className="hamMod ham3" id="hamOpt3"></span>
    </div>      </button>
    </nav>
    <div className=" collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto ">
       
      <li className="nav-item navDesktop"  >
          <NavLink exact activeClassName = "menu_active" className="nav-link active " aria-current="page" to="/"><span className="nav-name navbarhover" id="nav1">Home</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div> </li>
        
        <li className="nav-item programHover navDesktop">
         
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
        <li className="nav-item  navDesktop">
          <NavLink activeClassName = "menu_active" className="nav-link active" to="/Contact" onClick={navCollapse}><span className="nav-name navbarhover" id="nav3">Contact</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div></li>
        <li className="nav-item  navDesktop" >
          <NavLink activeClassName = "menu_active" className="nav-link active" to="/About" onClick={navCollapse}><span className="nav-name navbarhover " id="nav4">About</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div> </li>
      </ul>
      
    </div> <button className="btn btn-outline navClose fullscreenMove2" id="navClose"  onClick={()=>{navCollapse();}}>
                 
                            </button>
    <div className="fullscreenWrapper fullscreenMove" id="navFullScreen">
    
    <div className="navWrapper " id="">
      <ul className="navItemWrapper">
     
      <li className="navItems  " onClick={navCollapse} >
          <NavLink exact activeClassName = "menu_active" className="nav-link active " aria-current="page" to="/"><span className="nav-name navbarhover navItemMobile" id="nav1">Home</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div> </li>
        
        <li className="navItems programHover" onClick={navCollapse}>
         
          <NavLink activeClassName = "menu_active" className="nav-link active " to="/Service"><span className="nav-name navbarhover navItemMobile" id="nav2">Program</span></NavLink>
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
          <NavLink activeClassName = "menu_active" className="nav-link active" to="/Contact"><span className="nav-name navbarhover navItemMobile" id="nav3">Contact</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div></li>
        <li className="navItems  " onClick={navCollapse}>
          <NavLink activeClassName = "menu_active" className="nav-link active" to="/About"><span className="nav-name navbarhover navItemMobile" id="nav4">About</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div> </li>
      </ul>
      
    </div></div>
  </div>
</nav>
</>
  );
}

export default Navbar;
