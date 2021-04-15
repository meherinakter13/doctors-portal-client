import React from 'react';
import tooth from '../../../images/tooth.png';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const Services = () => {
    const servicesInfo = [
        {
            name: 'Fluoride Treatment',
            img:fluoride
        },
        {
            name: 'Cavity Filling',
            img:cavity
        },
        {
            name: 'Teeth Whitening',
            img:tooth
        }
    ]
    return (
        <section className="mb-5 mt-md-0">
            <div className="text-center mt-5 ">
                <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide </h2>
                <div className="d-flex justify-content-center">
                    <div className="row w-75 mt-5 pt-5 ">
                            {
                                servicesInfo.map(service =><ServicesDetails service={service}></ServicesDetails>)
                            }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;