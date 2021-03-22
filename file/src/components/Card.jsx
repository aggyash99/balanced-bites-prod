import React from 'react';
const Card = (props)=> {
  return (
    
            <div className="container pt-0"> 
              <div className="row">
              <div className="col-lg-12">
              <div className="card" >
                <img src={props.imgsrc} className="card-img-top" alt="sorry"/>
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              </div>
              </div>
              </div>
          
  );
}

export default Card;
