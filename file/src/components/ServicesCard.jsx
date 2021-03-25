import React, { Component } from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import { NavLink } from 'react-router-dom';

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
  <div className=" col-12 col-lg-4  mx-auto">
  <div className="maincards" onMouseLeave={this.leave}> 
  <div></div>
<img className="card-img-top img" onMouseOver={this.hand} ref="toggle"   ref="img" src={this.props.imgsrc} alt="Card image cap"  />
<div className="card-body" ref="toggle" onMouseOver={this.hand}>
  <h5 className=" text-center" >Card title</h5>
  <div className="">
    <span>Balanced Bites Photos</span>
   <NavLink className="btn btn-primary service" exact to='/Contact' >Go somewhere</NavLink>
  </div>
  </div>
  </div>
  </div>
      
</>
)
}
}

export default ServicesCards;