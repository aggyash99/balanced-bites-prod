import React from 'react';
import { Link } from 'react-router-dom';
import Photo from '../Image/pics/program-4.jpg'
import Sdata from '../Data/Sdata';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList , faCheck,faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Program =(props)=>{
var title,description,logo,second,third;

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
    return ("");
    })
    
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
                        state:{key : key}}} ><span>{value.title}</span> </Link>
                    );
                })
            }
        </div>
        </div> 



        <div className="col-lg-9   col-sm-12 col-md-12 col-12">
        <div className="program-photo">
        <img src={logo} className="" alt="BalancedBites" style={{backgroundColor:"no-repeat", backgroundSize:"cover",backgroundPosition:"center",objectFit:"contain",width:"100%"}}></img>
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

<div className="container-fluid p-5">
    {/* <div className="row">
        <div className="col-lg-6 col-md-8 col-12 ">
        
        </div>
    </div> */}
    <div className="row d-flex justify-content-end" style={{paddingRight:""}}>
    
    <div className="col-lg-12 col-md-8 col-12 p-3">
    
    <div className="step">
        
        <div className="col-12">
         <div className = "heading-feature">
        <div style={{fontSize:"17px"}}> 
        <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
        </div>
        <div style={{color: "green",fontSize:"17px"}}>
        <FontAwesomeIcon icon={faClipboardList} ></FontAwesomeIcon>
        </div>
        <div>Program features</div>
        </div>
        </div>
    <div className="col-12 features">
    <FontAwesomeIcon icon={faCheck}/>
    <div>100 % customized diet plans no pre – defined or fixed diets.</div>
    </div>           
    <div className="col-12 features">
    <FontAwesomeIcon icon={faCheck}/>
    <div>Analysis of your routine & food preferences.</div>
    </div>
    <div  className="col-12 features">
    <FontAwesomeIcon icon={faCheck}/>
    <div>Non – restrictive diet & lifestyle plan.</div>
    </div>
    <div  className="col-12 features">
    <FontAwesomeIcon icon={faCheck}/>
    <div>Provide you multiple options in your diet plan.</div>
    </div>
    <div className="col-12 features">
    <FontAwesomeIcon icon={faCheck}/>
    <div>Ongoing support & guidance via. WhatsApp chat.</div>
    </div> 
    </div>
    </div>
    </div>

</div>


</div>
</>
);
}
export default Program;