import React,{ Component }  from "react";
import image from '../Image/pics/bmi-2.jpg'; 
import $ from 'jquery';
import { findDOMNode } from "react-dom"; 
import reddot from '../Image/images/red.png'; 
import bluedot from '../Image/images/blue.png';
import greendot from '../Image/images/green.png';
import yellowdot from '../Image/images/yellow.png';
import CloseIcon from '@material-ui/icons/Close';   
import Styled from 'styled-components'; 

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'; 

const WeightCategory = [
  'Kilogram','Pounds'
];
const HeightCategory = [
    'Centimeter','Meter', 'Feet'
  ];
let defaultWeight = WeightCategory[0];
let defaultHeight = HeightCategory[0];

class BMI extends Component{

    constructor(props)
    {
        super(props);
        this.state= {
        heightstatus : 'Centimeter',
        weightstatus : 'Kilogram',
        height : "",
        weight : "",
        result : "",
        Feetheight : "",
        status : "",
        dot : reddot,
        red : 7,
        yellow : 7,
        green : 7,
        blue : 7,
        }
    }

    setheightstatus = (props) =>{
        let temp = props.value; 
        this.setState({heightstatus: temp}); 
        return ""
    }
    setweightstatus = (props) =>{
        let temp = props.value; 
        this.setState({weightstatus: temp}); 
        return ""
    }
    setheight = (props) =>{
        this.setState({height : props.target.value});
        return "";
    }
    setweight = (props)=>{
       
        this.setState({weight : props.target.value});
        return "";
    }
    setInch = (props) =>{
        this.setState({Feetheight : props.target.value})
    }
    calculate =()=>{
        
       
        if(this.state.weight === "" || this.state.height == ""){
        this.setState({height:"",weight:""});
        return "";
        }
        // REGEX PART 
        let reg = /^([0-9]){0,5}([\.]){0,1}([0-9]){0,5}$/;
        var temp1 = this.state.height;
        var temp = this.state.weight;
        if(reg.test((temp1))===false)
        {  
        const  a2 = findDOMNode(this.refs.google1);
        $(a2).addClass('border-color-red')
        return "";
        }
        if(reg.test((temp))===false)
        { 
            
        const a = findDOMNode(this.refs.google)
        $(a).addClass('border-color-red') 
        return "";
        }
        const e1 = findDOMNode(this.refs.google)
        const  e = findDOMNode(this.refs.output);
        const f = findDOMNode(this.refs.google1)
        $(e1).removeClass('google_text')
        $(f).removeClass('google_text')
        $(e).addClass('outnow');
  

  

      var wei = parseInt(this.state.weight);
      var hei = parseInt(this.state.height);
      var total = 0;
      
      if(this.state.weightstatus === "Kilogram" && this.state.heightstatus === "Centimeter"){
      hei = hei/100; 
      const Atemp = wei/(hei*hei);
      total  = Atemp.toFixed(1);
      this.setState({height:"",weight:"",result : total});
 
      }

      else if(this.state.weightstatus === "Kilogram" && this.state.heightstatus === "Meter")
      {
         total = (wei / (hei * hei)).toFixed(1);
         this.setState({height:"",weight:"",result : total});
      }
      else if(this.state.weightstatus === "Pounds" && this.state.heightstatus === "Inch")
      {
          total =( wei / (hei * hei) * 703).toFixed(1);
          this.setState({height:"",weight:"",result : total});
      }
      else if(this.state.weightstatus === "Pounds" && this.state.heightstatus === "Feet")
      {
          
          const heiIn = parseInt(this.state.Feetheight);
          total = ((wei / (((hei * 12) + heiIn) * ((hei * 12) + heiIn)) ) * 703).toFixed(1);
          this.setState({height:"",weight:"",Feetheight:"",result : total});
      } 
      else if(this.state.weightstatus === "Kilogram" && this.state.heightstatus === "Feet")
      {
        const Inch = (parseInt(this.state.Feetheight)/39.37);
        const feet = (parseInt(this.state.height)/3.281);
        total = (wei/(feet + Inch)).toFixed(1);
        this.setState({height:"",weight:"",Feetheight:"",result : total});
      }
      
    if(total<= 19)
    {
        this.setState({dot:bluedot,status : "UnderWeight",green : 7,blue : 10,red:7,yellow : 7})
    }

    else if(total <= 24)
    {
        this.setState({dot:greendot,status : "Healthy",green :10,blue :7,red:7,yellow : 7});
    }

    else if(total <= 30)
    {
        this.setState({dot:yellowdot,status : "OverWeight",green : 7,blue :7,red:7,yellow : 10});
    }
    else
    {
        this.setState({dot:reddot,status : "Obese",green : 7,blue : 7,red:10,yellow : 7});
    }
    }

