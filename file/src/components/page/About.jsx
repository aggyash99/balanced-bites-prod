import React,{ Component, lazy, Suspense } from 'react';
import AboutRender from './AboutRender'
import './about.css'; 
 
class About extends Component{
 
  render(){
    
    window.onload = window.scroll(0,0);
    return (
      <AboutRender/>
    );
}
}


export default About;
 