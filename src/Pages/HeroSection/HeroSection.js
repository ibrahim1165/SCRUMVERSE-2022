import React from 'react';
import "./Hero.style.css"
import victor from '../../assest/Vector .png'

const HeroSection = () => {
    return (
        <div className="flex hero">

            <div className="hero-1">
                <img src={victor} alt="" />
            </div>
            
            {/* <div>
                <h2 className="heading-title">Start learning with us right now!</h2>
                <p className="heading-title2">Choose from 100+ online video courses with new updates.</p>
                <button className="btn-box">ENROLL NOW</button>
            </div> */}
        </div>
    );
};

export default HeroSection;