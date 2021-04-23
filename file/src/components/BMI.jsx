import React from "react";
import {useState} from 'react'
import image from '../Image/pics/bmi-2.jpg'
const BMI = ()=>{

    const [height, Height] = useState("");
    const [weight, Weight] = useState("");
    const [result, Result] = useState("");

    const set = (props) =>{
        Height(props.target.value);
    }
    const setweight = (props)=>{
        Weight(props.target.value);
    }
    const calculate = () =>{
        const temp = height/100;
        const temps = temp.toFixed(4);
        const Atemp = weight/(temps*temps);
        const news = Atemp.toFixed(2);
        
        Result((news));
      //  console.log(result);
      
    }
    const reset = () =>{
       
            Height("");
            Weight("");
            Result("");
      return ("");
    }

    return (
        <div>


    <div className="container-fluid BMI p-5" style={{backgroundImage:`url(${(image)})`}}>

        <div className="row d-flex justify-content-between">
        
        <div className="col-lg-6 result">
        <div >
                <p style={{textAlign:"left", fontSize:"15px", lineHeight:"0px",fontWeight:"600",color:"#A9A9A9"}}>Your BMI Score</p>
                    <div style={{width:"50%", float:"left"}}>
                        <input value={result}></input>
                    </div>
                    <div className="status">
                        <h5>Your Category</h5>
                        <h5 style={{alignItems:"right",fontSize:"15px",lineHeight:"7px"}}>Healthy Weight</h5>
                        <div className="">
                        <img className="dot" src="https://img.icons8.com/emoji/48/000000/blue-circle-emoji.png"/>
                   </div>
                    </div>
                <div className="bars">
                <div className="redbars" ></div>
                <div className="yellowbars"></div>
                <div className="greenbars"></div>
                <div className="bluebars"></div>
                </div>
            <div className="barText">
            <p>Your BMI indicates that you are at a healthy weight for your height. by maintaining a healthy weight, you lower your risk of developing serious health problems.</p>
            </div>
            <div className="bottom-status">
            <p>Your BMI in Range : 12 - 15</p>
            </div>

            </div>
            </div>
         <div className="col-lg-6 col-md-12">

       
        <form className="BMI-start">
         
        <div className="row">
        <div className="col-lg-6 col-md-6 col-12 input-BMI d-flex justify-content-center">
        <input placeholder="Your weight (In Kg)" type="number" onChange={setweight} value={weight}  />
        </div>
        <div className="col-lg-6 col-md-6 col-12 input-BMI d-flex justify-content-center">
        <input  type="number" placeholder="YOUR HEIGHT In cm" onChange={set} />
        </div>
        </div>
        <div className="row">
        <div className="col-lg-12 d-flex justify-content-around">
        <div className="btn success " onClick={calculate}>Calculate BMI</div>
        <div className="btn success" onClick={reset}>Reset</div>
        </div>
        </div>  
 



        </form>
        
        </div>
        

        </div>
        
        

    </div></div>
);
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