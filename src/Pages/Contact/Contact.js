import React from 'react';
import "./Contact.style.css"

const Contact = () => {
    return (
        <div className="max-w-screen -96 lg:px-20 lg:mt-24">
            <div
             className="container contact flex items-center justify-center"> 
                <div  className="text-white mt-4 px-6">
                    <h3>Email Us</h3>
                    <p className="mt-4">Connect with us in case of any queries, complaints or feedbacks...</p>
                </div>
                <div className="px-6 mt-6">
                    <button className="btn-btn text-white">CONTACT US</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;