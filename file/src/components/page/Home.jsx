import React, {useState} from 'react';
import imgs from '../../Image/owner/owner11.jpg';

import img from '../../Image/services/test.png';
import CarouselH from '../CarouselH'; 
import BMI from '../BMI';
import Reviewcard from '../Newcards';
import {Link} from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
function Home() {
  const [showB, setB]=useState(false);
  
  return (
    <>
    <section className = "header" id="headerindex">
      <div className="container-fluid position-relative overflow-hidden" >
        <div className="row home-img" >
          <div className="col-lg-12 d-flex justify-content-around mx-auto p-0 para" >
              <img  style={{width:"100%"}}  src={imgs} alt ="sorry"></img>
            
          </div>
          <p >Exersizes is not sufficient for your body, It changes your mind,attitude.
             <Link to='/contact'>Consult Today  </Link>
          </p>
          <h6  >Healthy Mood Healthy Mind
             <Link to='/contact'> Consult Today  </Link>
          </h6>
          <div className="home-img-fil">
          </div>
          
        
        </div>
      </div>


      <div className="carousel caouselBody" >

      <div className="text-center Home-carousel d-flex justify-content-center">
      <p>Our</p><VisibilitySensor
               partialVisibility 
               onChange={(isVisible) => {
                 
                 setB(isVisible?true:false);
                 
            
          
        }}><span className={showB?'borderbottom':''}> Programs</span></VisibilitySensor>
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
        <Link className="" to={{pathname:'/Contact'}} >
        <span className="btn btn-success " >Book Appointment</span>
        </Link>
      </div>
      </div>

      </div>
     
    </section>
    </>
  );
}

export default Home;
/* eslint-enable */