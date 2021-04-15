import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="appointment-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5 information ">
                        <h5 style={{color:"#1CC7C1"}} className="mb-3">APPOINTMENT</h5>
                        <h1 className="mb-3">Make an appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, distinctio reprehenderit! Consectetur voluptate quae eius?</p>
                        <button style={{backgroundImage: "linear-gradient(90deg, #86ebe7, #1CC7C1)"}} className="btn w-25 text-white mt-3">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;