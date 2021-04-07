import React from 'react';
import Rating from '@material-ui/lab/Rating';
import EllipsisText from 'react-ellipsis-text';
import Box from '@material-ui/core/Box';
import { Ellipsis } from 'react-bootstrap/esm/PageItem';
const Testimonial = () => {
  

  return (
   
    <section className="text-center mb-5 p-1">
    
    
      <h2 className="h1-responsive font-weight-bold my-5">Testimonials</h2>
    
      <div className="row">
    
   
        <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
        
          <div className="card testimonial-card">
        
        
            <div className="card-up info-color"></div>
            
           
            <div className="card-body testimonial-card">
           
              <h4 className="font-weight-bold mb-4">Amit shah</h4>
              <div  >
        <Box component="fieldset"   border="transparent">
           
         <Rating name="read-only" value={3} readOnly></Rating>
         </Box>
    </div>
              <hr /> 
              <p className="dark-grey-text mt-4 testimonial"><i className="fas fa-quote-left pr-2"></i><EllipsisText  text={`I have lost approx 3kg with great inch loss in a short period of 2 months. It was very much difficult for me to loose weight with my medical conditions but still u have done wonders. I am enjoying my food, now I have the knowledge of healthy eating. The diet plans were just awesome and easy to follow. I really liked the experience with Dt. Muskan, really appreciate her help. Highly Recommend.`} length="300" /></p>
            </div>
          </div>
          
        </div> 
        <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
      <div className="card testimonial-card ">
       
   

            <div className="card-up blue-gradient">
            </div>
            
             <div className="card-body testimonial-card">
               
              <h4 className="font-weight-bold mb-4">Yash sir</h4>
              <div >
              <Box component="fieldset"   border="transparent">
              <Rating name="read-only" value={3} readOnly></Rating>
              </Box>
          </div>
              <hr />
            
              <p className="dark-grey-text mt-4 testimonial"><i className="fas fa-quote-left pr-2"></i><EllipsisText text={` All over experience was good with dietician Muskan Bansal till now. She is very careful and will take care of your diet for the time being. If you are taking advice from her, you don't have to do too much hard work. Just you need to change your eating process and you will surely enjoy your favourite food.😋😋 One of the best dietician.👌👌`} length='300'/></p>
            </div>
          </div>
          
        </div>
 
    
    
        <div className="col-lg-4 col-md-6">
         
          <div className="card testimonial-card">
         <div className="card-up indigo"></div>

        
    
              <div className="card-body testimonial-card">
           
              <h4 className="font-weight-bold mb-4">Maria Kate</h4>
              <div >
         <Box component="fieldset" border="transparent">
         <Rating name="read-only" value={3} readOnly></Rating>
         </Box>
        </div>
              <hr /> 
              <p className="dark-grey-text mt-4 testimonial"><i className="fas fa-quote-left pr-2"></i>< EllipsisText text={`Best experience till now. Dietitian Muskan is highly professional and provided me diet plan according to my daily eating habits, changes can be noticed from first week itself. After 3 weeks i was able to reduce more than 7 kgs without any changes my daily routine
Thank you so much to help me getting back in shape after lockdown ❤❤.`} length="300"/></p>
            </div>
          </div> 
        </div> 
      </div> 
    
    </section> 
  );
}

export default Testimonial;