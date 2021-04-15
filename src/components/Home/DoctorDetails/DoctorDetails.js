import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const DoctorDetails = ({doctor}) => {
    return (
        <div className="col-md-4 text-center">
        {
            doctor.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${doctor.image.img}`}alt=""/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${doctor.img}`} alt=""/>
        }
      
        <h4>{doctor.name}</h4>
        <p> <FontAwesomeIcon style={{color:"#1CC7C1"}} icon={faPhoneAlt}/> +880-188-934789</p>
    </div>
    );
};

export default DoctorDetails;