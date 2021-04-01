import react from 'react'
import {CarouselWrapper, prev, next, moveTo, switchTo, presentIndex} from "react-pretty-carousel";
import Sdata from '../Data/Sdata';
import {
    CarouselWrapper,
    prev,
    next,
    moveTo,
    switchTo,
    presentIndex,
  } from "react-pretty-carousel";
const Ankur =()=>{

    return(
        <>
        <div className="Cards">
        <CarouselWrapper items={3} mode="gallery">
        {
            Sdata.map((value,key)=>{
                return (
                    <img src={value.imgsrc} alt={`pic-${key}`} key={key}></img>
                );
            })

        }


        </CarouselWrapper>

        </div>
    
        </>
    );

}


export default Ankur;
