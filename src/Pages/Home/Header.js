import React from 'react';
import "./Header.css"
import pic1 from '../../assest/Ellipse 1.png'
import pic2 from '../../assest/Ellipse 2.png'
import pic3 from '../../assest/Ellipse 3.png'
import pic4 from '../../assest/Ellipse 4.png'
import Time from '../Time/Time';

const Header = () => {

    return (
        <div
            style={{
                backgroundColor: '#9921E8',
                backgroundImage: "cover",
            }} className="max-w-screen h-screen mx-auto">
                <div className="flex">

                <div className="mt-14 px-8 justify-start">
                    <p className="bg-white rounded-lg p-1">#MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY</p>
                    <div className="mt-8"> 
                        <h2 className="text-white text-3xl">Unleash Your SCRUM Skills,<br />
                        Grab More Attention To Résumé</h2>
                    </div>
                    <button className="btn-text">ENROLL NOW</button>

                    <div className="time">
                   <p className="time-heading">10% OFF on all courses* | Offer Valid For</p>
                   <div className="time-2">
                    <Time />
                   </div>

                    </div>
                </div>

                <div className="hidden md:block">
                   <img className="img1" src={pic4} alt="" />
                   <img className="img2" src={pic3} alt="" />
                    <img className="img3" src={pic2} alt="" />
                    <img className="img4" src={pic1} alt="" />
                </div>
                    
                </div>

        </div>

    )
};

export default Header;