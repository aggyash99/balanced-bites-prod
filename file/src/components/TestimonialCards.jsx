import React from 'react';
import Rating from '@material-ui/lab/Rating';
import EllipsisText from 'react-ellipsis-text';
import Box from '@material-ui/core/Box';
const TestimonialCards = props => {
  return (
    <div className="col-lg-12 col-12 mx-auto p-3 ">
      <div
        className="back Comments"
        style={{
          padding: '30px',
          border: '0.2px grey solid',
          borderRadius: '20px',
        }}
      >
        <div className="cards ">
          <div className="cards-body">
            <h5 className="text-capitalize text-center"> {props.name}</h5>
            <Box
              className="fliedset d-flex"
              border="transparent"
              justifyContent="center"
            >
              <Rating name="read-only" value={5} readOnly>
                {' '}
              </Rating>
            </Box>
            <hr></hr>
            <EllipsisText text={props.comment} length={300}></EllipsisText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
