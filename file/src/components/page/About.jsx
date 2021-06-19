import React,{ Component } from 'react';
import Logo from '../../Image/logo.png';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';

import imgs from '../../Image/owner/bg.jpg';
import Photo from '../photo';
import owner from '../../Image/owner/owner2.png'
import img2 from '../../Image/services/doodle.jpg';
//import ProgramsFeatures from '../ProgramFeatures';
import './about.css';
import nopills from '../../Image/pics/pills.svg'
//import option from '../Image/pics/option.svg';
import options from '../../Image/pics/food.svg';
//import whatsApp from '../../Image/pics/whatsapp1.svg'
import plain from '../../Image/pics/plain1.svg'
import routine from '../../Image/pics/routine1.svg';
import logos from '../../Image/logo.png'
import Styled from 'styled-components';
 import img from '../../Image/pics/whatsapp1.svg'
import Reviewcard from '../Newcards2';
import { Link } from 'react-router-dom';
import SmallerIMG from '../../Image/images/About Smaller Img.jpeg';

class About extends Component{

  opens =()=>{
    const o = findDOMNode(this.refs.toggle);
   $(o).addClass('ankur');
   }
  

  render(){
    
  window.onload = window.scroll(0,0);
    return (
      <>


    <div className="container-fluid about g-0">
    {/* <a href="https://wa.link/k2f045"><span className="screen-bar"><img src={img}></img></span></a> */}
    <div className="row g-0">
      <div className="col-lg-12 col-md-12 mx-auto">
      <div className="food" >
<div className="alignbottomabout"id="movingpicbg">

  <div className="gradientbg" >

      <h1 className="headalignment " id="headtextaboutblur"><strong className="headHeadAbout" ><span className="aboutMobileHeading">About </span>Muskan Bansal</strong><span className="headtext"> Nutritionist & Diabetes Educator</span></h1>
    
  </div>

</div>

</div>
<div className="container-fluid position-relative overflow-hidden aboutimg2 " >
       
        <div className="row home-img" >
          <div className="col-lg-12 d-flex justify-content-around mx-auto position-relative p-0 para" >
              <img  style={{width:"100%",opacity:"0.6"}}  src={imgs} alt ="sorry"></img>
              
          
              <img className="owner1" style={{right:"40px", top:"10px"}}src={owner}></img>
               
          </div>
          <div>
         
          </div>
          {/* <div className="home-img-fil">
          </div> */}
          
        
        </div>
      </div>
    
      <div className="row d-flex">
      <div className="col-lg-8 col-md-8 " style={{paddingTop:"0px 20px 20px 20px"}}>
      <div className="col-lg-10 col-md-10 mx-auto">
    <h5 className=" subheadtext">One Of The Best Dietitian In Delhi</h5>
          <p className="text pb-2 firstletter">
      Muskan Bansal is a young & aspiring dietitian, nutritionist and Diabetes Educator <span style={{paddingLeft:"6px"}}>f</span>rom Delhi, India. She is enthusiastically working in the field of weight management and therapeutic nutrition. She believes in a natural way of achieving a healthy lifestyle & don’t recommend artificial methods like pills and supplement.</p>
      <p className="text pt-2 pb-2">
She founded Balanced Bites in 2019, located in Rohini, Delhi. She deals with individuals who are obese or suffering from lifestyle disorders and serving personalized diet plan to the clients.</p>
<p className="text pt-2 pb-2">She <span className="greenHighlight">doesn't believe in Dieting</span>, instead of this she encourages a healthy eating lifestyle by eating all your favourite food in balance with other meals. She believes in making positive, long term changes to your diet. Her plan is based on balanced diet and you will get homemade and traditional food. She encourages <span className="greenHighlight">use of food as medicine</span> with a holistic approach.
</p><p className="text pt-2 pb-2">Clients can also have free consultation and doubt handling sessions, you can get your own personalized diet plan by contacting us online with no clinic visit.

      </p>
      </div>
  <div className="row">
  
  </div>
      </div>

      <div className="col-lg-4 col-md-4 d-none d-md-block "  >
      <div className="aboutGreenBackground"><img src={SmallerIMG} alt=" "></img>
      </div>
      </div>

    </div>
    </div>
    </div>
    

    <div className="row">
     
      <div className="col-12 righttextabout "  className="carousel2 " style={{backgroundImage:`URL(${img2})`, backgroundSize:"center", objectFit : "cover", backgroundRepeat:"repeat", zIndex:"100"}} >
        <h1 style={{paddingBottom:"20px",paddingLeft:"20px", paddingTop:"20px", display:"inline-block"}}>Why choose <img className="imgWhyChoose" src={Logo}/>? </h1>
        <p className="textrightsideabout">Balanced Bites assures to offer you a lot of health benefits including complete guidance to your lifestyle plan that is supposed to base on your everyday life and diet. We educate you about the food and how small changes can result in long – term health benefits. We focus on nutrition as a sustainable lifestyle change, not just calorie counting. Our mission is to bring whole foods to your plate and nourishment to your soul by providing you with the right tools and knowledge to lead a healthy and happy life.
        </p>
        <div className="row " style={{padding:"0px 20px"}}>
            <div className="col-11 bordertemp1"><div className="textabouttable" ><span className="tickAbout">✓</span><span style={{fontSize:"30px"}}>&nbsp;</span>Customized diet plans according to your lifestyle.</div></div>
     
              
            <div className="col-11 bordertemp1"><div className="textabouttable"><span className="tickAbout">✓</span><span style={{fontSize:"30px"}}>&nbsp;</span><span className="pointAbout">No external machines, pills, or supplements required.</span></div></div>
            <div className="col-11 bordertemp1"><div className="textabouttable"><span className="tickAbout">✓</span><span style={{fontSize:"30px"}}>&nbsp;</span>Programs where you don’t feel like being on a ‘diet'.</div></div>
            
            <div className="col-11 bordertemp1"><div className="textabouttable"><span className="tickAbout">✓</span><span style={{fontSize:"30px"}}>&nbsp;</span>Flexible schedules & diet plans when you travel.</div></div>
            </div><Reviewcard style={{paddingBottom:"0px"}}/>
      </div>
    </div>
    </div>

    </>
  );
}
}


