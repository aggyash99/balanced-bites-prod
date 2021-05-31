import React from 'react';
import Card from './CardforReview';
import carddata from '../Data/ReviewData';
import google from '../Image/Review/google.png'
const Newcards = ()=>{
    
    return (
        <>
        <div className="Review"> 
            <span className="main-head">WHAT OUR CLIENT SAY</span>
            <span className="phone-head">Our Family</span>
            <div className="Heading-border">
            <div className='write-review'>
                <img src={google} alt="G"></img>
                <span>Review</span>
                </div>
                <span className="center-Heading">Give Your Wishes</span>
                <div className="">
                  <a href="https://www.google.com/maps/place/Balanced+Bites/@28.7030936,77.1013804,17z/data=!3m1!4b1!4m5!3m4!1s0x390d03e720796ed7:0xe4c81be8ab95b962!8m2!3d28.7030822!4d77.1035788" className="btn-for-program">Write your Review</a> 
                </div>
            </div>

            <div className="Newcards">

           
           {
               carddata.map((value,key)=>{
                        return (
                            <Card name={value.name} description={value.description} link={value.link} key={key}> </Card>
                        );
               })
           }
             </div>
        </div>
        </>
    )
}


export default Newcards;