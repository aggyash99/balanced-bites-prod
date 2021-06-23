import React from 'react'
import { NavLink , Link } from 'react-router-dom';
import logo from '../Image/logo.png';
import $ from 'jquery';
import './Navbar.css';
import data from '../Data/Sdata';
import DropDownIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
function Navbar() {
  function navCollapse(){
    navOpen=0;
    $("#navFullScreen").addClass("fullscreenMove");
    $("#navClose").addClass("fullscreenMove2");
    $("#hamOpt").removeClass("hamTransform");
    $("#hamOpt2").removeClass("hamTransform2");
    $("#hamOpt3").removeClass("hamTransform3");
    $("#primaryHamButton").trigger("focus");
    dropdownClose();
   
  }function navExpand(){
    $("#navFullScreen").removeClass("fullscreenMove");
    $("#navClose").removeClass("fullscreenMove2");
    $("#hamOpt").addClass("hamTransform");
    $("#hamOpt2").addClass("hamTransform2");
    $("#hamOpt3").addClass("hamTransform3");
    navOpen=1;
  }
  function dropdownOpen()
  {
              $("#subMenuMobile").addClass("submenuMove");
              $("#navFullScreen").addClass("submenuMove2");
              dropOpen=1;
  }
function dropdownClose()
{
              $("#subMenuMobile").removeClass("submenuMove");
              $("#navFullScreen").removeClass("submenuMove2");
              dropOpen=0;
}
  window.onscroll=function()
    { if($(window).width()>450){
       if(document.getElementById("movingpicbg"))
    document.getElementById("movingpicbg").style.backdropFilter="blur("+(0.05*window.scrollY)+"px)";
    var dynWidth;
    var dynWidthDropDown;
      if(window.scrollY<125)
      {
        $("#nav1").addClass("navSmall");
        $("#nav2").addClass("navSmall");
        $("#nav3").addClass("navSmall");
        $("#nav4").addClass("navSmall");
        dynWidth=240;
        dynWidthDropDown=17;
      }
      else if(window.scrollY>195)
      {
        $("#nav1").removeClass("navSmall");
        $("#nav2").removeClass("navSmall");
        $("#nav3").removeClass("navSmall");
        $("#nav4").removeClass("navSmall");
        dynWidth=170;
        dynWidthDropDown=5.5;
      }
      else
      {
        dynWidth=(125-window.scrollY)+240;
        dynWidthDropDown=17-(window.scrollY-125)/6 ;
      }}
      else
      {
        if(document.getElementById("movingpicbg"))
    document.getElementById("movingpicbg").style.backdropFilter="blur("+(0.05*window.scrollY)+"px)";
    var dynWidth;
    var dynWidthDropDown;
      if(window.scrollY<125)
      {
        $("#nav1").addClass("navSmall");
        $("#nav2").addClass("navSmall");
        $("#nav3").addClass("navSmall");
        $("#nav4").addClass("navSmall");
        dynWidth=130;
        dynWidthDropDown=17;
      }
      else if(window.scrollY>195)
      {
        $("#nav1").removeClass("navSmall");
        $("#nav2").removeClass("navSmall");
        $("#nav3").removeClass("navSmall");
        $("#nav4").removeClass("navSmall");
        dynWidth=130;
        dynWidthDropDown=5.5;
      }
      else
      {
        dynWidth=130
        dynWidthDropDown=17-(window.scrollY-125)/6 ;
      }
      }
        document.getElementById("brandImg").style.width=dynWidth+"px";
      document.getElementById("smp").style.margin=dynWidthDropDown+"px 0 0 0";
    }
  var navOpen=0;
  var dropOpen=0;
  return (
      <>
    {
      // HEADER END
    }
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top top-0"  ><a className="btn btn-outline  navHamBurger" id="primaryHamButton" onClick={()=>{
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
    <div style={{display:"block"}}><span className="hamMod ham1" id="hamOpt"></span><span className="hamMod ham2" id="hamOpt2"></span><span className="hamMod ham3" id="hamOpt3"></span>
    </div>      </a>
  <div className="container-fluid" style={{justifyContent:"center"}}>
  <nav className="d-flex">
    <div style={{display:"inherit"}}>
     <NavLink className="navbar-brand " to="/"><img className="img-fluid img-thumbnail Navbar-image navImg2"  src={logo} alt="Balanced Bites" id="brandImg" style={{}}/></NavLink></div>
     
    </nav>
    <div className=" collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto ">
       
      <li className="nav-item navDesktop"  >
          <NavLink exact activeClassName = "menu_active" className="nav-link active " aria-current="page" to="/"><span className="nav-name navbarhover" id="nav1">Home</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div> </li>
      <li className="nav-item  navDesktop" >
          <NavLink activeClassName = "menu_active" className="nav-link active" to="/About" onClick={navCollapse}><span className="nav-name navbarhover " id="nav4">About</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div> </li>
        
        <li className="nav-item programHover navDesktop">
         
          <NavLink activeClassName = "menu_active" className="nav-link active " to="/Service"><span className="nav-name navbarhover" id="nav2">Program</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div>
          <span className="transitionElementProgram"></span>
          <div className="submenuprogram" id="smp"><ul className="submenuprogram" >
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
              return <Link  to={{pathname:'/Program',
              state:{key : key}}} key={key}><li>{value.title}</li></Link>
            })
          }

        </ul></div></li>
        <li className="nav-item  navDesktop">
          <NavLink activeClassName = "menu_active" className="nav-link active" to="/Contact" onClick={navCollapse}><span className="nav-name navbarhover" id="nav3">Contact</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div></li>
      </ul>
      
    </div> <a className="btn btn-outline navClose fullscreenMove2" id="navClose"  onClick={()=>{navCollapse();navOpen=0;console.log(navOpen)}}>
                 
                            </a>
    <div className="fullscreenWrapper fullscreenMove" id="navFullScreen">
    
    <div className="navWrapper submenuprogram2" id="navitemwrappermobile">
      <ul className="navItemWrapper  " id="">
     
      <li className="navItems  " onClick={navCollapse} >
          <NavLink exact activeClassName = "menu_active" className="nav-link active " aria-current="page" to="/"><span className="nav-name  navItemMobile" id="nav1">Home</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div> </li>
        
        <li className="navItems programHover"><div className="dropdownLine"><NavLink activeClassName = "menu_active" className="nav-link active " to="/Service" style={{display:"inline-block"}}><span className="nav-name  navItemMobile" id="nav2"  onClick={navCollapse}>Program</span></NavLink>
        <a id="dropdown"style={{trasfrom:"rotateZ(90deg)"}} className=" btn  subMenuDropDownIcon" type="button"onClick={()=>{
        
        if(dropOpen)
        { dropdownClose();
        }
        else
        { 
          dropdownOpen();
        }
      }}>   
      <DropDownIcon />
    </a></div>
           <span className="transitionElementProgram"></span>
             <div className="submenuMobile " id="subMenuMobile"><ul className="submenuUL" >
            <li className="backiconnavli"><a id="dropdown" className=" btn  subMenuDropDownIcon2" type="button"onClick={()=>{
        
        if(dropOpen)
        { dropdownClose();
        }
        else
        { 
          dropdownOpen();
        }
      }}>   
      <ArrowBackIcon/>
    </a>
    </li> 
          {
            data.map((value , key)=>{
              return <Link  to={{pathname:'/Program',
              state:{key : key}}} key={key} onClick={navCollapse}><li>{value.title}</li></Link>
            })
          }

        </ul></div></li>
        <li className="navItems  " onClick={navCollapse}>
          <NavLink activeClassName = "menu_active" className="nav-link active" to="/Contact"><span className="nav-name  navItemMobile" id="nav3">Contact</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div></li>
        <li className="navItems  " onClick={navCollapse}>
          <NavLink activeClassName = "menu_active" className="nav-link active" to="/About"><span className="nav-name  navItemMobile" id="nav4">About</span></NavLink>
          <div className="navbaranim start-home" id="animNavbar"></div> </li>
      </ul>
      
    </div></div>
  </div>
</nav>
</>
  );
}

export default Navbar;
