import React, { Component } from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import CloseIcon from '@material-ui/icons/Close';
import Styled from 'styled-components';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import p from '../Image/Review/logo.svg'
const WeightCategory = ['Kg', 'Pounds'];
const HeightCategory = ['Centimeter', 'Feet'];
let defaultWeight = WeightCategory[0];
let defaultHeight = HeightCategory[0];

class BMI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heightstatus: 'Centimeter',
      weightstatus: 'Kg',
      height: '',
      weight: '',
      result: '',
      Feetheight: '',
      status: '',

      red: 7,
      yellow: 7,
      green: 7,
      blue: 7,
      content: '',
      textcolor: '',
    };
  }

  setheightstatus = props => {
    let temp = props.value;
    this.setState({ heightstatus: temp });
    return '';
  };
  setweightstatus = props => {
    let temp = props.value;
    this.setState({ weightstatus: temp });
    return '';
  };
  setheight = props => {
    this.setState({ height: props.target.value });
    return '';
  };
  setweight = props => {
    const e = findDOMNode(this.refs.output);
    $(e).removeClass('outnow');
    this.setState({ weight: props.target.value });
    return '';
  };
  setInch = props => {
    this.setState({ Feetheight: props.target.value });
  };
  calculate = () => {
    if (this.state.weight === '' || this.state.weight === '0') {
      const a2 = findDOMNode(this.refs.google);
      $(a2).addClass('border-color-red');
      return '';
    }

    if (
      (this.state.height === '' && this.state.heightstatus !== 'Feet') ||
      parseInt(this.state.height) === 0
    ) {
      const a2 = findDOMNode(this.refs.google1);
      $(a2).addClass('border-color-red');
      return '';
    }
    // REGEX PART
    let reg = /^([0-9]){0,5}([.]){0,1}([0-9]){0,5}$/;
    var temp1 = this.state.height;
    var temp = this.state.weight;
    if (reg.test(temp1) === false) {
      const a2 = findDOMNode(this.refs.google1);
      $(a2).addClass('border-color-red');
      return '';
    }
    if (reg.test(temp) === false) {
      const a = findDOMNode(this.refs.google);
      $(a).addClass('border-color-red');
      return '';
    }
    const e1 = findDOMNode(this.refs.google);
    const e = findDOMNode(this.refs.output);
    const f = findDOMNode(this.refs.google1);
    $(e1).removeClass('google_text');
    $(f).removeClass('google_text');

    const a = findDOMNode(this.refs.google);
    $(a).removeClass('border-color-red');
    const b = findDOMNode(this.refs.google1);
    $(b).removeClass('border-color-red');

    var wei = parseInt(this.state.weight);
    var hei = parseInt(this.state.height);
    var total = 0;

    if (
      this.state.weightstatus === 'Kg' &&
      this.state.heightstatus === 'Centimeter'
    ) {
      hei = hei / 100;
      const Atemp = wei / (hei * hei);
      total = Atemp.toFixed(1);
      this.setState({ height: '', weight: '', result: total });
    } else if (
      this.state.weightstatus === 'Kg' &&
      this.state.heightstatus === 'Meter'
    ) {
      console.log(hei);
      total = (wei / (hei * hei)).toFixed(1);
      this.setState({ height: '', weight: '', result: total });
    } else if (
      this.state.weightstatus === 'Pounds' &&
      this.state.heightstatus === 'Meter'
    ) {
      const height = hei / 39.37;

      total = (wei / (height * height)).toFixed(1);
      this.setState({ height: '', weight: '', result: total });
    } else if (
      this.state.weightstatus === 'Pounds' &&
      this.state.heightstatus === 'Centimeter'
    ) {
      const Centiheight = hei / 100;
      const height = Centiheight / 39.37;

      total = (wei / (height * height)).toFixed(1);
      this.setState({ height: '', weight: '', result: total });
    } else if (
      this.state.weightstatus === 'Pounds' &&
      this.state.heightstatus === 'Feet'
    ) {
      let heiIn = parseInt(this.state.Feetheight);
      if (this.state.height === '') hei = 0;
      if (heiIn === '') heiIn = 0;

      console.log(wei + '' + hei + '' + heiIn);
      total = ((wei / ((hei * 12 + heiIn) * (hei * 12 + heiIn))) * 703).toFixed(
        1
      );
      this.setState({ height: '', weight: '', Feetheight: '', result: total });
    } else if (
      this.state.weightstatus === 'Kg' &&
      this.state.heightstatus === 'Feet'
    ) {
      var Inch = 0;
      var feet = 0;
      if (this.state.Feetheight !== '') Inch = parseInt(this.state.Feetheight);
      if (this.state.height !== '') feet = parseInt(this.state.height) * 12;
      total = (
        wei /
        ((feet + Inch) * 0.0254 * ((feet + Inch) * 0.0254))
      ).toFixed(1);
      this.setState({ height: '', weight: '', Feetheight: '', result: total });
    }

    if (total <= 19) {
      this.setState({
        status: 'UnderWeight',
        green: 7,
        blue: 10,
        red: 7,
        yellow: 7,
        content:
          'A BMI of less than 18.5 indicates that you may need to gain some weight.',
        textcolor: '#4faeea',
      });
    } else if (total <= 24) {
      this.setState({
        status: 'Healthy',
        green: 10,
        blue: 7,
        red: 7,
        yellow: 7,
        content:
          'Your BMI indicates that you are at a healthy weight for your height.',
        textcolor: '#57dd41',
      });
    } else if (total <= 30) {
      this.setState({
        status: 'OverWeight',
        green: 7,
        blue: 7,
        red: 7,
        yellow: 10,
        content:
          'A BMI of 25-29.9 indicates that you may be advised to lose some weight for better health. ',
        textcolor: '#efda40',
      });
    } else {
      this.setState({
        status: 'Obese',
        green: 7,
        blue: 7,
        red: 10,
        yellow: 7,
        content:
          'A BMI of over 30 indicates that your health may be at risk if you do not lose weight',
        textcolor: 'red',
      });
    }

    $(e).addClass('outnow');
    // if(total <= 60)
    // else
    // {
    //     const a = findDOMNode(this.refs.google)
    //     $(a).addClass('border-color-red')
    //     const b = findDOMNode(this.refs.google1)
    //     $(b).addClass('border-color-red')
    // }
  };

  close = () => {
    const e = findDOMNode(this.refs.output);
    $(e).removeClass('outnow');
  };
  text = () => {
    if (this.state.height === '') {
      const e = findDOMNode(this.refs.google1);
      $(e).removeClass('google_text');
    }
    const f = findDOMNode(this.refs.google);
    $(f).addClass('google_text');
    $(f).removeClass('border-color-red');
  };
  text1 = () => {
    if (this.state.weight === '') {
      const e = findDOMNode(this.refs.google);
      $(e).removeClass('google_text');
    }
    const f = findDOMNode(this.refs.google1);
    $(f).addClass('google_text');
    $(f).removeClass('border-color-red');
  };

  render() {
    return (
      <Container
        className="container-fluid ="
        style={{
          backgroundImage: `url(https://res.cloudinary.com/balance-bites/image/upload/v1624256688/Home_carousel/Bmi/bmi-5_v6elbc.jpg)`,
        }}
      >
        <MAIN>
          <Output className="Output_for_BMI" ref="output">
            <div className="text-bmi">
              <CloseIcon className="cross" onClick={this.close} />
            </div>

            <div>
              <p
                style={{
                  lineHeight: '10px',
                  fontWeight: '600',
                  color: 'grey',
                  fontSize: '19px',
                  textAlign: 'center',
                }}
              >
                Your BMI Result{' '}
              </p>
            </div>

            <div className="p-2 text-center">
              <div>
                <h6
                  style={{
                    margin: '0px 0px 18px 0px',
                    fontSize: '19px',
                    fontWeight: '800',
                    color: `${this.state.textcolor}`,
                  }}
                >
                  {this.state.status}
                </h6>
              </div>
              <h1 style={{ padding: '0' }}>
                <span>{this.state.result}</span>
              </h1>
            </div>

            <div className="bars">
              <div
                className="bluebars"
                style={{ height: `${this.state.blue}px` }}
              ></div>
              <div
                className="greenbars"
                style={{ height: `${this.state.green}px` }}
              ></div>
              <div
                className="yellowbars"
                style={{ height: `${this.state.yellow}px` }}
              ></div>
              <div
                className="redbars"
                style={{ height: `${this.state.red}px` }}
              ></div>
            </div>
            <div className="indicator">
              <span className="first-indicator">18.5</span>
              <span className="second-indicator">25</span>
              <span className="third-indicator">30</span>
            </div>
            <div className="barText p-1">
              <h6 style={{ fontSize: '17px', fontWeight: '550' }}>
                {this.state.content}
              </h6>
            </div>
          </Output>

          <ROW className="row">
            <Heading id="new" onClick={this.c}>
              {' '}
              BMI CALCULATOR{' '}
            </Heading>
            <Column>
              <div>
                <div className="d-flex">
                  <FLOAT ref="google" onClick={this.text}>
                    <input
                      className="google_random"
                      onChange={this.setweight}
                      value={this.state.weight}
                      required
                    ></input>
                    <p className="p">Weight</p>
                  </FLOAT>
                  <Dropdown
                    onClick={this.c}
                    className="drop"
                    options={WeightCategory}
                    onChange={this.setweightstatus}
                    value={defaultWeight}
                  />
                </div>
                <div className="d-flex">
                  <FLOAT ref="google1" onClick={this.text1}>
                    {this.state.heightstatus !== 'Feet' ? (
                      <>
                        <input
                          className="google_random"
                          onChange={this.setheight}
                          value={this.state.height}
                          required
                        ></input>{' '}
                        <p className="p">Height</p>{' '}
                      </>
                    ) : (
                      <Feet onClick={this.feetsection}>
                        <>
                          <input
                            className="google_random"
                            onChange={this.setheight}
                            value={this.state.height}
                            required
                          ></input>{' '}
                          <h5 className="p">Feet</h5>{' '}
                        </>
                        <div className=" position-relative">
                          <input
                            className="google_random"
                            onChange={this.setInch}
                            value={this.state.Feetheight}
                            required
                          ></input>
                          <h5 className="p">Inch</h5>{' '}
                        </div>
                      </Feet>
                    )}
                  </FLOAT>
                  <Dropdown
                    id="new"
                    onClick={this.c}
                    options={HeightCategory}
                    onChange={this.setheightstatus}
                    name="heightstatus"
                    value={defaultHeight}
                  />
                </div>
              </div>

              <Button>
                <div className="d-flex justify-content-center p-0">
                  <button onClick={this.calculate}>Calculate</button>
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

/*
const Animation = Styled.div`
position : absolute;
width : 150px;
height : 150px;
overflow : hidden;
left : -20%;
top : -26%;
`
const Shape = Styled.div`
width : 100%; 
height : 100%;
position : relative;

z-index : -5;
opacity : 0.7;
`*/
const Container = Styled.div`
width : 100%;
background-position : center;
background-repeat : no-repeat;
object-fit : cover;  
position : relative;
padding : 3px 2px;
@media(max-width : 400px)
{
    padding  : 10px;
}
`;
const Output = Styled.div`
position : absolute;
z-index : 5;
overflow : hidden;
box-shadow: 0px 0px 1500px 2px #80808091;
padding : 10px; 
background : white;
min-width : 300px; 
max-width : 340px;
border-radius : 10px;
bottom : 10%;

h1{
    // background :#b1aa8029;
    padding : 3px;
    font-size:40px;
    font-weight : 700;
    overflow : hidden;
    border-radius : 10px;
    
    text-align : center;
}
 
.result-in-status{ 
    // margin-left : 10px;
    text-align : center;
    justify-content : between;
    div{
        display : flex;
        align-items : center;
         
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

&:after{
//     position : absolute;
// width : 50px;
// content : "";
// height : 50px;
// background : grey;

// top : 0;
// z-index : -1;
}

`;

const MAIN = Styled.div`
padding : 10px;
width : 100%;
height : 100%; 
min-height : 400px;
display : flex;
flex-direction : column;
justify-content : center;
`;
const ROW = Styled.div`
display : flex;
justify-content : flex-end;
padding :0 20px;
@media(max-width : 400px)
{
    padding : 5px;
}
`;
const Column = Styled.div`
width : 500px;
padding : 20px 20px; 
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
.Dropdown-root{
    width : 70%;

}
.Dropdown-placeholder{
    font-weight : 500;
}
.Dropdown-option.is-selected{
    width : 100%;
    background: #74d37b;
    color: white;
    font-size: 16px;
    font-weight: 600;
}
.Dropdown-option{
    padding : 7px;
    font-weight : 600;
    transition : all 250ms;    
&:hover:not(.Dropdown-option.is-selected){
    background-color: #d3f5d5;;
   
    
}   
}
.Dropdown-menu{
    padding : 0px;
    margin-top : 0px;
    border-radius: 3px;
}
.Dropdown-control{
   
    border : 2px solid springgreen;
    border-radius : 5px;
    padding : 6px;
    width: 100%;

}
.Dropdown-arrow{
    top : 17px;
}
 
`;
const FLOAT = Styled.div`
position : relative;
display : flex;
div{
    padding : 0;
}
`;
const Feet = Styled.div`
display : flex;
gap : 0px; 
align-items : center;
padding : 0;
div{
    position : relative;
    padding : 0px;
    margin : 0;
    width : 100%; 
}
h5{
   // position : absolute;
    top : 16px; 
    left : 16px;
    background : white;
    width: 38px;
    text-align : center;
    line-height : 10px;
    font-size : 16px;
    transition : all 50ms;
}
// &:focus-within h5{
//     top : -2px;
//     transform : scale(0.9);
//     width : 45px;
// }

`;

const Button = Styled.div`

button{
    border : 1px solid green;
    background : transparent;
    outline : none;
    padding : 5px 15px;
    margin-top : 10px;
    border-radius : 25px;
    font-family : roboto;
    font-weight : 500;
    transition : all 350ms;
    color : green;
    &:hover{
        background : green;
        color : white;
    }   
}
`;

const Heading = Styled.span`
font-size : 40px;
font-weight : 600;
font-family : rubik;
text-align : right;
letter-spacing : 5px;
margin-bottom : 5px;
padding : 0 50px;
color:#0f0c4dc9;
@media(max-width : 450px)
{
    text-align : left;
    font-size : 40px;   
    padding : 10px;
    text-align : center;
    span{
        text-align : left;
    }
}

`;

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
//         <div className="dropdown-list__item" onClick={()=>{this.setState({weightstatus : "Kg"})}}>Kg(Kg)</div>
//         <div className="dropdown-list__item" onClick={()=>this.setState({weightstatus : "Pounds"})} >Pounds</div>

//         </div>

//         </div>
//         </div>

//  <div className="col-lg-4 pt-2 col-md-3 col-12 ">

//         <div className="" style={{borderColor :`${this.state.selectionheight}`}}>

//         {/* <select className="units  p-2 form-select" name="heightstatus" onClick={this.heightunits}>
//         <option value=  "Centimeter">Centimeter</option>
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
