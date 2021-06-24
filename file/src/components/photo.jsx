import React from 'react';
import Styled from 'styled-components'
import background from '../Image/pics/page-2.jpg'
import {Link} from 'react-router-dom'
function photo() {
    return (
        <Photo >
           

                <img alt="sorry"src={background}></img>
                <p>
                    3 MONTHS NUTRITION PROGRAM
                    <div>Lets begin your healthiest journey together</div> 
                </p>
                <button><Link to='/contact'><span>Consult Now</span></Link></button>
        </Photo>
    )
}
  
export default photo;

const Photo = Styled.div`
position : relative;
img{
    width : 100%;
    height : 400px;
    object-fit : cover;
    transform : scaleX(-1);
 
}

p{
    position : absolute;
    top : 20%;
    right : 2%;
    z-index: 5;
    padding:10px;
    font-family : Kaushan script;
    color : white;
    font-size : 40px;
    font-weight : 700;
    letter-spacing: 1px; 
    @media (max-width : 400px)  
    {
        width : 100%;
        font-size : 25px;
        word-spacing : 0px;
        
        left : 50%;
        top : 0%;
        transform: translate(-50%, 30%);
    }
    @media (max-width : 425px)  
    {
        
        text-align : center;
        
        //transform: translate(50%, 14%);
    }
    
    div{
        position : relative;
        font-family : 'kaushin' script;
        font-size : 40px; 
        margin-top : 10px;
        width : 100%;
    @media (max-width : 400px)  
    {
        font-size : 30px;
    }
    
    
    }
}
&:after{
    position : absolute;
    width : 100%;
    height : 100%;
    background : black;
    top: 0;
    left : 0;
    opacity : 0.5;
    content : "";
    z-index : 1;

}  

 button{
    position : absolute;
    bottom:25%;
    right : 20%;
    padding : 5px 10px;
    z-index: 5;
    border-radius : 35px;
    outline:none;
    border : 2px solid green;
    background : green;
  
    font-size : 20px;
    span{
        color : rgb(249,249,249);
        letter-spacing : 1px;
    }   
    font-weight : 700;
    font-family : "Poppins", sans-serif;
    transition : all 350ms;
    &:hover{
        background : #f9f9f9;
        
        border-color : white;
        span{
            color : green;
            font-weight : 900;    
        }
    }
      
@media (max-width : 400px){
    left : 28%; 
    bottom : 20%;
    // top : 50%;
    // transition : translate(-50%, -50%);
}
} 

`
