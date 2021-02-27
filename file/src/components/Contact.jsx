import React, { useState } from 'react'
import Map from './Map';
function Contact() {




  const [Data,setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:"",
  });
  const InputEvent = (event) =>{
    const {name,value} = event.target;
    setData((prevval)=>{
      return {
        ...prevval,
        [name]:value,
      };
    })
  }
  const formsubmit = (e)=>{
    e.preventDefault();
    console.log(Data);
  }
  return (
    <>
    <div className = "my-5">
      <h1 className="text-center">Contact Us</h1>
    </div>
    <div className = "container-fluid contact_div">
      <div className="row">
     
        <div className="col-md-6 col-sm-6 col-lg-6 input">
          <div className="container-fluid">

          <form onSubmit = {formsubmit} className=" mx-auto">
            <div className="mb-3" required>
            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" name='fullname' value={Data.fullname} onChange={InputEvent} placeholder="Enter your name"/>
            </div>
            <div className="mb-3" required>
            <label for="exampleFormControlInput1" className="form-label">Phone No.</label>
            <input type="number" className="form-control" id="exampleFormControlInput1" name='phone' value={Data.phone} onChange={InputEvent} placeholder="mobile number"/>
            </div>
            <div className="mb-3" required>
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={Data.email} onChange={InputEvent} placeholder="name@example.com"/>
            </div>
            <div className="mb-3" required>
            <label for="exampleFormControlTextarea1" className="form-label"  >Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='msg' value={Data.msg} onChange={InputEvent}></textarea>
            </div>
            <div className="col-lg-6 col-sm-6 mx-auto">
            <button className="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
          </form>
         
          </div>
        </div> 
      <div className="col-lg-6 col-sm-6 col-md-6">
      contact
      </div>

        </div>
        <div className="row d-flex justify-content-center">
        
      <div className="col-lg-12 col-12">
          <Map/>
      </div>
      </div>
      </div>
     
      
    
    </>
  );
}

export default Contact;
