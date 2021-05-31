import React from 'react';
import Styled from 'styled-components'
import background from '../Image/images/background2.jpg'
function photo() {
    return (
        <Photo >
                <img src={background}></img>
        </Photo>
    )
}
  
export default photo;

const Photo = Styled.div`
img{
    width : 100%;
    height : 400px;
    object-fit : cover;
}

`
