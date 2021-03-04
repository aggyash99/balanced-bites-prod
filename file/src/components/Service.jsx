import React from 'react';
import Sdata from '../Data/Sdata';
import ServicesCards from './ServicesCard';
const Service = () =>{

return (

  <div className=" container">

    <div  className="row">
      {
        Sdata.map( (value,index) => {
          return (
            <ServicesCards
            key = {index}
            imgsrc = {value.imgsrc}
            title = {value.title}
            ></ServicesCards>
          )

        })
      }



    </div>



  </div>

);
}

export default Service;