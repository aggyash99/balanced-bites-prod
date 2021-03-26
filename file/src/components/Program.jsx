import React from 'react';
import { NavLink } from 'react-router-dom';
import Photo from '../Image/services/program.jpg'
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
<div className=" container-fluid propages">
    {
    console.log(props)
    /*TOP PHOTO*/}
    <div className="row">
    <div className="col-lg-12 col-12">
    <img className=" image img-thumbnail" src={Photo} alt="sorry"></img>
    </div>
    </div>


    <div className="row d-flex pt-5" >  
        <div className="col-lg-2 col-12 col-sm-4 col-md-4 d-flex flex-column p-4 program ">
            <NavLink activeClassName="active_link" className="link" to="/Contact"><span>Contact</span></NavLink>
            <NavLink activeClassName="active_link"  className="link" to="/Service"><span>Contact</span></NavLink>
            <NavLink activeClassName="active_link" className="link" to="/About"><span>Contact</span></NavLink>
            <NavLink activeClassName="active_link" className="link" to="/Service"><span>Contact</span></NavLink>
            <NavLink activeClassName="active_link" className="link" to="/Contact"><span>Contact</span></NavLink>
            <NavLink activeClassName="active_link" className="link" to="/Service"><span>Contact</span></NavLink>
            <NavLink activeClassName="active_link" className="link"  to="/Contact"><span>Contact</span></NavLink>
            <NavLink activeClassName="active_link" className="link" to="/Contact"><span>Contact</span></NavLink>
            <NavLink activeClassName="active_link" className="link"  to="/Service"><span>Contact</span></NavLink>
  
        </div>
        <div className=" col-lg-9 col-12 col-sm-7 p-4 col-md-7">
        <div className="">
        <span  style={{fontSize:"30px",fontWeight:"700",borderBottom:"2px solid red",}}>{title}</span>
        </div>

        <div className="">
        <div className="text-center">
        <img src={logo} className="img-fluid " style={{paddingTop:"2%"}} ></img>
        </div>
        <div>
        <p className="p-3">{description}</p>
        </div>
        </div>
        </div>
    

</div>
</div>
</>
);
}
export default Program;