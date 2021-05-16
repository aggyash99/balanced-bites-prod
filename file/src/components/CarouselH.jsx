import React from 'react';
import Cards from './Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Sdata from '../Data/Sdata';
import Styled from 'styled-components'

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


    <MyCarousel responsive={responsive}
    keyBoardControl={true}
    removeArrowOnDeviceType={["tablet","superLargeDesktop","mobile","desktop"]}
    showDots={false}
    arrows={true}
    >
     {
      Sdata.map( (value,key)=>{
        return (
        <Cards imgsrc={value.imgsrc} title={value.title} key={key} num={key} description={value.service}></Cards>
        );
      })
    }  
    </MyCarousel>
  
 
</>
);
}



export default CarouselH;

const MyCarousel = Styled(Carousel)`
margin-top : 30px; 
margin-bottom : 20px;
li:hover{ 
}
ul li button{
  color : rgb(150,158,171);;
} 
`

