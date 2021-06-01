import React, {useState} from 'react';
import imgs from '../../Image/pics/home.jpg';
import Photo from '../photo'
import img from '../../Image/pics/whatsapp1.svg';
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
    
    <a href="https://wa.link/k2f045"><span className="screen-bar"><img src={img}></img></span></a>

      <div className="container-fluid position-relative overflow-hidden" >
        <div className="row home-img" >
          <div className="col-lg-12 d-flex justify-content-around mx-auto p-0 para" >
              <img  style={{width:"100%"}}  src={imgs} alt ="sorry"></img>
            
          </div>
          <div>
          <p >Exersizes is not sufficient for your body, It changes your mind,attitude.
             <Link to='/contact'>Consult Today  </Link>
          </p>
          <h6>Healthy Mood, Healthy Mind
             <Link to='/contact'> Consult Today  </Link>
          </h6>
          </div>
          {/* <div className="home-img-fil">
          </div> */}
          
        
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
      
      <div>
      <BMI/>
      </div>
      

      <div>
      <Reviewcard />
      </div>

       
      <div>
          <Photo></Photo>
      </div>
     
    </section>
    </>
  );
}

export default Home;
/* eslint-enable */