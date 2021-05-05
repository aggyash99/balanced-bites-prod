import React,{ Component } from 'react';
import Ankur from '../Ankur';
import logo from '../../Image/services/about.jpg';
import BMI from '../BMI';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';
import './about.css';
class About extends Component{

  opens =()=>{
    const o = findDOMNode(this.refs.toggle);
    //const b = findDOMNode(this.refs.black);
   //$(b).addClass("black");
   $(o).addClass('ankur');
  }


  render(){
    return (
    <>


    <div className="container-fluid about g-0">

    <div className="row g-0">
      <div className="col-lg-12 col-md-12 mx-auto">
    
      <div className="row d-flex">
      <div className="col-lg-8 col-md-8 pt-5 order-lg-2">
      <h1 className="headtext" ><><strong style={{color:"black", fontSize:"55px"}}>Muskan Bansal</strong> Nutritionist & Diabetes</></h1>

      <div className="col-lg-10 col-md-10 mx-auto">
      <h5 className="pt-5">One Of The Best Dietitian In Delhi</h5>
      <p className="text pb-2 firstletter">
      Muskan Bansal is a young & aspiring dietitian, nutritionist and Diabetes Educator <span style={{paddingLeft:"6px"}}>f</span>rom Delhi, India. She is enthusiastically working in the field of weight management and therapeutic nutrition. She believes in a natural way of achieving a healthy lifestyle & don’t recommend artificial methods like pills and supplement.</p>
      <p className="text pt-2 pb-2">
She founded Balanced Bites in 2019, located in Rohini, Delhi. She deals with individuals who are obese or suffering from lifestyle disorders and serving personalized diet plan to the clients.
She doesn’t believe in “give up on your favourite food” instead of this she encourages a healthy eating lifestyle by eating all your favourite food in balance with other meals. Her plan is based on balanced diet and you will get homemade and traditional food. She encourages use of food as medicine with a holistic approach.
Clients can also have free consultation and doubt handling sessions, you can get your own personalized diet plan by contacting us online with no clinic visit.

      </p>
      </div>
  <div className="row">
  
  </div>
      </div>

      <div className="col-lg-4 col-md-4 order-1 pt-5 ">
      <img className="client" src="https://i.pinimg.com/236x/34/25/9d/34259d8b6b60a94f5e43bde242ecc26e.jpg"></img>
      </div>

    </div>
    </div>
    </div>
    </div>

    


    </>
  );
}
}


export default About;