export default About;

const CenterImg = Styled.div`
//position : relative;
 
`
const Main = Styled.div`
display : flex;
justify-content : center;
position : relative;
border: 1px solid black;
 
`

const Content = Styled.div`
border: 1px solid white;
padding : 20px;
margin-bottom : 20px;
background: #f5f5f5;
cursor : pointer;
border-radius : 1000px;
box-shadow : 1px 1px 2px 2px rgb(240,240,249);
transition : all 250ms;
// &:hover{
//     box-shadow : 0px 30px 10px 0px #f9f9f9;
//     background : #ffffff;
// }
//box-shadow : 1px 0px 0px 12px #f5f5f5;
    &:hover{
        box-shadow : 2px 2px 2px 2px #b1f090;
        background-color:white;
   
    }
`
const Card = Styled.div` 

`
const Img = Styled.div`
position :relative;
cursor : pointer; 
padding-top:50px;
img{
    
border-radius : 50%;
    width : 70px;
    height : 70px; 
    position : absolute;
    bottom : 5px;
    z-index : 0;
    left : 50%;
    transform:translate(-50%);    
    background : #f9f9f9;
    transition : all 250ms;
    padding : 0px;
  
} 
`
const Writeup = Styled.div`
position : relative;
bottom : -5%;
letter-spacing: 1.5px;
text-align : center;
font-size : 19px;
font-weight: 550;
`
const Center = Styled.div`
 

img{
    width :100%;
    height : 100%;
    object-fit : contain;
}

@media (max-width : 900px)
{
    display : none;
}

`
 
const Descriptions = Styled.div`
font-size : 15px;
padding: 10px 100px;
color : #000000;
@media (max-width : 400px)
{
    padding : 10px 0px;
}
`
const MidHead = Styled.div`
color : #000000;
font-family : roboto;
`
 