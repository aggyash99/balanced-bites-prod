import React, {useState , useEffect} from 'react';
import imgs from '../../Image/owner/bg.jpg';
import Photo from '../photo';
import owner from '../../Image/owner/owner2.png'
import CarouselH from '../CarouselH'; 
import BMI from '../BMI';
import Reviewcard from '../Newcards';
import {Link} from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import img from '../../Image/services/doodle.jpg'
function Home() {
  const [showB, setB]=useState(false);

  useEffect(() => {
  window.scroll(0,0)
  }, [])
  return (
    <>
    
    <section className = "header" id="headerindex" >
   
      <div className="container-fluid position-relative overflow-hidden" >
        <div className="row home-img" >
          <div className="col-lg-12 d-flex justify-content-around mx-auto position-relative p-0 para" >
              <img  style={{width:"100%",opacity:"0.6"}}  src={imgs} alt ="sorry"></img>
            
              <img className="owner1" src={owner}></img>
               
          </div>
          <div>
          <p>Every Time you eat is an opportunity to <span style={{color : "green"}}>"Nourish You Body"</span>
            <div className="add-new  mt-4">
              Muskan Bansal
              </div>
             <div className="" style={{marginLeft:"10px",marginTop:"0px"}}> 
             <Link to='/contact'>Contact Us </Link>
             {/* <Link to='/contact'>Programs </Link> */}
             </div>
          </p>
          <h6>Healthy Mood, Healthy Mind
             <Link to='/contact'> Consult Today  </Link>
          </h6>
          
          </div>
          {/* <div className="home-img-fil">
          </div> */}
          
        
        </div>
      </div>


      <div className="carousel " style={{backgroundImage:`URL(${img})`, backgroundSize:"center", objectFit : "cover", backgroundRepeat:"no-repeat"}} >
          <div className="caouselBody">
      <div className="text-center Home-carousel d-flex justify-content-center">
      <p>Our</p><VisibilitySensor
               partialVisibility 
               onChange={(isVisible) => {
                 
                 setB(isVisible?true:false);
                 
            
          
        }}><span className={showB?'borderbottom':''}> Programs</span></VisibilitySensor>
      </div>
     
      <CarouselH ></CarouselH>
      </div>
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