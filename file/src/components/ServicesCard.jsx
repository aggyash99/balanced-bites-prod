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
  <div class="maincards"> 
  <div></div>
<img class="card-img-top img" ref="img" src={this.props.imgsrc} alt="Card image cap"  />
<div class="card-body" onMouseOver={this.hand} onMouseLeave={this.leave}>
  <h5 class=" text-center" >Card title</h5>
  <div>
    <span>Balanced Bites Photos</span>
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