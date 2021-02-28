import React from 'react';
import img from '../Image/front.jpg';
//import Carousel from './Carousel';
//import Common from './Common';
function Home() {
  return (
    <>
    <section className = "header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 d-flex justify-content-around mx-auto">
              <img style={{width:"80%",opacity:"0.9"}}  src={img} alt ="sorry"></img>
          </div>
        </div>
        <div className="row">
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
