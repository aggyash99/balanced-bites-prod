import React, { Component } from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import {  Link} from 'react-router-dom';


class ServicesCards extends Component{

  hand = () =>{     
      const e = findDOMNode(this.refs.toggle);
      const img = findDOMNode(this.refs.img);
      $(e).addClass('animate');
      $(img).addClass('opacity');
  }

  leave =()=>{
    const img = findDOMNode(this.refs.img);
    const e = findDOMNode(this.refs.toggle);
      $(e).removeClass('animate');
      $(img).removeClass('opacity');
  }

  c = () =>{
    console.log(this.props.num);
  }

  render(){
      return (
          <>
  <div className="col-12 col-lg-4 mb-5">



  
  <div className="card " onMouseLeave={this.leave} onMouseOver={this.hand} style={{ backgroundImage:`url(${this.props.imgsrc})`}}>
  
  <div className="text-content-for-program">
  <div className="card-body servicecards">
    <p className="title" dangerouslySetInnerHTML={{__html:this.props.title}}></p>
  </div>
  </div>
  <div className="content" ref="toggle">
 
        <div><span style={{fontSize:"18px"}}>{this.props.service}</span></div>
        <div ><Link className="success_button" to={{pathname:'/Program',state:{key : this.props.num}}} ><span className="success-for-service-text">Read More</span></Link></div>
  </div>
</div>





 
</div>


      
</>
)
}
}

export default ServicesCards;

// <Link className="btn btn-primary" to={{pathname:'/Program',
//state:{key : this.props.num}
//}} ><span >Go More</span></Link>