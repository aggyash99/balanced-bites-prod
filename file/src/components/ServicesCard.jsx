import React from 'react';

const ServicesCards = (props) =>{
return (
<>

    <div className=" col-9 col-lg-4 mt-5 servicescard mx-auto">
    <div class="card">
  <img class="card-img-top" src={props.imgsrc} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </div>

</>
)
}

export default ServicesCards;