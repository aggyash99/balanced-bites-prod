import React from 'react';
import Sdata from '../Data/Sdata';
import ServicesCards from './ServicesCard';
import logo from '../Image/pics/program-44.jpg'
const Service = () =>{

return (

  <div className=" container-fluid">
    <div className="row logo-for-service" style={{backgroundImage: `Url(${logo})` }}>
        <div className="col-12 our-programs-head" >
          {/* <div className="our-programs"> Our <span className='programs'>Programs</span></div> */}
         <div className="our-programs">
          <span>Our <span className='programs'>  Programs </span></span>
          </div>
        </div>
    </div>
    <div  className="row" style={{padding:"0px 50px"}}>
      {
        Sdata.map( (value,index) => {
          return (
            <ServicesCards
            key = {index}
            num = {index}
            imgsrc = {value.imgsrc}
            title = {value.title}
            service = {value.service}
            ></ServicesCards>
          )

        })
      }



    </div>



  </div>

);
}

export default Service;