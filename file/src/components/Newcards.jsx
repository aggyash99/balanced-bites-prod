import React from 'react';
// import img from '../Image/services/doodle.jpg'
import Card from './CardforReview';
import carddata from '../Data/ReviewData';
// import google from '../Image/Review/google.png'
const Newcards = ()=>{
    
    return (
        <>
        <div className="carousel1" style={{backgroundImage:`URL(https://res.cloudinary.com/balance-bites/image/upload/v1624253260/Home_carousel/doodle_zopthm.jpg)`, backgroundSize:"center", objectFit : "cover", backgroundRepeat:""}} >
            <div className=" Review"> 
            <span className="main-head">WHAT OUR CLIENT SAY</span>
            <span className="phone-head">Our Reviews</span>
            <div className="Heading-border">
            <div className='write-review'>
                <img src="https://res.cloudinary.com/balance-bites/image/upload/v1624256854/Home_carousel/google_zkt4nr.png" alt="G"></img>
                <span>Reviews</span>
                </div>
                <span className="center-Heading">WRITE YOUR REVIEW</span>
                <div className="">
                  <a href="https://g.page/r/CWK5lavoG8jkEAg/review" className="btn-for-program">Review</a> 
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
        </div>
        </>
    )
}


export default Newcards;