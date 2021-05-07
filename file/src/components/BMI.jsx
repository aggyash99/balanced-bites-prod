import React from "react";
import { Component } from "react";
import image from '../Image/pics/bmi-2.jpg'; 
import $ from 'jquery';
import { findDOMNode } from "react-dom";
import {Link} from 'react-router-dom'
import reddot from '../Image/images/red.png'; 
import bluedot from '../Image/images/blue.png';
import greendot from '../Image/images/green.png';
import yellowdot from '../Image/images/yellow.png';
import CloseIcon from '@material-ui/icons/Close'; 
import { BorderColor } from "@material-ui/icons";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class BMI extends Component{

    constructor(props)
    {
        super(props);
        this.state= {
            height : "",
            weight : "",
            result : "", 
            text  : "",
            red:7,
            green:7,
            yellow:7,
            blue:7,
            dot:"",
            redone : "hidden",
            yellow : "hidden",
            greenone : "hidden",
            buleone : "hidden",
            Error : "",
            heightstatus : "",
            weightstatus : "",
            selectionweight : "springgreen",
            selectionheight : "springgreen",
            heightInch : "",
     
        }

    }

    set = (props) =>{
        // if(props.target.value > 50)
        // {
        //     this.setState({Error : "YES"});
        //     return "";
        // }
        this.setState({height : props.target.value});
        
    }

    setInch = (props) =>{
        this.setState({heightInch : props.target.value})
    }
     setweight = (props)=>{
        // if(props.target.value > 50)
        // {
        //     this.setState({Error : "YES"});
        //     return "";
        // }
        this.setState({weight : props.target.value});
    }
     calculate = () =>{

        if(this.state.weightstatus == "")
        {
            this.setState({selectionweight : "red"})
        } 
        if(this.state.heightstatus == "")
        {
            this.setState({selectionheight : "red"})
        }

        const s = findDOMNode(this.refs.slideBMI);
        $(s).addClass('slideBMI');
        const f = findDOMNode(this.refs.Phoneslider)
        $(f).addClass('slide-phone')
        this.setState({green:7,red:7,yellow:7,blue:7,dot:""});
        this.setState({height:"",weight:"",heightInch:""});
      
         
       

        if(this.state.weightstatus === "Kg" && this.state.heightstatus == "centimeter"){
        const wei = this.state.weight;
        const hei = this.state.height/100;
        const Atemp = wei/(hei*hei);
        const total = Atemp.toFixed(0);
         
        this.setState({result : total});
        }
        if(this.state.weightstatus === "Kg" && this.state.heightstatus == "meter")
        {
            const wei = parseInt(this.state.weight);
            const hei = parseInt(this.state.height);
            console.log('conme')
            const total = wei / (hei * hei);
            this.setState({result : total});
        }
        if(this.state.weightstatus === "Pounds" && this.state.heightstatus == "Inch")
        {
            const wei = parseInt(this.state.weight);
            const hei = parseInt(this.state.height);
            console.log('conme')
            const total = wei / (hei * hei) * 703;
            this.setState({result : total});
        }
        if(this.state.weightstatus === "Pounds" && this.state.heightstatus == "Foot")
        {
            const wei = parseInt(this.state.weight);
            const hei = parseInt(this.state.height);
            const heiIn = parseInt(this.state.heightInch);
            console.log('conme')
            const total = (wei / (((hei * 12) + heiIn) * ((hei * 12) + heiIn)) ) * 703;
            this.setState({result : total.toFixed(0)});
        }
        if(this.state.result <= 19)
        {
            this.setState({text: "UnderWeight",blue : 10 ,blueone:"visible" ,green:7,red:7,yellow:7,redone:"hidden",greenone:"hidden",yellowone:"hidden",dot: bluedot});
        }
        else if(this.state.result <= 25)
        {
            
          //  console.log(this.state.result)
            this.setState({text : "Healthy Weight",red:7,yellow:7,blue:7,green :10,greenone:"visible",blueone:"hidden",redone:"hidden",yellowone:"hidden",dot : greendot});
        }  
        else if(this.state.result <= 30)
        {
            
           // console.log(this.state.result)
            this.setState({text : "OverWeight",green:7,yellow:7,red:7,yellow : 10, yellowone:"visible",blueone:"hidden",greenone:"hidden",redone:"hidden",dot : yellowdot});
        }
        else
        {   
            //console.log(this.state.result)
            this.setState({text : "Obese",green:7,yellow:7,blue:7,red : 10 ,dot : reddot,redone:"visible",blueone:"hidden",greenone:"hidden",yellowone:"hidden"});
        }
       
    }

    click = () =>{
        const e = findDOMNode(this.refs.toggle);
        const f = findDOMNode(this.refs.leave);

        const e1 = findDOMNode(this.refs.toggle2);
        const f1 = findDOMNode(this.refs.leave2);

        $(e).addClass("floaty") ;
        $(f).addClass("leave");
        if(this.state.height === ""){
        $(f1).removeClass("leave");
        $(e1).removeClass("floaty");
        }
    }
    leave = ()=>{
        const e = findDOMNode(this.refs.toggle);
        const f = findDOMNode(this.refs.leave);
        
        const e1 = findDOMNode(this.refs.toggle2);
        const f1 = findDOMNode(this.refs.leave2);

        $(f).removeClass("leave");
        $(e).removeClass("floaty");
        $(f1).removeClass("leave");
        $(e1).removeClass("floaty");

    }
    heightunits = (props) =>{       
        

        if(props.target.name == "weightstatus")
        {
          //  console.log(props.target.value)
            this.setState({weightstatus : props.target.value , selectionweight : "springgreen"});
            return "";
        }
        else{
        this.setState({heightstatus : props.target.value ,selectionheight : "springgreen"});      
        //console.log(props.target.value)
        return "";    
    }
    }
    
    click1 = () =>{
        const e = findDOMNode(this.refs.toggle2);
        const f = findDOMNode(this.refs.leave2);
        const e1 = findDOMNode(this.refs.toggle);
        const f1 = findDOMNode(this.refs.leave);
        $(f).addClass("leave");
        $(e).addClass("floaty") ;


        if(this.state.weight === ""){
        $(f1).removeClass("leave");
        $(e1).removeClass("floaty") ;
        }
    }
    close = () =>{
        const c = findDOMNode(this.refs.slideBMI);
        $(c).removeClass('slideBMI')
        const f = findDOMNode(this.refs.Phoneslider)
        $(f).removeClass('slide-phone')
    }

    render(){
        return(
        <div>
  
    <div className=" container-fluid BMI" style={{backgroundImage:`url(${(image)})`, position:"relative"}}>
    { //console.log(this.state.heightstatus)// 
    }

        <div className="row d-flex justify-content-between p-5 PHONE-CLASS m-0">
        <div className="d-flex calculator">
            <p>BMI<span className=""></span> CALCULATOR</p>
            
        </div>

        <div className="col-lg-6 result " ref="slideBMI" >
      
        <div style={{width:"100%"}} className="setBMI">
        <Link to="/">{/*<img className="close" ref="close" src={close} onClick={this.close}/>*/}<CloseIcon className="close" ref="close" onClick={this.close} /></Link>
                <p style={{textAlign:"left", fontSize:"15px", lineHeight:"0px",fontWeight:"600",color:"#A9A9A9"}}>Your BMI Score</p>
                    
                    <div className="main" style={{width:"100%"}}>
                    <div className="BMI-whole">
                        <input value={this.state.result} className="input-class"  readOnly ></input>
                    </div>
                    <div>
                        <div className="category-class">
                        <h5 className="category">Your Category</h5>
                        </div>
                        <div className="status">
                       
                        <div>
                            {
                                 
                                <img className="dot" src={this.state.dot}/> 
                            }
                               </div>
                               <h5 className="categoryStatus" >{this.state.text}</h5>
                 
                   </div>
                    </div>
                    </div>
                <div className="d-flex justify-content-around" style={{lineHeight:"0px",padding:"0px"}}>
                {/* <div><FontAwesomeIcon icon={faArrowDown} style={{fontSize:"15px",color:"red", visibility:this.state.redone}}></FontAwesomeIcon></div>
                <div><FontAwesomeIcon icon={faArrowDown}  style={{fontSize:"15px",color:"yellow", visibility:this.state.yellowone}}></FontAwesomeIcon></div>
                <div><FontAwesomeIcon icon={faArrowDown}  style={{fontSize:"15px",color:"green", visibility:this.state.greenone}}></FontAwesomeIcon></div>
                <div><FontAwesomeIcon icon={faArrowDown}  style={{fontSize:"15px",color:"blue", visibility:this.state.blueone}}></FontAwesomeIcon></div>
               */} </div> 
                <div className="bars">

                <div className="bluebars" style={{height:this.state.blue, borderRadius:"5px"}}></div>
                <div className="greenbars" style={{height:this.state.green,borderRadius:"5px"}}></div>
                <div className="yellowbars" style={{height:this.state.yellow,borderRadius:"5px"}}></div>
                <div className="redbars" style={{height:this.state.red,borderRadius:"5px"}}></div>
                </div>
            <div className="barText">
            <p>Your BMI indicates that you are at a healthy weight for your height. by maintaining a healthy weight, you lower your risk of developing serious health problems.</p>
            </div>
            <div className="bottom-status">
            <p>Your BMI in Range : { this.state.text}</p>
            </div>

            </div>
            </div>



            <div className="Slider" ref="Phoneslider">
            <div className="content-in-phone">
               <div className="cards-for-phone">
               <div className="p-2 d-flex justify-content-between" style={{fontSize:"15px", letterSpacing:"3px", fontWeight:"700"}}>
               <p>BMI RESULT</p>
                <CloseIcon ref="closephone" onClick={this.close}/> 
               </div>
               <div className=" Phone-bmi">
                   <div className="answer">
                   <h1>{this.state.result}</h1>
                   </div>
                   <div className="" style={{height:"0px", lineHeight:"12px" , fontSize: "15px", fontWeight:"700"}}>
                   <p>Your Category</p>
                   <p>{this.state.text}</p>
                   </div>
               </div>
               <div className="bars">
                <div className="bluebars" style={{height:this.state.blue, borderRadius:"5px"}}></div>
                <div className="greenbars" style={{height:this.state.green,borderRadius:"5px"}}></div>
                <div className="yellowbars" style={{height:this.state.yellow,borderRadius:"5px"}}></div>
                <div className="redbars" style={{height:this.state.red,borderRadius:"5px"}}></div>
                </div>
               </div>
               <div className="content-2">
               <p >
               Your BMI indicates that you are at a healthy weight for your height. by maintaining a healthy weight, you lower your risk of developing serious health problems.
               </p>
               <p>
                YOUR BMI RESULT :   {this.state.result}
               </p>
               </div>
            </div>
        </div>


         <div className="col-lg-6 col-md-12">


        <form className="BMI-start">
         
        <div className="row d-flex justify-content-evenly">
        
        <div className="row d-flex">
        <div className="col-lg-8  col-md-10 col-12 input-BMI" ref="leave" onClick={this.click} > { /* onMouseLeave={this.leave2} */}
        <input type="number " className={ this.state.Error }  onChange={this.setweight}  value={this.state.weight}  />
       
        <p className="floty" ref="toggle" onSelectStart="return false">Your weight</p> 
   
        </div>

        <div className="col-lg-4 col-md-2  col-12 ">
        
        <div className= " BMI-unit-part " style={{borderColor :`${this.state.selectionweight}`}} >
        <select className="units" name="weightstatus" onClick={this.heightunits}>
        <option value="select">Select</option>
        <option value="Kg">kg</option> 
        <option value="Pounds">Pounds</option>
        </select>
       </div>
 
        </div>
        </div>

        <div className="row d-flex "> 
        <div className="col-lg-8 col-md-10   col-12 input-BMI" ref="leave2"  onClick={this.click1}  >     
        
        {
         (this.state.heightstatus !== "Foot") ? 
        <><input  type="number" placeholder="" value={this.state.height} onChange={this.set} />
         <p className="floty" ref="toggle2">Your Height</p>
        </> : 
        <div className="d-flex justify-content-between" style={{gap : "5%"}}>
        <div>
        <input  type="number" placeholder="Feet" value={this.state.height} onChange={this.set} /> 
         </div>
         <div>
         <input  type="number" placeholder="Inch" value={this.state.heightInch} onChange={this.setInch} />
         </div>
        </div>
    }
    {     }
        </div>
        <div className="col-lg-4 col-md-2 col-12 ">
    
            <div className=" BMI-unit-part" style={{borderColor :`${this.state.selectionheight}`}}>

        <select className="units" name="heightstatus" onClick={this.heightunits}>
    <option value="select">Select</option>
    <option value = "Foot" >Feet</option>
     <option value=  "centimeter">Centimeter</option>
     <option value= "meter ">meter</option>
     <option value = "Inch" >Inch</option>
      </select>
         </div> 
        </div>
       </div>

        </div>


        <div className="row pb-2">
        <div className="col-lg-12 d-flex justify-content-center">
        <div className="btn success " onClick={this.calculate} onMouseDown={this.leave}>Calculate BMI</div>
        </div>
        </div>  
 


        </form>
        
        </div>
        

        </div>
        
        

    </div></div>
);
    }
}


export default BMI;
 
{/*
 <div className="row">
            <div className="col-lg-12 col-12 d-flex mb-3  justify-content-center" >
            <span>HEIGHT</span>
             </div>
            </div>
            <div className="row">
            <div className="col-lg-12 col-12 mb-3 d-flex justify-content-center">
            <span>WEIGHT</span>
            <input placeholder="In Kg" type="number" onChange={setweight} style={{outline:"none",padding:"5px",textAlign:"center", width:"50%"}}/>
            </div> 
            </div>


            <div className="row ">
            <div className="col-lg-12 mb-3 d-flex justify-content-around">
            <div className="btn btn-success" onClick={calculate}>calculate</div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-12 col-12 d-flex justify-content-center"  >
                <div className="col-lg-6 d-flex justify-content-center">
                {result}     
                </div>
               
            </div>
            </div>

*/ }