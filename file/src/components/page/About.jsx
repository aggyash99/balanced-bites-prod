import React,{ Component, lazy, Suspense } from 'react';
import AboutRender from './AboutRender'
import Logo from '../../Image/logo.png';
 

import imgs from '../../Image/owner/bg.jpg';
 
import owner from '../../Image/owner/owner2.png'
import img2 from '../../Image/services/doodle.jpg'; 
import './about.css'; 
 
import Reviewcard from '../Newcards2';
import { Link } from 'react-router-dom';
import SmallerIMG from '../../Image/images/About Smaller Img.jpeg';

import VisibilitySensor from 'react-visibility-sensor';
class About extends Component{
 
  render(){
    
    window.onload = window.scroll(0,0);
    return (
      <AboutRender/>
    );
}
}


export default About;
 