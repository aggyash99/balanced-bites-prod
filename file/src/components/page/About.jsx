import React,{ Component } from 'react';
import logo from '../../Image/services/about.jpg';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';

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

class About extends Component{

  opens =()=>{
    const o = findDOMNode(this.refs.toggle);
    //const b = findDOMNode(this.refs.black);
   //$(b).addClass("black");
   $(o).addClass('ankur');
  }


  render(){
    return (
      <>


    <div className="container-fluid about g-0">
    <a href="https://wa.link/k2f045"><span className="screen-bar"><img src={img}></img></span></a>
    <div className="row g-0">
      <div className="col-lg-12 col-md-12 mx-auto">
      <div className="food">

<div className="alignbottomabout">
  <div className="gradientbg">

      <h1 className="headalignment " ><strong style={{color:"black", fontSize:"55px"}}>Muskan Bansal</strong><span className="headtext"> Nutritionist & Diabetes Educator</span></h1>

  </div>

</div>

</div>

    
      <div className="row d-flex">
      <div className="col-lg-8 col-md-8 pt-5 ">
      <div className="col-lg-10 col-md-10 mx-auto">
    <h5 className=" subheadtext">One Of The Best Dietitian In Delhi</h5>
          <p className="text pb-2 firstletter">
      Muskan Bansal is a young & aspiring dietitian, nutritionist and Diabetes Educator <span style={{paddingLeft:"6px"}}>f</span>rom Delhi, India. She is enthusiastically working in the field of weight management and therapeutic nutrition. She believes in a natural way of achieving a healthy lifestyle & don’t recommend artificial methods like pills and supplement.</p>
      <p className="text pt-2 pb-2">
She founded Balanced Bites in 2019, located in Rohini, Delhi. She deals with individuals who are obese or suffering from lifestyle disorders and serving personalized diet plan to the clients.</p>
<p className="text pt-2 pb-2">She  believes in <span className="greenHighlight">“never give up on your favourite food”</span> and she encourages a healthy eating lifestyle by eating all your favourite food in balance with other meals. Her plan is based on balanced diet and you will get homemade and traditional food. She encourages use of food as medicine with a holistic approach.
</p><p className="text pt-2 pb-2">Clients can also have free consultation and doubt handling sessions, you can get your own personalized diet plan by contacting us online with no clinic visit.

      </p>
      </div>
  <div className="row">
  
  </div>
      </div>

      <div className="col-lg-4 col-md-4  pt-5 d-none d-sm-block" >
      <img className="client" src="https://i.pinimg.com/236x/34/25/9d/34259d8b6b60a94f5e43bde242ecc26e.jpg" alt=" "></img>
      </div>

    </div>
    </div>
    </div>

    <div className="row">
      <div className="col-6 d-none d-sm-block" style={{paddingRight:"0px"}}>
        <div className="" style={{width:"100%", paddingRight:"0px "}}>
        < img  className="leftimageabout"  src={logo} alt="Thank You!" style={{width:"100%"}}/>
        </div>
      </div>
      <div className="col-lg-6 col-12 righttextabout fadebackground" >
        <h1 style={{paddingBottom:"20px"}}>Why choose <span className="greenHighlight" style={{fontSize:"40px"}}>Balanced Bites</span>? </h1>
        <p className="textrightsideabout">Balanced Bites assures to offer you a lot of health benefits including complete guidance to your lifestyle plan that is supposed to base on your everyday life and diet. We educate you about the food and how small changes can result in long – term health benefits. We focus on nutrition as a sustainable lifestyle change, not just calorie counting. Our mission is to bring whole foods to your plate and nourishment to your soul by providing you with the right tools and knowledge to lead a healthy and happy life.
        </p>
       
      </div>
    </div>
    </div>

    <div className="container" style={{paddingTop:"50px"}}>
        


        <div className="row">

            <div className="col-lg-4">
            <Main className="col-lg-12" >
            <Content>
            <Card>
            <Img>
            <img alt="alt" src={options}></img>
            </Img>
            <Writeup>✓  Customized diet plans according to your lifestyle.</Writeup>
            </Card>
            </Content>
            </Main> 

            <Main className="col-lg-12">
                
                <Content> 
                    <Card>
                <Img>
                <img alt="alt" src={routine}></img>
                </Img>
                <Writeup>✓  No external machines, pills, or supplements required.</Writeup>
                </Card>
                
                </Content>
                </Main>
            </div>
            
            
    
    
    
            
            <CenterImg className="col-lg-4 -Center" style={{paddingTop:"10%"}}>
            <div className="col-12">
            <Center>
            <img alt="alt" src={logos}></img>
            <div className="justifycontentcenter" style={{paddingTop:"20px"}}>
          <a href="./contact">
          <button className="  btnabout ">Contact Us</button></a>
        </div>
            </Center>
            </div>
            </CenterImg>
    
    
    
    
    
            
            <div className="col-lg-4">

            <Main className="col-lg-12">
                
            <Content>
                <Card>
            <Img>
            <img alt="alt" src={nopills}></img>
            </Img>
            <Writeup>✓  Programs where you don’t feel like being on a ‘diet'.</Writeup>
            </Card>
            </Content>
            </Main> 

            <Main className="col-lg-12">
            
            <Content>
                <Card>
            <Img>
            <img alt="alt" src={plain}></img>
            </Img>
           
            <Writeup>✓  Flexible schedules & diet plans when you travel.</Writeup>
            </Card>
            </Content>
                </Main>

            </div>
             
            
            
            
                
        </div>
               
          
    
    </div>
    <Reviewcard style={{paddingBottom:"0px"}}/>
    
    
    );

    </>
  );
}
}


export default About;

const CenterImg = Styled.div`
//position : relative;
 
`
const Main = Styled.div`
padding : 5% 2%;
display : flex;
justify-content : center;
position : relative;

 
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
width : 200px;
height : 200px;
padding :20px 0px;
margin : 10px 20px;

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
  //  box-shadow : 1px 0px 0px 12px #f5f5f5;
   // &:hover{
   //    box-shadow : 0px 0px 0px 6px #b8f090;
   //
   // }
} 
`
/*
const Heading = Styled.div`
padding : 5px;
text-align : center;
font-weight : 600;
font-family : roboto;
`*/
const Writeup = Styled.div`
position : relative;
bottom : -5%;
letter-spacing: 1.5px;
text-align : center;
font-size : 19px;
font-weight: 550;
`
const Center = Styled.div`
// width : 100%;  
// display : flex;
// justify-content : center; 

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
/*
const Top = Styled.div`
text-align : center;
font-size : 20px;
letter-spacing : 1.2px;
color: green;
font-weight : 600;
padding : 20px;
`
const Mainhead = Styled.span`
font-size : 30px;
word-spacing : 5px;
font-family : roboto, sans-serif;
padding : 5px 0px;
`
*/
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
/*
const Bottom = Styled.div`
// position: relative;

// @media (max-width : 500px)
// {
//     top : 0;
// }
`

const LAST = Styled.div`
margin-top : -40px;
display : flex;
justify-content : center;
@media(max-width : 700px)
{
    margin-top : 0px;
    
}
`
*/