import React from 'react'
import { NavLink , Link } from 'react-router-dom';
import logo from '../Image/logo.png';
import $ from 'jquery';
import './Navbar.css';
import data from '../Data/Sdata';
import DropDownIcon from '@material-ui/icons/ArrowDropDown';
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
  function dropdownOpen()
  {
    console.log(dropOpen);
              document.getElementById("dropdown").style.color="#11c220";
              document.getElementById("dropdown").style.transform="rotateZ(180deg)";
              
              dropOpen=1;
  }
function dropdownClose()
{
  console.log(dropOpen);
              document.getElementById("dropdown").style.color="black";
              
              document.getElementById("dropdown").style.transform="rotateZ(0deg)";
              dropOpen=0;
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
  var dropOpen=0;
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
     <a className="btn btn-outline  navHamBurger" id="primaryHamButton" onClick={()=>{
       console.log(navOpen);
       if(navOpen==0)
       {
        navOpen=1;
         navExpand();
       }else
       { navOpen=0;
         navCollapse();
        
         
       }
     }}>
    <div><span className="hamMod ham1" id="hamOpt"></span><span className="hamMod ham2" id="hamOpt2"></span><span className="hamMod ham3" id="hamOpt3"></span>
    </div>      </a>
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
      
    </div> <a className="btn btn-outline navClose fullscreenMove2" id="navClose"  onClick={()=>{navCollapse();navOpen=0;console.log(navOpen)}}>
                 
                            </a>
    <div className="fullscreenWrapper fullscreenMove" id="navFullScreen">
    
    <div className="navWrapper " id="">
      <ul className="navItemWrapper">
     
      <li className="navItems  " onClick={navCollapse} >
          <NavLink exact activeClassName = "menu_active" className="nav-link active " aria-current="page" to="/"><span className="nav-name navbarhover navItemMobile" id="nav1">Home</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div> </li>
        
        <li className="navItems programHover">
      <div style={{display:"inline-block", width:"1000px"}}>    <NavLink activeClassName = "menu_active" className="nav-link active " to="/Service"><span className="nav-name navbarhover navItemMobile" id="nav2"  onClick={navCollapse}>Program</span></NavLink>
          <a id="dropdown" className=" btn subMenuDropDownIcon " type="button" data-bs-toggle="collapse" data-bs-target="#subMenuMobile" aria-controls="subMenuMobile" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{
        
            if(dropOpen)
            { dropdownClose();
            }
            else
            { 
              dropdownOpen();
            }
          }}>
      <DropDownIcon/>
    </a></div>
         <div className="navbaranim start-home" id="animNavbar"></div>
           <span className="transitionElementProgram"></span>
             <div className="submenuMobile collapse" id="subMenuMobile"><ul className="submenuUL" >
   
          {
            data.map((value , key)=>{
              return <li><Link  to={{pathname:'/Program',
              state:{key : key}}} key={key}>{value.title}</Link></li>
            })
          }

        </ul></div></li>
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
