import React,{ Component } from 'react';
import logo from '../../Image/services/about.jpg';
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
      <div className="food">

<div className="alignbottomabout">
  <div className="gradientbg">

      <h1 className="headalignment " ><strong style={{color:"black", fontSize:"55px"}}>Muskan Bansal</strong><span className="headtext"> Nutritionist & Diabetes Educator</span></h1>

  </div>

</div>

</div>

    
      <div className="row d-flex">
      <div className="col-lg-8 col-md-8 pt-5 ">
      <div className="col-lg-10 col-md-10 mx-auto">
    <h5 className=" subheadtext">One Of The Best Dietitian In Delhi</h5>
          <p className="text pb-2 firstletter">
      Muskan Bansal is a young & aspiring dietitian, nutritionist and Diabetes Educator <span style={{paddingLeft:"6px"}}>f</span>rom Delhi, India. She is enthusiastically working in the field of weight management and therapeutic nutrition. She believes in a natural way of achieving a healthy lifestyle & don’t recommend artificial methods like pills and supplement.</p>
      <p className="text pt-2 pb-2">
She founded Balanced Bites in 2019, located in Rohini, Delhi. She deals with individuals who are obese or suffering from lifestyle disorders and serving personalized diet plan to the clients.</p>
<p className="text pt-2 pb-2">She  believes in <span className="greenHighlight">“never give up on your favourite food”</span> and she encourages a healthy eating lifestyle by eating all your favourite food in balance with other meals. Her plan is based on balanced diet and you will get homemade and traditional food. She encourages use of food as medicine with a holistic approach.
</p><p className="text pt-2 pb-2">Clients can also have free consultation and doubt handling sessions, you can get your own personalized diet plan by contacting us online with no clinic visit.

      </p>
      </div>
  <div className="row">
  
  </div>
      </div>

      <div className="col-lg-4 col-md-4  pt-5 d-none d-sm-block" >
      <img className="client" src="https://i.pinimg.com/236x/34/25/9d/34259d8b6b60a94f5e43bde242ecc26e.jpg" alt=" "></img>
      </div>

    </div>
    </div>
    </div>

    <div className="row">
      <div className="col-6 d-none d-sm-block" style={{paddingRight:"0px"}}>
        <div className="" style={{width:"100%", paddingRight:"0px "}}>
        < img  className="leftimageabout"  src={logo} alt="Thank You!" style={{width:"100%"}}/>
        </div>
      </div>
      <div className="col-lg-6 col-12 righttextabout fadebackground" >
        <h1 style={{paddingBottom:"20px"}}>Why choose <span className="greenHighlight" style={{fontSize:"40px"}}>Balanced Bites</span>? </h1>
        <p className="textrightsideabout">Balanced Bites assures to offer you a lot of health benefits including complete guidance to your lifestyle plan that is supposed to base on your everyday life and diet. We educate you about the food and how small changes can result in long – term health benefits. We focus on nutrition as a sustainable lifestyle change, not just calorie counting. Our mission is to bring whole foods to your plate and nourishment to your soul by providing you with the right tools and knowledge to lead a healthy and happy life.
        </p><ul className="textrightsideabout">
          <li className="listabout">✓  Customized diet plans according to your lifestyle.</li>
          <li className="listabout">✓  No external machines, pills, or supplements required.</li>
          <li className="listabout">✓  Programs where you don’t feel like being on a ‘diet’.</li>
          <li className="listabout">✓  Flexible schedules & diet plans when you travel.</li>

        </ul>
        <div style={{paddingTop:"20px"}}>
          <a href="./contact">
          <button className="  btnabout ">Contact Us</button></a>
        </div>
      </div>
    </div>
    </div>

    


    </>
  );
}
}


export default About;
