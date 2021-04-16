import React from 'react';
import EllipsisText from "react-ellipsis-text";
import {Link} from 'react-router-dom'
const Card = (props)=> {
  return (
    
          
              <div className="col-lg-10 mx-auto col-12 col-md-7 Caro">
              <div className="card" >
                <img src={props.imgsrc} className="card-img-top" alt="sorry"/>
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text"><EllipsisText text={`${props.description}`} length="90" /></p>
                <Link className="btn btn-primary service"  to={{pathname:'/Program'
    ,state:{key : props.num}
    }} ><span style={{fontWeight:"600"}}>Read More</span></Link>
                </div>
              </div>
              </div>

          
  );
}

export default Card;
