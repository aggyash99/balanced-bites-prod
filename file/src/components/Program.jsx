import React from 'react';
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router-dom';
import Photo from '../Image/pics/program-4.jpg'
import Sdata from '../Data/Sdata';
import ProgramsFeatures from './ProgramFeatures';
 import $ from 'jquery';
const Program =(props)=>{ 
 
var title,description,logo,second,third;
{
    Sdata.map( (value,key)=>{
        if(key===(props.location.state.key))
        {
        title = value.title;
        description = value.description;
        second = value.second;
        third = value.third
        logo = value.imgsrc;
        return ("");
    }
    })
    }
return (
<>
<div>
<div className=" container-fluid">
    {
  
    /*TOP PHOTO*/}
    <div className="row p-0"  >
    <div className="col-lg-12 p-0  col-12">
    <img className="IMAGEFORPROGRAM" src={Photo} alt="sorry"></img>
    </div>
    </div>
 
        <div className=" text-center program-header" >
        <span className="OurStyle">Our</span>
        <span className="serviceStyle borderbottom">Service</span>
        </div>
    <div className="row mt-5">  
        
        <div className="col-lg-3 col-md-12 col-sm-12 col-12 d-flex">
        <div className="alllink d-flex flex-column">
            
            {
                Sdata.map( (value,key) =>{
                    return (
                        <Link   className="link" to={{pathname:'/Program',
                        state:{key : key}}} key={key}><span>{value.title}</span> </Link>
                    );
                })
            }
        </div>
        </div> 



        <div className="col-lg-9 col-sm-12 col-md-12 col-12 d-flex">
        <div className="program-photo">
        <img src={logo} className="PROGRAMS-PHOTO" ></img>
        </div>
        
      
        </div>
        </div>



        <div className="row text-black   d-flex justify-content-center">
        <div className=" text-center PROGRAM-HEADING" >
            <div>{title}</div>
            <div className="under" ></div> 
            
            </div>  
        <div className="col-lg-12 pt-3" style={{padding:"0px 10px"}}>
            <ul style={{listStyle:"none"}}>
            <li><p className="program-text">
            {description}
            </p></li>
            <li><p className="program-text1">
            {second}
            </p></li>
            <li><p className="program-text2">
            {third}
            </p></li>
            </ul>
        </div>
        </div>

        </div>
     
        <ProgramsFeatures/>

    </div>

</>
);
}
export default Program;