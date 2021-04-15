import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import'./BusinessCard.css';

const BusinessCard = ({businessData}) => {
    return (
        <div className="col-md-4 text-white info-card mb-3 m-md-0">
           <div className={`d-flex justify-content-center info-container businessData-${businessData.background}`}>
           <div>
                <FontAwesomeIcon className="info-icon" icon={businessData.icon}></FontAwesomeIcon>
            </div>
            <div>
                <h6>{businessData.title}</h6>
                <small>{businessData.description}</small>
            </div>
           </div>
        </div>
    );
};

export default BusinessCard;