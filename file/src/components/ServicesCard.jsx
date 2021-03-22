import React, { Component } from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import image from '../Image/services/fit.jpg';
import { Opacity } from '@material-ui/icons';

class ServicesCards extends Component{

  hand = () =>{     
      const e = findDOMNode(this.refs.toggle);
      const img = findDOMNode(this.refs.img);
      $(e).addClass('animate');
      $(img).addClass('opacity');
        console.log('x');
  }

  leave =()=>{
    const img = findDOMNode(this.refs.img);
    const e = findDOMNode(this.refs.toggle);
      $(e).removeClass('animate');
      $(img).removeClass('opacity');
  }

  render(){
      return (
          <>
  <div className=" allcar col-12 col-lg-4  mx-auto">
  <div class="maincards" onMouseLeave={this.leave}> 
  <div></div>
<img class="card-img-top img" onMouseOver={this.hand} ref="toggle"   ref="img" src={this.props.imgsrc} alt="Card image cap"  />
<div class="card-body" ref="toggle" onMouseOver={this.hand}>
  <h5 class=" text-center" >Card title</h5>
  <div className="">
    <span>Balanced Bites Photos</span>
   <a href="#"  class="btn btn-primary service">Go somewhere</a>
  </div>
  </div>
  </div>
  </div>
      
</>
)
}
}

export default ServicesCards;