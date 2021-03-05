import React, { Component } from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import image from '../Image/services/fit.jpg';
import { Opacity } from '@material-ui/icons';

class ServicesCards extends Component{

  hand = () =>{     
      const e = findDOMNode(this.refs.toggle);
      $(e).slideUp(300);
    
  }

  back = () =>{
      const e = findDOMNode(this.refs.toggle);
      $(e).slideDown(300);
  }


  render(){
      return (
          <>
         <div className=" col-9 col-lg-4 mt-5  mx-auto">
  <div class="card">
<img class="card-img-top" src={this.props.imgsrc} alt="Card image cap"  onMouseOver={this.hand} onMouseLeave={this.back}/>
<div class="card-body" ref="toggle">
  <h5 class="card-title" >Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  </div>
      
</>
)
}
}

export default ServicesCards;