import React, {useState} from 'react';
import Card from './CardforReview Carousel';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
<<<<<<< HEAD
import carddata from '../Data/ReviewData Carousel'; 

import MaximizeIcon from "@material-ui/icons/Maximize";
import Styled from 'styled-components'; 
=======
import carddata from '../Data/ReviewData Carousel';
import Styled from 'styled-components';
>>>>>>> af41a2afe75d784f809b065cf7ec87929b6499f5
import VisibilitySensor from 'react-visibility-sensor';
const Newcards = ()=>{
  
  const [showB, setB]=useState(false);
 
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
        <div className="Review2" >  <VisibilitySensor
            partialVisibility 
          onChange={(isVisible) => {
            
            setB(isVisible?true:false);
            
          }}
           >
            <span className="main-head newcarsheading1">LET'S HEAR IT &thinsp;<span className={showB?'borderbottom':''} style={{color:"#03ac11"}}> FROM OUR CLIENTS</span></span>
            </VisibilitySensor>  <VisibilitySensor
            partialVisibility 
          onChange={(isVisible) => {
            
            setB(isVisible?true:false);
            
          }}
           ><span className="main-head carouselMobileHeading">OUR <span className={showB?'borderbottom2':''} style={{color:"#03ac11"}}>REVIEWS</span></span>
         </VisibilitySensor><MyCarousel responsive={responsive}
    keyBoardControl={true}
    removeArrowOnDeviceType={["mobile"]}
    showDots={true}
    arrows={true}
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