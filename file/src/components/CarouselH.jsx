import React from 'react';
import Slider from "react-slick";
import Cards from './Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Sdata from '../Data/Sdata';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const CarouselH =()=>{
  
  return (
<>
    <div className=" container pt-4">
    <div className="row">
    <div className="col-lg-12 p-2">
    <Carousel responsive={responsive}
    keyBoardControl={false}
    removeArrowOnDeviceType={["tablet","mobile","desktop"]}
    >
    {
      Sdata.map( (value,key)=>{
        return (
          <Cards imgsrc={value.imgsrc} title={value.title} key={key}></Cards>
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



export default CarouselH;