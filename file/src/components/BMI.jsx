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
    <div className="container-fluid BMI p-5" style={{backgroundImage:`url(${(image)})`}}>
        
 
        <div className="row d-flex justify-content-end">
        
        <div className="  d-flex justify-content-end  p-2 BMI-text"><span>BMI Calculator</span></div>

        <div className="col-lg-5 col-md-12 ">

       
        <form className="BMI-start">
         
        <div className="row">
        <div className="col-lg-6 col-md-6 col-12 input-BMI d-flex justify-content-center">
        <input placeholder="Your weight (In Kg)" type="number" onChange={setweight} value={weight}  />
        </div>
        <div className="col-lg-6 col-md-6  col-12 input-BMI d-flex justify-content-center">
        <input  type="number" placeholder="YOUR HEIGHT In cm" onChange={set} />
        </div>
        </div>
        <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
        <div className="btn success " onClick={calculate}>Calculate BMI</div>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-12 pt-4 d-flex flex-column input-BMI">
        <input value={result} placeholder="Your BMI"></input>
        <input vlaue={""} placeholder="Your Status"></input>
        </div>
        </div>
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
        <div className="btn success" onClick={reset}>Reset</div>
        </div>
        </div>

       {/*<input  type="number" placeholder="Your height (In cm)" onChange={set} value={height}  />
    */}


        {/*<div className="mb-2 mt-2 col-lg-12 d-flex justify-content-center">
        </div>  

         <div className="row p-4 input-MSG" >
             <div className="d-flex flex-column gap-3">
         </div>
        </div>
*/}
        {/*<div className="col-lg-12 d-flex justify-content-center">
         </div>
         */}



        </form>
        
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