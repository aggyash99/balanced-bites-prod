import React from 'react';
import img from '../Image/services/home.jpg';
import CarouselH from './CarouselH';
//import Common from './Common';
function Home() {
  return (
    <>
    <section className = "header">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-10 d-flex justify-content-around mx-auto">
              <img  style={{width:"100%"}}  src={img} alt ="sorry"></img>
          </div>
        </div>
      </div>
      <div className="appoint">


      <div className="carousel" style={{ backgroundColor:"#F8F8F8"}}>

      <div className="text-center">
      <span><h1>Our <span style={{color:'green', borderBottom:"green solid 2px", fontWeight:"700", opacity:"0.8"}}>Services</span> </h1></span>
      </div>
     
      <div>
      <CarouselH></CarouselH>
      </div>
      </div>

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
