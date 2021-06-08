import React from 'react';
import Card from './CardforReview Carousel';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carddata from '../Data/ReviewData Carousel';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import MaximizeIcon from "@material-ui/icons/Maximize";
import Styled from 'styled-components'
import google from '../Image/Review/google.png'
const Newcards = ()=>{
  const CustomDot = ({ onMove, index, onClick, active }) => {
    return (
      <li
        className={active ? "active aboutcarouselactive aboutcarouseldot" : "inactive aboutcarouseldot aboutcarouselinactive"}
        onClick={() => onClick()}
      >
        <MaximizeIcon/>
      </li>
    );
  };
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
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
        <div className="Review2" > 
            <span className="main-head">A WORD FROM OUR CLIENTS</span>
           
            <MyCarousel responsive={responsive}
    keyBoardControl={true}
    removeArrowOnDeviceType={["tablet","mobile"]}
    showDots={false}
    arrows={false}
    autoPlay={true}
    autoPlaySpeed={5000}
    infinite={true}
    >

           
           {
               carddata.map((value,key)=>{
                        return (
                            <Card  name={value.name} description={value.description} link={value.link} key={key} iconInitial={value.iconInitial} iconBG={value.iconBG} style={{color:"pink"}}> </Card>
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