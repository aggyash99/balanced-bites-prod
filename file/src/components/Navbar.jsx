import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../Image/logo.png';
import $ from 'jquery';
import './Navbar.css';
const Navbar = props => {
  var currentActive =1;
  if(props.pname=="/")
  {
    currentActive=1;
  }
  else if(props.pname=="/Contact")
  {
    currentActive=3;
  }
  else if(props.pname=="/About")
  {
    currentActive=4;
  }
  
  else if(props.pname=="/Service")
  {
    currentActive=2;
  }
  clicknav();
  function removeAll()
  {
    
    $("#animNavbar").removeClass("navbaranimSit1");
    
    $("#animNavbar").removeClass("navbaranimSit2");
    
    $("#animNavbar").removeClass("navbaranimSit3");
    
    $("#animNavbar").removeClass("navbaranimSit4");
    $("#nav1").removeClass("navbarhover2");
    $("#nav2").removeClass("navbarhover2");
    $("#nav3").removeClass("navbarhover2");
    $("#nav4").removeClass("navbarhover2");
  }
window.onload=()=>
{
  clicknav();
}
var i=1;
function clicknav()
{ if(i++==1)console.log("callactive");
    
    switch(currentActive)
    {
      case 1: console.log("fncall1");
             $("#animNavbar").addClass("navbaranimSit1");  $("#animNavbar").removeClass("navbaranimSit2");
    
             $("#animNavbar").removeClass("navbaranimSit3");
             $("#nav1").addClass("navbarhover2");
             
             $("#animNavbar").removeClass("navbaranimSit4");break;
      
      case 2:   $("#animNavbar").removeClass("navbaranimSit1");
   
      $("#animNavbar").removeClass("navbaranimSit3");
      $("#nav2").addClass("navbarhover2");
      $("#animNavbar").removeClass("navbaranimSit4");
             $("#animNavbar").addClass("navbaranimSit2");break;
      case 3:  $("#animNavbar").removeClass("navbaranimSit1");
    
      $("#animNavbar").removeClass("navbaranimSit2"); 
      $("#animNavbar").removeClass("navbaranimSit4");
     
      $("#nav3").addClass("navbarhover2");
             $("#animNavbar").addClass("navbaranimSit3");
             break;
      case 4:   $("#animNavbar").removeClass("navbaranimSit1");
    
      $("#animNavbar").removeClass("navbaranimSit2"); $("#nav4").addClass("navbarhover2");
      
      $("#animNavbar").removeClass("navbaranimSit3");
    
             $("#animNavbar").addClass("navbaranimSit4");break;
    }if($("#animNavbar").hasClass("navbaranimSit3"))
    {console.log("true");
    }
    else
    console.log("false");
  }
  function mousein1(){
  removeAll();
    $("#animNavbar").addClass("navbaranimSit1");
    $("#nav1").addClass("navbarhover2");
   
  }
  function mousein2(){
    removeAll();
    $("#animNavbar").addClass("navbaranimSit2");
    $("#nav2").addClass("navbarhover2");

  }
  function mousein3(){
    removeAll();
    $("#animNavbar").addClass("navbaranimSit3");
    $("#nav3").addClass("navbarhover2");

  }
  function mousein4(){
    removeAll();
    $("#animNavbar").addClass("navbaranimSit4");
    $("#nav4").addClass("navbarhover2");
  
  }
    function mouseout1(){
      
    removeAll();
      if(currentActive!=1){
      $("#animNavbar").removeClass("navbaranimSit1");
      $("#nav1").removeClass("navbarhover2");
    }clicknav();
    }
    function mouseout2(){
      
    removeAll();
      if(currentActive!=2){
      $("#animNavbar").removeClass("navbaranimSit2");
      $("#nav2").removeClass("navbarhover2");}
      clicknav();}
    function mouseout3(){
      
    removeAll();
      if(currentActive!=3){
      $("#animNavbar").removeClass("navbaranimSit3");
      $("#nav3").removeClass("navbarhover2");}
      clicknav();
    }
    function mouseout4(){
      
    removeAll();
      if(currentActive!=4){
      $("#animNavbar").removeClass("navbaranimSit4");
      $("#nav4").removeClass("navbarhover2");}
      clicknav();
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
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </nav>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto gap-2 ">
        <div className="navbaranim start-home" id="animNavbar"></div>
      <li className="nav-item " onMouseEnter={mousein1} onMouseLeave={mouseout1} onClick={()=>{currentActive=1;clicknav();}} >
          <NavLink exact activeClassName = "menu_active" className="nav-link active " aria-current="page" to="/"><span className="nav-name navbarhover" id="nav1">Home</span></NavLink>
        </li>
        
        <li className="nav-item programHover" onMouseEnter={mousein2} onMouseLeave={mouseout2} onClick={()=>{currentActive=2;clicknav();}}>
         
          <NavLink activeClassName = "menu_active" className="nav-link active " to="/Service"><span className="nav-name navbarhover" id="nav2">Program</span></NavLink>
        
          <span className="transitionElementProgram"></span>
          <div className="submenuprogram" ><ul className="submenuprogram" >
          <li>Weight Loss</li>
          <li>Weight Gain</li>
          <li>Diabetes</li>
          
          <li>PCOS</li>
          <li>Hair Skin Care</li>
          <li>Detox Diet</li>
          <li>Pregnancy</li>
          <li>Child Nutrition</li>
          <li>Thyroid</li>
        </ul></div></li>
        <li className="nav-item " onMouseEnter={mousein3} onMouseLeave={mouseout3} onClick={()=>{currentActive=3;clicknav();}}>
          <NavLink activeClassName = "menu_active" className="nav-link active" to="/Contact"><span className="nav-name navbarhover" id="nav3">Contact</span></NavLink>
        </li>
        <li className="nav-item " onMouseEnter={mousein4} onMouseLeave={mouseout4} onClick={()=>{currentActive=4;clicknav();}}>
          <NavLink activeClassName = "menu_active" className="nav-link active" to="/About"><span className="nav-name navbarhover " id="nav4">About</span></NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</>
  );
}

export default Navbar;
