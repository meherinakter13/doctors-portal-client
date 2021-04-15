import React from 'react';
import BusinessCard from '../BusinessCard/BusinessCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const businessInfo =[
    {
        title: 'Opening Hours',
        description: 'We are open 24/7 days.',
        icon: faClock,
        background: "primary"
    },
    {
        title: 'VIsit our location',
        description: 'Pollibiddut, Savar, Dhaka',
        icon: faMapMarker,
        background: "dark"
    },
    {
        title: 'Contact us now',
        description: '+8801966666699',
        icon: faPhone,
        background: "primary"
    }
]
    return (
        <section className="d-flex justify-content-center ">
           <div className="row w-75">
                {
                    businessInfo.map(businessData =><BusinessCard businessData={businessData}></BusinessCard>)
                }
           </div>
        </section>
    );
};

export default BusinessInfo;