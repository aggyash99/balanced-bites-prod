import React from 'react';
import Slider from "react-slick";
import Cards from './Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sdata from '../Data/Sdata';
const Carousel =()=>{
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

return (
    <>
    <div className=" container-fluid pt-5">
    <div className="row" style={{height:"400px", width:"100%"}}>
    <div className="col-lg-12">
    <div className="Slider">
  <Slider {...settings}>
  {
    Sdata.map( (value,key) =>{
      return (
        <Cards title={value.title} imgsrc={value.imgsrc} key={key}></Cards>
      );
    })

  }

  </Slider>
</div>
</div>
</div>
</div>
       
    </>
);

}

export default Carousel;