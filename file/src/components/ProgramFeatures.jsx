import React from 'react';
import nopills from '../Image/pics/pills.svg'
import option from '../Image/pics/option.svg';
import whatsApp from '../Image/pics/whatsapp1.svg'
import plain from '../Image/pics/plain1.svg'
import routine from '../Image/pics/routine1.svg';
import logos from '../Image/logo1.png'
import Styled from 'styled-components'; 

 const ProgramsFeatures = (props)=>{
    return (
        <div className="container">
        <Top className="row">  
            <Mainhead>Program Features</Mainhead>
            <MidHead>Nutritionist & Diabetes Educator</MidHead>
            <Descriptions >Diets prescribed are designed for a particular person or purpose. We emphasise and focus only on Individual needs & requirements.</Descriptions>
        </Top>


        <div className="row">

            <div className="col-lg-4">
            <Main className="col-lg-12">
            <Content>
            <Card>
            <Img>
            <img src={option}></img>
            </Img>
            <Heading>Heading</Heading>
            <Writeup>100 % customized diet plans; no pre – defined or fixed diets.</Writeup>
            </Card>
            </Content>
            </Main> 

            <Main className="col-lg-12">
                
                <Content> 
                    <Card>
                <Img>
                <img src={routine}></img>
                </Img>
                <Heading>Heading</Heading>
                <Writeup>Analysis of your routine & food preferences.</Writeup>
                </Card>
                
                </Content>
                </Main>
            </div>
            
            
    
    
    
            
            <Main className="col-lg-4 LEFTCARD-Center">
            <Center>
            <img src={logos}></img>
            </Center>
         
            </Main>
    
    
    
    
    
            
            <div className="col-lg-4">

            <Main className="col-lg-12">
                
            <Content>
                <Card>
            <Img>
            <img src={nopills}></img>
            </Img>
            <Heading>Heading</Heading>
            <Writeup>Non – restrictive diet & lifestyle plan.</Writeup>
            </Card>
            </Content>
            </Main> 

            <Main className="col-lg-12">
            
            <Content>
                <Card>
            <Img>
            <img src={plain}></img>
            </Img>
            <Heading>Heading</Heading>
            <Writeup>Provide you multiple options in your diet plan.</Writeup>
            </Card>
            </Content>
                </Main>

            </div>
             
            
            
             <LAST className="row">
             <Main className="col-lg-4 col-12">
            <Content>
                <Card>
            <Img> 
            <img src={whatsApp}></img>
        
            </Img>
            <Heading>Support</Heading>
            <Writeup>Ongoing support & guidance via. WhatsApp chat.</Writeup>
            </Card>
            </Content>
            </Main>

                 </LAST>   
            
                
        </div>
                
    
    </div>
    
    
    );
}
export default ProgramsFeatures


const Main = Styled.div`
padding : 5% 2%;
display : flex;
justify-content : center;
position : relative;

`

const Content = Styled.div`
border: 1px solid white;
padding : 20px;
background: #f9f9f9;
cursor : pointer;
border-radius : 10px;
box-shadow : 1px 1px 2px 2px rgb(240,240,249);
transition : all 250ms;
// &:hover{
//     box-shadow : 0px 30px 10px 0px #f9f9f9;
//     background : #ffffff;
// }
`
const Card = Styled.div` 
width : 250px;
height : 150px;
padding :20px 0px;
margin : 10px 20px;
`
const Img = Styled.div`
position :relative;
cursor : pointer; 

img{
    width : 70px;
    height : 70px; 
    position : absolute;
    bottom : 0;
    background : red;
    z-index : 0;
    left : 50%;
    transform:translate(-50%);    
    background : transparent;
    transition : all 250ms;
    padding : 5px;

}
`
const Heading = Styled.div`
padding : 5px;
text-align : center;
font-weight : 600;
font-family : roboto;
`
const Writeup = Styled.div`
position : relative;
bottom : -5%;
letter-spacing: 1.5px;
text-align : center;
font-size : 19px;
font-weight: 550;
font-family : loto sans-serif;
`
const Center = Styled.div`
width : 100%;  
display : flex;
justify-content : center; 

@media (max-width : 900px)
{
    display : none;
}

`

const Top = Styled.div`
text-align : center;
font-size : 20px;
letter-spacing : 1.2px;
color: green;
font-weight : 600;
padding : 20px;
`
const Mainhead = Styled.span`
font-size : 30px;
word-spacing : 5px;
font-family : 'Poppins', sans-serif;
padding : 5px 0px;
`

const Descriptions = Styled.div`
font-size : 15px;
padding: 10px 100px;
color : #000000;
@media (max-width : 400px)
{
    padding : 10px 0px;
}
`
const MidHead = Styled.div`
color : #000000;
`

const Bottom = Styled.div`
// position: relative;

// @media (max-width : 500px)
// {
//     top : 0;
// }
`
const LAST = Styled.div`
margin-top : -40px;
display : flex;
justify-content : center;
@media(max-width : 700px)
{
    margin-top : 0px;
    
}
`