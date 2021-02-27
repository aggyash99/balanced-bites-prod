import React from 'react';
const Footer =()=>{
    return (
        <>
        <div className="container-fluid mx-auto footer ">
    <div className="row justify-content-center top-part">
        <div className="col-lg-12 text-center center-content">
            <div className="d-flex-inline">
                <h3 className="footer-heading">Start a Project with itCraft</h3>
            </div>
            <div className="d-flex-inline">
                <p>{`We are based in Warsaw, Bydgoszcz & Torun in Poland but we are Google Cloud Partner we can arrange a meeting at Google Campus in Warsaw or in London. We are also present in Norway. Below you will find all the contact details you need.`}</p>
            </div>
            <div className="d-flex-inline pt-2"> <button className="btn-pink btn">ESTIMATE PROJECT</button> </div>
        </div>
    </div>
    <div className="row ">
        <div className="line mb-3 mx-auto"></div>
        <div className="d-md-flex px-5 justify-content-around bd-highlight col-md-10 mx-auto">
            
           
            <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                <h5 className="places">{`TORUN`}</h5>
                <p className="mb-0">{`ul Reyana 2-4`}</p>
                <p className="mb-0">{`A0-100 Torun,`}</p>
                <p className="mb-0">{`Poland`}</p>
            </div>
            <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                <h5 className="places">WARSAW</h5>
                <p className="mb-0">Brain Embassy</p>
                <p className="mb-0">Alaya Jerasublisuble RS123</p>
                <p className="mb-0">02-222 Warsawa</p>
            </div>
            <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                <h5 className="places">LONDON</h5>
                <p className="mb-0">Google Campus</p>
                <p className="mb-0">4-5 Barnhill, Shaneditch</p>
                <p className="mb-0">London EC2A 4BK</p>
            </div>
            <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                <h5 className="places">NORWAY</h5>
                <p className="mb-0">Kristiansand</p>
            </div>
        </div>
        <div className="line mb-3 mx-auto"></div>
    </div>
    <div className="row bottom-part">
        <div className="d-lg-flex justify-content-between bd-highlight col-12">
            <div className="p-2 row flex-fill bd-highlight justify-content-left">
                <div className="p-2 d-lg-flex justify-content-center">
                    <div className="p-2 flex-fill d-flex bd-highlight">Services</div>
                    <div className="p-2 flex-fill d-flex bd-highlight">Portfolio</div>
                    <div className="p-2 flex-fill d-flex bd-highlight">Pricing</div>
                    <div className="p-2 flex-fill d-flex bd-highlight">Testimonials</div>
                    <div className="p-2 flex-fill d-flex bd-highlight">Team</div>
                    <div className="p-2 flex-fill d-flex bd-highlight">Blog</div>
                    <div className="p-2 flex-fill d-flex bd-highlight">Carrer</div>
                    <div className="p-2 flex-fill d-flex bd-highlight">How we work</div>
                    <div className="p-2 flex-fill d-flex bd-highlight">Manifesto</div>
                </div>
            </div>
            <div className="p-2 align-self-center flex-fill bd-highlight">
                <div className="fa fa-mobile px-2 grey-text">&nbsp;&nbsp;<span id="contact">888-777-666</span></div>
                <div className="fa fa-envelope-o px-2 grey-text">&nbsp;&nbsp;info@itcraft.in</div>
            </div>
        </div>
    </div>
</div>
        </>
    );
};

export default Footer;