import React, {useState,useEffect} from 'react'; 
import { Link, Redirect } from 'react-router-dom'; 
import Newdata from '../Data/Newdata';
import Sdata from '../Data/Sdata'; 
// import step from '../Image/services/service.jpg'
import ProgramsFeatures from './ProgramFeatures';
import VisibilitySensor from 'react-visibility-sensor';
// import img from '../Image/pics/whatsapp1.svg'
const Program =(props)=>{ 
   
    useEffect(() => {
        window.scroll(0,0)
        }, []);
    const [showB, setB]=useState(false);
    const [showC, setC]=useState(false);

    var title,description,logo,second,third,clas;
  

    if(props.location.state !== undefined){
    Newdata.map( (value,key)=>{
        if(key===(props.location.state.key))
        {
        title = value.title;
        description = value.description;
        second = value.second;
        third = value.third
        logo = value.imgsrc;
        clas = key;
        return ("");
        }
    return ("");
    })
    }
    else
    <Redirect to="/Service"></Redirect>

  
return (
<> 
<div>
<div className=" container-fluid">

<a href="https://wa.link/k2f045"><span className="screen-bar"><img src="https://res.cloudinary.com/balance-bites/image/upload/v1624257691/Home_carousel/whatsapp1_yfa4u3.svg"></img></span></a>
    <div className="row photos">
    <div className="col-12 p-0 Programs-head position-relative">
    <img className="steps" src="https://res.cloudinary.com/balance-bites/image/upload/v1624257648/Home_carousel/service_vr6zmg.jpg"></img>
    <h1 className="service-text">Service</h1>
    </div>
    <div className="d-flex button-on-program" style={{position:"absolute", justifyContent:"flex-end", marginBottom:"30px",paddingRight:"170px", bottom:"10px"}}>
    <Link className="btn-for-service" to="/contact">Contact Us</Link>
    
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
                    
                    if(clas ===key){
                    return( <Link   className="link" style={{background : "#eb2209" , color :"white"}} to={{ pathname:'/Program',
                    state:{key : key}}} key={key} ><span dangerouslySetInnerHTML={{__html: value.title}}></span> </Link>
                    )
                        
                    }
                    
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