    close = ()=>{
        const  e = findDOMNode(this.refs.output);
        $(e).removeClass('outnow');
    }
    text = ()=>{
        if(this.state.height === "")
        {
            const e = findDOMNode(this.refs.google1)
            $(e).removeClass('google_text')
        }
        const f = findDOMNode(this.refs.google)
        $(f).addClass('google_text')
        $(f).removeClass('border-color-red')
    }
    text1= ()=>{ 
        if(this.state.weight === "")
        {
            const e = findDOMNode(this.refs.google)
            $(e).removeClass('google_text')
        }
        const f = findDOMNode(this.refs.google1)
        $(f).addClass('google_text')
        $(f).removeClass('border-color-red')
    }
    render(){
        return(
        <Container className="container-fluid" style={{backgroundImage:`url(${(image)})`}}>
        
        
            <Output className="Output_for_BMI" ref="output">
            <div className="d-flex justify-content-between text-bmi">
            <p  >Your BMI Score</p>
            <CloseIcon onClick={this.close}/>
            </div>
            <div className="d-flex align-items-center justify-content-between">
            <h1 >{this.state.result}</h1>
            <div className="result-in-status">                 {/* text */}
            <h6 style={{marginLeft: "20px"}}>Your Category</h6>
            <div>
            <img src={this.state.dot}></img>
            <h6 style={{margin:"0"}}>{this.state.status}</h6>

            </div>
            </div>
            
            </div>

            <div className="bars">
            <div className="bluebars" style={{height:`${this.state.blue}px`}}></div>
            <div className="greenbars" style={{height:`${this.state.green}px`}}></div>
            <div className="yellowbars" style={{height:`${this.state.yellow}px`}}></div>
            <div className="redbars" style={{height:`${this.state.red}px`}}></div>
            </div> 
            <div className="indicator" >
                        <span>18.5</span>
                        <span>25</span>
                        <span>30</span> 
            </div>
            <div className="barText">
            <h6>Your BMI indicates that you are at a healthy weight for your height</h6>
            </div>
            </Output>


        <MAIN>
        <ROW className = "row">

            <Column >
            <div>
                   <div className="d-flex" >
                   <FLOAT   ref="google" onClick={this.text} >

                   <input className="google_random"  onChange={this.setweight}  value={this.state.weight} required></input>
                   <p className="p">Weight</p>
                   </FLOAT>
                   <Dropdown options={WeightCategory} onChange={this.setweightstatus }   value={defaultWeight}  />
                   </div>
                   <div className="d-flex">
                          
                   <FLOAT  ref="google1" onClick={this.text1}>
                    {
                    

                    (this.state.heightstatus !== 'Feet') ? <><input className="google_random"  onChange={this.setheight} value={this.state.height}  required></input> <p className="p">Height</p>  </>
                    : <Feet> 
                    <div><input className="google_random"  onChange={this.setheight}  value={this.state.height} required></input> <h5>Feet</h5></div>
                    <div><input className="google_random"   onChange={this.setInch} value={this.state.Feetheight} required></input><h5>Inch</h5> </div>
                    </Feet>
                    
                    }
                   
                   </FLOAT>
                    <Dropdown options={HeightCategory} onChange={ this.setheightstatus} name="heightstatus"  value={defaultHeight} />
                   
                   
                   </div>
            </div>
            
            <Button>
            <div className="d-flex justify-content-center p-2">
            <button onClick={this.calculate} >Calculate</button>
            </div>
            </Button>

            </Column>


        </ROW>
        </MAIN>



        </Container>


);



    }
}


export default BMI;


