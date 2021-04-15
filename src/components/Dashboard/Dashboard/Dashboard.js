import React, { useState,useEffect, useContext } from 'react';
import DashboardDate from '../DashboardDate/DashboardDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])
    const handleDateChange = date=>{
        setSelectedDate(date); 
    }
    useEffect( () => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate.toDateString(), email: loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data => setAppointments(data))
    }, [selectedDate])

    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height:"100%"
    }
    return (
       <section>
           <div style={containerStyle} className="container-fluid row">
               <div className="col-md-2">
                   <Sidebar></Sidebar>
               </div>
               <div className="col-md-5 d-flex justify-content-center mt-5 h-75">
                    <Calendar className="p-3"
                        onChange={handleDateChange}
                        value={new Date()}
                    />
               </div>
               <div className="col-md-5 mt-5">
                   <DashboardDate appointments ={appointments}></DashboardDate>
               </div>
           </div>
       </section>
    );
};

export default Dashboard;