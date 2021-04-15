import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingAppointCard = ({ booking, date }) => {
  const [modalIsOpen,setIsOpen] =useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
    return (
      <div className="col-md-4 mb-5">
            <div class="card shadow-sm p-3">
            <div class="card-body text-center">
                <h5 style={{color:"#1CC7C1"}} class="card-title text-brand">{booking.subject}</h5>
                <h6>{booking.visitingHour}</h6>
                <p>{booking.totalSpace} SPACES AVAILABLE</p>
                <button onClick={openModal} style={{backgroundImage: "linear-gradient(90deg, #86ebe7, #1CC7C1)"}}className="btn text-white">Book Appointment</button>
                <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentName ={booking.subject} date={date}></AppointmentForm>
            </div>
        </div>
      </div>
    );
};

export default BookingAppointCard;