const Container = Styled.div`
width : 100%;
background-position : center;
background-repeat : no-repeat;
object-fit : cover; 
min-height : 400px;
position : relative;
@media(max-width : 400px)
{
    padding  : 10px;
}
`
const Output = Styled.div`
position : absolute;
z-index : 5;
padding : 010px;
background : white;
min-width : 340px;
max-width : 400px;
border-radius : 10px;
h1{ 
width : 50%;
text-align : center;
}
// display : none;
.result-in-status{ 
    margin-left : 10px;
    text-align : center;
    justify-content : between;
    div{
        display : flex;
        align-items : center;
        img{
            width : 20px;
            height : 20px;
            object-fit : contain;
            margin-right: 5px;
        }
    }
}
@media(max-width : 400px)
{
    .result-in-status{
        font-size : 14px;
        font-weight : 500;
       
    }
}
.text-bmi{
font-size : 17px;
padding : 5px;
font-weight : 500;
color : grey;
}

`


const MAIN = Styled.div`
padding: 10px;
width : 100%;
height : 100%;

`
const ROW = Styled.div`
display : flex;
justify-content : flex-end;
`
const Column = Styled.div`
width : 500px;
padding : 10px 10px 0 ; 
background : white;
border-radius : 10px;
div{
    width: 100%;
    padding : 1px;
    gap : 10px; 

    input{
        outline : none;
        width: 100%;
        padding : 8px; 
        border-radius : 5px;
        z-index : 1;
        
    
    }
    }
    }
.Dropdown-control{
   
    border : 2px solid springgreen;
    border-radius : 5px;
    padding : 6px;
    width: 100%;
}
 
`
const FLOAT = Styled.div`
position : relative;
display : flex;
 

`
const Feet = Styled.div`
display : flex;
gap : 0px; 
align-items : center;
div{
    position : relative;
    padding : 0px;
    margin : 0;
    width : 100%; 
}
h5{
    position : absolute;
    top : 16px; 
    left : 16px;
    background : white;
    width: 38px;
    text-align : center;
    line-height : 10px;
    font-size : 16px;
    transition : all 50ms;
}
&:focus-within h5{
    top : -2px;
    transform : scale(0.9);
    width : 45px;
}

`

const Button = Styled.div`

button{
    border : 1px solid green;
    background : transparent;
    outline : none;
    border-radius : 15px;
    font-family : roboto;
    font-weight : 500;
    transition : all 350ms;
    color : green;
    &:hover{
        background : green;
        color : white;

    }   
}


`





 /*
{
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
const UL = Styled.ul`


`

const LI = Styled.li`

//  }*/

