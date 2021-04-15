import React from 'react';

const ServicesDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center mt-5 m-md-0">
            <img style={{height:'50px'}} src={service.img} alt=""/>
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, in.</p>
        </div>
    );
};

export default ServicesDetails;