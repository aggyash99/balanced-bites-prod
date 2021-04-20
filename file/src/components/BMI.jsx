import React from "react";
import {useState} from 'react'
import image from '../Image/pics/bmi-1.jpg'
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
    <div className="container-fluid BMI p-5" style={{backgroundImage:`url(${(image)})`, backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        
 
        <div className="row" >
        
        <div className="col-lg-6 pt-5 mb-5">

        <h1 className="text-capitalize mb-4" style={{fontWeight:"700",}}> BMI CALCULATOR</h1>

        <div className="BMI-start">
       
        <div className = "mb-2 d-flex p-3 input-BMI justify-content-around">
        <input  type="number" placeholder="Your height (In cm)" onChange={set} value={height} style={{}}/>
        <input placeholder="Your weight (In Kg)" type="number" onChange={setweight} value={weight} style={{}}/>
        </div>
        <div className="mb-2 col-lg-12 d-flex justify-content-center">
        <div className="btn btn-success " onClick={calculate}>calculate</div>
         </div>  

         <div className="row p-3 input-MSG" >
             <div className="d-flex flex-column gap-3">
            <input value={result} placeholder="Your BMI"></input>
            <input vlaue={""} placeholder="Your Status"></input>
        </div>
        </div>

        <div className="col-lg-12 d-flex justify-content-center">
        <div className="btn btn-success mb-2" onClick={reset}>RESET</div>
         </div>
        </div>
        
        </div>
       
        </div>
        
      

    </div>
);
}


export default BMI;

{/*
 <div className="row">
            <div className="col-lg-12 col-12 d-flex mb-3  justify-content-center" >
            <span>HEIGHT</span>
            <input  type="number" placeholder="In cm" onChange={set} style={{outline:"none",padding:"5px",textAlign:"center", width:"50%"}}/>
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