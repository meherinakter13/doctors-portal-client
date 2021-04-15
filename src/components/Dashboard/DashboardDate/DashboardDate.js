import React from 'react';
import AppointmentShortList from '../../Appointment/AppointmentShortList/AppointmentShortList';

const DashboardDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h1 className="brand text-center">Appointments</h1>
            {
                appointments.length?
                <AppointmentShortList appointments={appointments}></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="text-center">No available appointment on this day.</h4>
                </div>
            }
        </div>
    );
};

export default DashboardDate;