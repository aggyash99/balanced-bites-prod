import React, {useState} from 'react'; 
import { Link } from 'react-router-dom'; 
import Newdata from '../Data/Newdata';
import Sdata from '../Data/Sdata';
import $ from 'jquery';
import ReactDOM  from "react-dom"; 
import step from '../Image/services/service.jpg'
import ProgramsFeatures from './ProgramFeatures';
import VisibilitySensor from 'react-visibility-sensor';
import img from '../Image/pics/whatsapp1.svg'
const Program =(props)=>{ 
 
    const [showB, setB]=useState(false);
 
    const [showC, setC]=useState(false);
    var title,description,logo,second,third;
   
    Newdata.map( (value,key)=>{
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

<a href="https://wa.link/k2f045"><span className="screen-bar"><img src={img}></img></span></a>
    <div className="row photos">
    <div className="col-12 p-0 position-relative">
    <img className="steps" src={step}></img>
    <h1 className="service-text">Service</h1>
    </div>
    <div className="d-flex " style={{position:"absolute" , justifyContent:"flex-end", marginBottom:"30px",paddingRight:"170px", bottom:"10px"}}>
    <button className="btn-for-service">Contact Us</button>
    
    </div>
    </div>
 
        <div className=" text-center program-header" >
        <span className="OurStyle">Our</span><VisibilitySensor
               partialVisibility 
               onChange={(isVisible) => {
                 
                 setB(isVisible?true:false);
                 
            
          
        }}>
        <span  className={showB?'serviceStyle borderbottom':'serviceStyle'} >Service</span></VisibilitySensor>
        </div>
    <div className="row mt-5" >  
        
        
        <div className="col-lg-3 col-md-12 col-12 ">
        <div className="alllink d-flex flex-column">
            
            {
                Sdata.map( (value,key) =>{
                    return (
                        <Link   className="link " to={{ pathname:'/Program',
                        state:{key : key}}} key={key} ><span dangerouslySetInnerHTML={{__html: value.title}}></span> </Link>
                    );
                })
            }
        </div>
        </div> 

        <div className="col-lg-9 col-md-12 col-12 ">
        <img src={logo} className="PROGRAMS-PHOTO" ></img>
        </div>

      </div>
        


         



        <div className="row text-black   d-flex justify-content-center">
         
           <div  className="text-center PROGRAM-HEADING"><VisibilitySensor
               partialVisibility 
               onChange={(isVisible) => {
                 
                 setC(isVisible?true:false);
                 
            
          
        }}>
           <span className={showC?'borderbottom':''} dangerouslySetInnerHTML={{__html:title}}></span></VisibilitySensor>
             </div>
         
        <div className="col-lg-12  pt-3" style={{padding:"0px 10px"}}>
            <ul className="program-ul-text">
            
            
            <li> 
            <p className="program-text" dangerouslySetInnerHTML={{__html: description}}>
             
            </p></li>
            <li><p className="program-text1" dangerouslySetInnerHTML={{__html : second}}>
            
            </p></li>
            <li><p className="program-text2" dangerouslySetInnerHTML={{__html : third}}>
            
            </p></li>
            </ul>
        </div>
        </div>
        
        


        <ProgramsFeatures/>

        {/* <div className="row ">
            <div className="col-12 p-0">
            <img src={step} style={{objectFit:"cover",width:"100%",height:"500px"}}></img>
            </div>
        </div> */}
        </div>
     

    </div>

</>
);
}
export default Program;