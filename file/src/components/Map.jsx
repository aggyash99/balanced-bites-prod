import React from 'react';

const Map = ()=>{

    return (
       <>
       <div classNameName="container-fluid mx-auto">
        
        <div className="row">
          <div className="col-md-12 mt-5">
        
            <div className="card card-cascade narrower">
        
              <div className="view view-cascade gradient-card-header peach-gradient">
                <h5 className="mb-2 text-capitalize text-center">Custom map</h5>
              </div>
        
              <div className="card-body card-body-cascade text-center ">
        
                <div id="map-container-google-9" className=" map-container-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.5503770831488!2d77.10138041440902!3d28.70309358763614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e720796ed7%3A0xe4c81be8ab95b962!2sBalanced%20Bites!5e0!3m2!1sen!2sin!4v1615350819480!5m2!1sen!2sin"  style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe> </div>
        
        
              </div>
        </div>
        
          </div>
        
        </div>
   
        </div>

        </>
    );
}

export default Map;