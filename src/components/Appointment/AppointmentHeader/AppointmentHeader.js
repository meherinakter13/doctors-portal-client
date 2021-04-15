import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1 className="text-sm-center" style={{color:'#3A4256'}}>Appointment</h1>
         <div className="mx-5 my-4">
         <Calendar className="p-3"
                onChange={handleDateChange}
                value={new Date()}
            />
         </div>
        </div>
        <div className="col-md-6">
            <img src={chair} alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default AppointmentHeader;