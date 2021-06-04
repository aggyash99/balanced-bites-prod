import React from 'react';
import Styled from 'styled-components'
import background from '../Image/pics/page-1.jpg'
import {Link} from 'react-router-dom'
function photo() {
    return (
        <Photo >
                <img src={background}></img>
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
}

p{
    position : absolute;
    top : 30%;
    left : 2%;
    padding:10px;
    font-family : Kaushan script;
    color : white;
    font-size : 40px;
    font-weight : 700;
    letter-spacing: 1px;
        
    @media (max-width : 400px)  
    {
        font-size : 15px;
        top : 40%;
    }
    
    
    div{
        position : relative;
        font-family : caveat;
        font-size : 40px;
        &:before{
            width : 20px;
            height : 4px;
            background : black;
            position : absolute;
            bottom : 20px;
            right : 0;
            content : "";
        
    @media (max-width : 400px)  
    {
        display : none;    
    }
        }
        
    @media (max-width : 400px)  
    {
        font-size : 25px;
    }
    }
}
&:before{
    position : absolute;
    width : 100%;
    height : 100%;
    background : black;
    top: 0;
    left : 0;
    opacity : 0.4;
    content : "";
}  

 button{
    position : absolute;
    bottom:15%;
    left : 15%;
    padding : 10px;
    
    border-radius : 35px;
    outline:none;
    border : 2px solid green;
    background : transparent;
    font-size : 22px;
    span{
        color : #2aff00e0;
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
    
}   


`
