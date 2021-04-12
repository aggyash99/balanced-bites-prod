import React from "react";
import {useState} from 'react'

const BMI = ()=>{

    const [height, Height] = useState(0);
    const [weight, Weight] = useState(0);
    const [result, Result] = useState(0);

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
        console.log(result);
    }
    return (
    <div className="container openss" >
        
        <h1 className="text-capitalize text-center"> BMI</h1>

        <div> 

        </div>
        <div className="row ">

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
        </div>

      

    </div>
);
}


export default BMI;