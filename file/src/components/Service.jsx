import React from 'react';
import Sdata from '../Data/Sdata';
import ServicesCards from './ServicesCard';
import logo from '../Image/pics/program-44.jpg'
const Service = () =>{

return (

  <div className=" container-fluid">
    <div className="row logo-for-service" style={{backgroundImage: `Url(${logo})` }}>
        <div className="col-12 p-5" >
          {/* <div className="our-programs"> Our <span className='programs'>Programs</span></div> */}
         <div className="our-programs">
          <span>Our <span className='programs'>  Programs </span></span>
          </div>
          {/* <div className='service-for-programs'>
          <div className='maa font-red'>
          <span>Weight Loss</span>
          <span>Weight Gain</span>
          <span>Diabetes</span>
          <span>Pcos</span>
          </div>
          <div className='maa font-green'>
         
          <span>Hair Skin Care</span>
          <span>Detox Diet</span>
          <span>Pregnancy</span>
          <span>Child Nutrition</span>
          <span>Thyroid</span>
          </div>
         
          
          </div> */}
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