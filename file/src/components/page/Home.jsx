import React, { useState, useEffect } from 'react';
import Photo from '../photo';
import CarouselH from '../CarouselH';
import BMI from '../BMI';
import Reviewcard from '../Newcards';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
function Home() {
  const [showB, setB] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <section className="header" id="headerindex">
        <div className="container-fluid position-relative overflow-hidden">
          <div className="row home-img">
            <div className="col-lg-12 d-flex justify-content-around mx-auto position-relative p-0 para">
              <img
                style={{ width: '100%', opacity: '0.6' }}
                src="https://res.cloudinary.com/balance-bites/image/upload/v1624253199/Home_carousel/Owner_img/bg_kzasqd.jpg"
                alt="sorry"
              ></img>

              <img
                alt="sorry"
                className="owner1"
                src="https://res.cloudinary.com/balance-bites/image/upload/v1624253213/Home_carousel/Owner_img/owner2_pav1nd.png"
              ></img>
            </div>
            <div>
              <div className="home-img-p">
                Every Time you eat is an opportunity to{' '}
                <span style={{ color: 'green' }}>"Nourish Your Body"</span>
                <div className="add-new  mt-4">Muskan Bansal</div>
                <div
                  className="muskan-button"
                  style={{ marginLeft: '10px', marginTop: '10px' }}
                >
                  <Link to="/contact">Contact Us </Link>
                </div>
              </div>
              <h6>
                Healthy Mood, Healthy Mind
                <Link to="/contact"> Consult Today </Link>
              </h6>
            </div>
          </div>
        </div>

        <div
          className="carousel "
          style={{
            backgroundImage: `URL(https://res.cloudinary.com/balance-bites/image/upload/v1624253260/Home_carousel/doodle_zopthm.jpg)`,
            backgroundSize: 'center',
            objectFit: 'cover',
            backgroundRepeat: '',
          }}
        >
          <div className="caouselBody">
            <div className="text-center Home-carousel d-flex justify-content-center">
              <p>Our</p>
              <VisibilitySensor
                partialVisibility
                onChange={isVisible => {
                  setB(isVisible ? true : false);
                }}
              >
                <span className={showB ? 'borderbottom' : ''}> Programs</span>
              </VisibilitySensor>
            </div>

            <CarouselH />
          </div>
        </div>

        <BMI />

        <Reviewcard />

        <Photo></Photo>
      </section>
    </>
  );
}

export default Home;
/* eslint-enable */
