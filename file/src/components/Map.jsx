import React from 'react';

const Map = ()=>{

    return (
       <>
       <div>
        
        
        
        <div className="row">
          <div className="col-lg-2 "></div>
          <div className="col-lg-8 mt-5">
              <div className="view view-cascade gradient-card-header peach-gradient">
                <h2 className=" text-capitalize text-center mapheading" >Our <span className="borderbottom" style={{color:"#03ac11",fontWeight:"700"}}>Location</span></h2>
              </div>
            <div className="card card-cascade narrower">
              <div className="card-body card-body-cascade text-center " >
        
                <div id="map-container-google-9" className=" map-container-5" >
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.5503770831488!2d77.10138041440902!3d28.70309358763614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e720796ed7%3A0xe4c81be8ab95b962!2sBalanced%20Bites!5e0!3m2!1sen!2sin!4v1615350819480!5m2!1sen!2sin"  allowFullScreen="" loading="lazy"></iframe> </div>
        
        
              </div>
        </div>
      
        
          </div>
        
        </div>
   
        </div>
        <div className="row">
          <div className="col mt-5">
          </div></div>

        </>
    );
}

export default Map;