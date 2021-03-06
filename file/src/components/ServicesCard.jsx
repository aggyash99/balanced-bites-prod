import React, { Component } from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import image from '../Image/services/fit.jpg';
import { Opacity } from '@material-ui/icons';

class ServicesCards extends Component{

  hand = () =>{     
      const e = findDOMNode(this.refs.toggle);
      $(e).addClass('animate');
        console.log('x');
  }

  leave =()=>{
    const e = findDOMNode(this.refs.toggle);
      $(e).removeClass('animate');
  }

  render(){
      return (
          <>
  <div className=" allcar col-12 col-lg-4  mx-auto">
  <div class="maincards"> 
<img class="card-img-top" src={this.props.imgsrc} alt="Card image cap"  />
<div class="card-body" onMouseOver={this.hand} onMouseLeave={this.leave}>
  <h5 class=" text-center" >Card title</h5>
  <div>
   <a href="#" ref="toggle" class="btn btn-primary ">Go somewhere</a>
  </div>
  </div>
  </div>
  </div>
      
</>
)
}
}

export default ServicesCards;