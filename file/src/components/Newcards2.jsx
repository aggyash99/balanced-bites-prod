import React from 'react';
import Card from './CardforReview';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carddata from '../Data/ReviewData';

import Styled from 'styled-components'
import google from '../Image/Review/google.png'
const Newcards = ()=>{
    
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
    return (
        <>
        <div className="" style={{padding:"5%", backgroundImage:"linear-gradient(-225deg, #DFFFCD 0%,lightgreen 100%)"}}> 
            <span className="main-head">A WORD FROM OUR CLIENTS</span>
           
            <MyCarousel responsive={responsive}
    keyBoardControl={true}
    removeArrowOnDeviceType={["tablet","mobile"]}
    showDots={false}
    arrows={false}

    autoPlay={true}
    autoPlaySpeed={10000}
    infinite={true}
    >

           
           {
               carddata.map((value,key)=>{
                        return (
                            <Card name={value.name} description={value.description} link={value.link} key={key}> </Card>
                        );
               })
           }
             </MyCarousel>
        </div>
        </>
    )
}


export default Newcards;
const MyCarousel = Styled(Carousel)`
margin-top : 30px; 
margin-bottom : 20px;
li:hover{ 
}
ul li button{
  color : rgb(150,158,171);;
} 
`