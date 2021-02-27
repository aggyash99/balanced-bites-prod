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
                  <iframe src="https://maps.google.com/maps?q=Madryt&t=&z=13&ie=UTF8&iwloc=&output=embed"  frameborder="0"
                    allowfullscreen></iframe>
                </div>
        
        
              </div>
        </div>
        
          </div>
        
        </div>
   
        </div>

        </>
    );
}

export default Map;