import React from 'react';
import EllipsisText from "react-ellipsis-text";
import {Link} from 'react-router-dom'
import Styled from 'styled-components'
const Card = (props)=> {
  return (
    
          
 
              <Cards className="" >
               
                <MyCards>
                <IMG src={props.imgsrc} className="" alt="sorry"/>
                <div className="card-body">
                <h5 className="card-title text-center">{props.title}</h5>
                <p className="card-text text-center"><EllipsisText text={`${props.description}`} length={90}/></p>
                <Button> 
                <Link className="success-for-carousel"  to={{pathname:'/Program',state:{key : props.num}}}><span className="Carousel-in-home-text">Read More</span></Link>
                </Button>
                </div>
                
              </MyCards>
              </Cards>
               

          
  );
}

export default Card;
const Cards = Styled.div`
max-height : 450px;
padding : 15px 10px; 
margin : 0 20px;
display : flex;
flex-direction : column; 

`
const IMG = Styled.img`
height : auto;
width : 100%;  
`
const MyCards = Styled.div`
background : rgb(249,249,249);
 
width : 100%;
border-radius : 5%;
height : 100%; 
overflow : hidden;
transition : all 250ms;
box-shadow : 0px 1px 5px 0px grey;
&:hover{ 
  transform : scale(1.02);
}
`

const Button = Styled.div`
display : flex;
justify-content : center;
`
 