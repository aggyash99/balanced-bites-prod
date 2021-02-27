import React from 'react';
import Slider from "react-slick";
import Cards from './Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel =()=>{
  var settings = {
    infinite: true,
    slidesToShow: 2,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-10 col-md-10 mx-auto">
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
       
    </>
);

}

export default Carousel;