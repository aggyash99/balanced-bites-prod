import React from 'react';
import Styled from 'styled-components';
const ProgramsFeatures = props => {
  return (
    <>
      <div className="container">
        <Top className="row">
          <Mainhead>
            <span className="borderbottom mb-2">
              Program <Color>Features</Color>
            </span>
          </Mainhead>
          <MidHead>Nutritionist & Diabetes Educator</MidHead>
          <Descriptions>
            Diets prescribed are designed for a particular person or purpose. We
            emphasise and focus only on Individual needs & requirements.
          </Descriptions>
        </Top>

        <div className="row">
          <div className="col-lg-4">
            <Main className=" col-lg-12">
              <Content className="tick">
                <Card>
                  <Img className="tick_mark">
                    <img
                      alt="alt"
                      src="https://res.cloudinary.com/balance-bites/image/upload/v1624351518/Home_carousel/food_m3gv1a.svg"
                    ></img>
                  </Img>

                  <Writeup>
                    100% customized diet plans, no pre – defined or fixed diets.
                  </Writeup>
                </Card>
              </Content>
            </Main>

            <Main className=" col-lg-12">
              <Content className="tick">
                <Card>
                  <Img className="tick_mark">
                    <img
                      alt="alt"
                      src="https://res.cloudinary.com/balance-bites/image/upload/v1624258026/Programs_features/routine1_w2e9ii.svg"
                    ></img>
                  </Img>

                  <Writeup>
                    Analysis of your routine & food preferences.
                  </Writeup>
                </Card>
              </Content>
            </Main>
          </div>

          <CenterImg className="col-lg-4 Center">
            <div className="col-12 position-relative">
              <Center>
                <IMGCENTER
                  alt="alt"
                  src="https://res.cloudinary.com/balance-bites/image/upload/v1624257986/Programs_features/program_cnwd88.png"
                ></IMGCENTER>
              </Center>
            </div>
          </CenterImg>

          <div className="col-lg-4">
            <Main className="  col-lg-12">
              <Content className="tick">
                <Card>
                  <Img className="tick_mark">
                    <img
                      alt="alt"
                      src="https://res.cloudinary.com/balance-bites/image/upload/v1624257980/Programs_features/cross_qseprb.svg"
                    ></img>
                  </Img>

                  <Writeup>Non – restrictive diet & lifestyle plan.</Writeup>
                </Card>
              </Content>
            </Main>

            <Main className="col-lg-12">
              <Content className="tick">
                <Card>
                  <Img className="tick_mark">
                    <img
                      alt="alt"
                      src="https://res.cloudinary.com/balance-bites/image/upload/v1624258024/Programs_features/dietplan_tueumt.svg"
                    ></img>
                  </Img>

                  <Writeup>
                    Provide you multiple options in your diet plan.
                  </Writeup>
                </Card>
              </Content>
            </Main>
          </div>
        </div>

        <LAST className="row">
          <Main className="col-lg-4 col-12">
            <Content className="tick">
              <Card>
                <Img className="tick_mark">
                  <img
                    src="https://res.cloudinary.com/balance-bites/image/upload/v1624257991/Programs_features/support_fsp7mw.svg"
                    alt=""
                  ></img>
                </Img>
                <Writeup>
                  Ongoing support & guidance via. WhatsApp chat.
                </Writeup>
              </Card>
            </Content>
          </Main>
        </LAST>
      </div>
    </>
  );
};
export default ProgramsFeatures;
const IMGCENTER = Styled.img`
`;
const CenterImg = Styled.div` 
`;
const Main = Styled.div`
padding : 5% 2%; 
display : flex;
justify-content :center;
position : relative;
 
`;

const Content = Styled.div`
border: 1px solid white;
padding : 20px;
margin-bottom : 20px;
background: #f5f5f5;
cursor : pointer;
border-radius : 10px;

box-shadow : 1px 1px 2px 2px rgb(240,240,249);

&:hover{

    box-shadow : 2px 4px 5px 5px rgb(240,240,249);
}
&:before{
    position : absolute;
    //     left : 0;
    //     content: "";
    //     width : 100px;
    //     height : 100px;
    //     background : red;
    //     top : 0;
    // //     z-index : ;
}
transition : all 250ms;
`;
const Card = Styled.div` 
width : 250px;
height : 150px;
padding :20px 0px;
margin : 10px 20px;
display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:hover{
      box-shadow : 0px 10px 10px 0px #f9f9f9;
      }
`;
const Img = Styled.div`
position : relative;
cursor : pointer; 
&:before{
    position : absolute; 
    content : "";
    border-radius : 50%;
    width : 90px;
    height : 90px;
    background : #f9f9f9f9;
    bottom  : -7px;
    left : 50%;
    transform : translate(-50%);
    z-index : 8;
 }

img{ 
    width : 70px;
    height : 70px; 

    position : absolute;
    bottom : 5px;
    z-index : 8;
    left : 50%;
    transform:translate(-50%);    
    // background : #f9f9f9;
     padding : 2px;
    transition : all 250ms;
    // padding : 0px;
    // box-shadow : 1px 0px 0px 12px #f5f5f5;
} 

`;

const Writeup = Styled.div`
position : relative;
bottom : 17px;
letter-spacing: 1.5px;
text-align : center;
font-size : 19px;
font-weight: 600;
font-family : roboto ;
`;
const Center = Styled.div`
 
position : absolute;
top : 120px;
img{

    width :100%;
    height : 100%;
    object-fit : contain;
}

@media (max-width : 900px)
{
    display : none;
}

`;

const Top = Styled.div`
text-align : center;
font-size : 20px;
letter-spacing : 1.2px;
color: rgb(93, 155, 31);
font-weight : 600;
padding : 10px;

margin-bottom : 20px;
`;
const Mainhead = Styled.span`
font-size : 40px;
word-spacing : 5px;
font-family : Rubik, sans-serif;
padding : 5px 0px;

@media (max-width : 400px)
{
   // padding : 10px 0px;
    font-size : 33px;
}
`;
const Color = Styled.span`
color : black;
`;
const Descriptions = Styled.div`
font-size : 15px;
padding: 10px 10px;
color : #000000;
font-family : roboto;
@media (max-width : 400px)
{
    padding : 10px 0px;
    display : none;
}
`;
const MidHead = Styled.div`
color :red;
font-family :  'Caveat', cursive;
font-size : 30px;
font-weight : 500;

 
`;

const LAST = Styled.div`
margin-top : -40px;
display : flex;
justify-content : center;
@media(max-width : 700px)
{
    margin-top : 0px;
    
}
`;
