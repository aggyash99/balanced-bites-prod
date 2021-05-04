import React from 'react';
import Sdata from '../Data/Sdata';
import ServicesCards from './ServicesCard';
const Service = () =>{

return (

  <div className=" container p-0">

    <div  className="row mt-5 p-5">
      {
        Sdata.map( (value,index) => {
          return (
            <ServicesCards
            key = {index}
            num = {index}
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