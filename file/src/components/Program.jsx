import React from 'react'; 
import { Link } from 'react-router-dom';
import Photo from '../Image/pics/program-4.jpg'
import shape from '../Image/services/b-shape1.png'
import Newdata from '../Data/Newdata';
import Sdata from '../Data/Sdata';
import step from '../Image/services/service.jpg'
import ProgramsFeatures from './ProgramFeatures';
const Program =(props)=>{ 
 
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
    <div className="row photos">
    <div className="col-12 p-0 position-relative">
    <img className="steps" src={step}></img>
    <h1 className="service-text">Service</h1>
    </div>
    <div className="d-flex justify-content-evenly" style={{position:"absolute" , justifyContent:"space-around", marginBottom:"5px", bottom:"10px"}}>
   <button className="btn-for-service">Programs</button>
    <button className="btn-for-service">About</button>
    <button className="btn-for-service">Contact Us</button>
    
    </div>
   </div>
    
  
        <div className="text-center program-header " >
        <span className="OurStyle">Our</span>
        <span className="serviceStyle borderbottom">Service</span>
        </div>
    <div className="row mt-5" >  
        
        
        <div className="col-lg-3 col-md-12 col-12 ">
        <div className="alllink d-flex flex-column">
            
            {
                Sdata.map( (value,key) =>{
                    return (
                        <Link   className="link" to={{pathname:'/Program',
                        state:{key : key}}} key={key}><span dangerouslySetInnerHTML={{__html: value.title}}></span> </Link>
                    );
                })
            }
        </div>
        </div> 

        <div className="col-lg-9 col-md-12 col-12 ">
        
        <img src={logo} className="PROGRAMS-PHOTO" ></img>
        {/* </div> */}
        </div>
      </div>
        


         



        <div className="row text-black   d-flex justify-content-center">
         
           <div  className="text-center PROGRAM-HEADING ">
           <span className="borderbottom" dangerouslySetInnerHTML={{__html:title}}></span>
             </div>
         
        <div className="col-lg-12  pt-3" style={{padding:"0px 10px"}}>
            <ul style={{listStyle:"none"}}>
            
            
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