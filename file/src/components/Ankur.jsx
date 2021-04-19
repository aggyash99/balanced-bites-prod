import React from 'react'; 
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testimonial from '../Data/Testimonial';
import TestimonialCards from './TestimonialCards';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Ankur =()=>{
  
  return (
<>
  
    <div className=" container p-5">
    <div className="row ">
    <div className="col-lg-12">
        
    <Carousel responsive={responsive}
    keyBoardControl={false}
    removeArrowOnDeviceType={["tablet","superLargeDesktop","mobile","desktop"]}
    autoPlay={true}
    autoPlaySpeed={1500}
    infinite={true}
    >
    {
      Testimonial.map( (value,key)=>{
        return (
        <TestimonialCards name={value.name} comment={value.comment} key={key}></TestimonialCards>
        );
      })
    }
    </Carousel>

    </div>
    </div>

    </div>
 
</>
);
}



export default Ankur;