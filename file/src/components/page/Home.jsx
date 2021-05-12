import React from 'react';
import img from '../../Image/services/test.png';
import CarouselH from '../CarouselH'; 
import BMI from '../BMI';
import Reviewcard from '../Newcards';
function Home() {
  return (
    <>
    <section className = "header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-around mx-auto p-0">
              <img  style={{width:"100%"}}  src={img} alt ="sorry"></img>
          </div>
        </div>
      </div>


      <div className="carousel caouselBody" >

      <div className="text-center Home-carousel d-flex justify-content-center">
      <p>Our</p><span className="borderbottom"> Programs</span>
      </div>
     
      <CarouselH ></CarouselH>
     
      </div>
      
      <div className="">
      <BMI/>
      </div>
      

      <div>
      <Reviewcard />
      </div>

      <div className="appoint">

      <div>
        <div className="textin">
        <h1 >Best Dietitian in vikaspuri West Delhi | 9 yrs Exp | Online Diet Charts - Weight Loss, PCOD/PCOS etc.</h1>
        </div>
        <div className="buttoninhome">
        <a className="btn btn-success ">Book Appointment</a>
      </div>
      </div>

      </div>
     
    </section>
    </>
  );
}

export default Home;
