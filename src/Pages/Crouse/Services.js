import React from 'react';
import img from '../../assest/Rectangle 5.png'
import Service from './Service';

const Services = () => {
    const services=[
        {
            id:1,
            name:"Learn SCRUM: The Complete Beginner Course",
            discreption:"Samay Jain, Ex-KPMG",
            img:img
        },
        {
            id:2,
            name:"Learn SCRUM: The Complete Beginner Course",
            discreption:"Samay Jain, Ex-KPMG",
            img:img
        },
        {
            id:3,
            name:"Learn SCRUM: The Complete Beginner Course",
            discreption:"Samay Jain, Ex-KPMG",
            img:img
        },
        {
            id:4,
            name:"Learn SCRUM: The Complete Beginner Course",
            discreption:"Samay Jain, Ex-KPMG",
            img:img
        },
    ]
    return (
        <div className="container grid grid-cols-1 md:grid-cols-4 mt-52 mx-auto gap-4 mb-4 px-20 lg:px-0">
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;