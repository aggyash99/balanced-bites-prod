import React from 'react';
import { Link } from 'react-router-dom';
import Photo from '../Image/services/programs.jpg'
import Sdata from '../Data/Sdata';
const Program =(props)=>{
var title,description,logo;
{
    Sdata.map( (value,key)=>{
        if(key===(props.location.state.key))
        {
        title = value.title;
        description = value.description;
        logo = value.imgsrc;
        return ("");
    }
    })
    }
return (
<>
<div className=" container-fluid">
    {
  
    /*TOP PHOTO*/}
    <div className="row"style={{width:"100%"}} >
    <div className="col-lg-12 col-12">
    <img className=" image img-thumbnail" src={Photo} alt="sorry"></img>
    </div>
    </div>
<hr></hr>
        <div className=" text-center program-header" > <span style={{color:"green",fontWeight:"600",fontSize:"50px"}}>Our </span><span style={{fontSize:"30px",fontWeight:"600"}}>Service</span></div>
    <div className="row mt-5">  
        
        <div className="col-lg-3 col-md-12 col-sm-12 col-12 d-flex">
        <div className="alllink d-flex flex-column">
            
            {
                Sdata.map( (value,key) =>{
                    return (
                        <Link activeClassName="active_link" className="link" to={{pathname:'/Program',
                        state:{key : key}}} ><span>{value.title}</span> </Link>
                    );
                })
            }
        </div>
        </div> 



        <div className="col-lg-9 col-md-8 col-sm-12 col-12">
        <div className="program-photo">
        <img src={logo} className="img-thumbnail img-fluid"></img>
        </div>
        
        <div className="row text-black p-5 d-flex justify-content-center">
        <h1 className=" text-center" style={{color:"black",fontWeight:"800"}}>{title}</h1> <hr></hr>
        <div className="col-lg-10 ">
        
        <p className="program-text">
            {description}
        </p></div>
        </div>


        </div>
    

</div>
</div>
</>
);
}
export default Program;