/*
all work



    <div className="container-fluid BMI" >
    

        <div className="row d-flex justify-content-between  PHONE-CLASS m-0">
        <div className="d-flex calculator">
            <p>BMI<span className=""></span> CALCULATOR</p>
            
        </div>

        <div className="col-lg-6 result " ref="slideBMI" style={{visibility:""}}>
      
        <div style={{width:"100%"}} className="setBMI">
        <Link to="/">{/*<img className="close" ref="close" src={close} onClick={this.close}/>}<CloseIcon className="close" ref="close" onClick={this.close} /></Link>
        <p style={{textAlign:"left", fontSize:"15px", lineHeight:"0px",fontWeight:"600",color:"#A9A9A9"}}>Your BMI Score</p>
                    
        <div className="main">
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
                     
                    <img className="dot" alt="." src={this.state.dot}/> 
                }
                   </div>
                   <h5 className="categoryStatus" >{this.state.text}</h5>
     
       </div>
        </div>
        </div>
    <div className="d-flex justify-content-around" style={{lineHeight:"0px",padding:"0px"}}>
     </div> 
    <div className="bars">

    <div className="bluebars" style={{height:this.state.blue, borderRadius:"5px"}}></div>
    <div className="greenbars" style={{height:this.state.green,borderRadius:"5px"}}></div>
    <div className="yellowbars" style={{height:this.state.yellow,borderRadius:"5px"}}></div>
    <div className="redbars" style={{height:this.state.red,borderRadius:"5px"}}></div>
    </div>
    {
        <div className="indicator" >
        <span className="first-indicator">18.5</span>
        <span className="second-indicator"> 25</span>
        <span className="third-indicator"> 30</span> 
        
        </div>
    }
<div className="barText">
<p>Your BMI indicates that you are at a healthy weight for your height</p>
</div>
<div className="bottom-status">
<p>Your BMI in Range : { this.state.text}</p>
</div>

</div>
</div>


{/* phone output }
{
                <div className="Slider" ref="Phoneslider">
                <div className="content-in-phone">
                   <div className="cards-for-phone">
                   <div className="p-2 d-flex justify-content-between" style={{fontSize:"15px", letterSpacing:"3px", fontWeight:"700"}}>
                   <p>BMI RESULT</p>
                    <CloseIcon ref="closephone" onClick={this.close}/> 
                   </div>
                   <div className=" Phone-bmi">
                       <div className="answer">
                       <h1 className="output_data">{this.state.result}</h1>
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
                    {
                        <div className="indicator" >
                        <span>18.5</span>
                        <span>25</span>
                        <span>30</span> 
                        
                        </div>
                    }
                   </div>
                   <div className="content-2">
                   <p >
                   Your BMI indicates that you are at a healthy weight for your height.
                   </p>
                   <p>
                    YOUR BMI RESULT :   {this.state.text}
                   </p>
                   </div>
                </div>
            </div>















}



<div className="col-lg-6 col-md-12">
<div className="BMI-start">

<div className=""> { /*row d-flex justify-content-evenly }

<div className="row "> 

<div className="col-lg-8 pt-2 col-md-9 col-12 input-BMI" ref="leave" onClick={this.click} > 

<input type="" className={ this.state.Error }  onChange={this.setweight}  value={this.state.weight}  />

<span className="floty" ref="toggle" onSelectStart="return false">Your weight</span> 

</div>


</div>


<div className="row pt-2 ">
<div className="col-lg-8  pt-2  col-md-9 col-12 input-BMI" ref="leave2"  onClick={this.click1}  > 
{
(this.state.heightstatus !== "Feet") ? 
<><input  type="" placeholder="" value={this.state.height} onChange={this.set} />
<span className="floty" ref="toggle2">Your Height</span>
</> : 
<div className="d-flex justify-content-between" style={{gap : "5%"}}>

<div>
<input  type=""  value={this.state.height} onChange={this.set} /> 
<span className="floty" ref="toggle2">Feet</span>   
</div>
<div>
<input  type=""  value={this.state.heightInch} onChange={this.setInch} />
<span className="floty" ref="toggle1">Inch</span>
</div>
</div>
}
</div>


</div>     




<div className="row pt-3">
<div className="col-lg-12  d-flex justify-content-center">
<div className="btn success" onClick={this.calculate} onMouseDown={this.leave}>Calculate BMI</div>
</div>
</div>  


</div>

</div>

</div> 

 
</div>



</div>

*/



// <div className="col-lg-4 pt-2 col-md-3 col-12 ">
//        <div className="dropdown">
//         <div className="dropdown-select">
//         <span className>{this.state.weightstatus}</span>
//        <KeyboardArrowDownIcon/>
//         </div>
//         <div className="dropdown-list">
//         <div className="dropdown-list__item" onClick={()=>{this.setState({weightstatus : "Kg"})}}>Kilogram(Kg)</div>
//         <div className="dropdown-list__item" onClick={()=>this.setState({weightstatus : "Pounds"})} >Pounds</div>
 
//         </div>

//         </div>
//         </div>













//  <div className="col-lg-4 pt-2 col-md-3 col-12 ">
        
//         <div className="" style={{borderColor :`${this.state.selectionheight}`}}>

//         {/* <select className="units  p-2 form-select" name="heightstatus" onClick={this.heightunits}>
//         <option value=  "centimeter">Centimeter</option>
//         <option value = "Feet" >Feet</option>
//         <option value= "meter ">meter</option> 
//         </select> */}
//         <div className="dropdown" onClick={this.open}>
//         <div className="dropdown-select">
//         <span className>{this.state.heightstatus}</span>
//        <KeyboardArrowDownIcon/>
//         </div>
//         <div className="dropdown-list">
//         <div className="dropdown-list__item" onClick={()=>{this.setState({heightstatus : "Centimeter"})}}>Centimeter</div>
//         <div className="dropdown-list__item" onClick={()=>this.setState({heightstatus : "Meter"})} >Meter</div>

//         <div className="dropdown-list__item" onClick={()=>this.setState({heightstatus : "Feet"})} >Feet</div>
//         </div>

//         </div>

//         </div>
 
//         </div>


