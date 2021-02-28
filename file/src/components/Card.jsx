import React from 'react';

import { NavLink } from 'react-router-dom';
const Card = (props)=> {
  return (
    
            <div className="container-fluid"> 
              <div className="row">
             
              <div className="col-lg-12 col-12">
              <div className="card" >
                <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
                </div>
              </div>
              </div>
              </div>
              </div>
          
  );
}

export default Card;
