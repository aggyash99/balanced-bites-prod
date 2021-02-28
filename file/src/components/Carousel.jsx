import React from 'react';
import Slider from "react-slick";
import Cards from './Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel =()=>{
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

return (
    <>
    <div className="container pt-4">
      <div className="row">
        <div className="col-lg-12 col-md-12 justify-content-between mx-auto">
    <div style={{backgroundColor:"gray",maxHeight:"50%", marginLeft:"4px", padding:"1%",boxShadow:"3px 4px 2px 4px grey"}}>
    <Slider {...settings}>
    <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
    </Slider>
    </div>
        </div>
      </div>
    </div>
       
    </>
);

}

export default Carousel;