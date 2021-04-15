import { useEffect, useState } from 'react';
import DoctorDetails from '../DoctorDetails/DoctorDetails';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <section className="doctors">
        <div className="container">
            <h5 style={{color:"#1CC7C1"}} className="text-center mb-5">Our Doctors</h5>
            <div className="row">
                    {
                     doctors.map(doctor =><DoctorDetails key={doctor._id} doctor={doctor} />)
                    }
                    
                </div>
        </div>
    </section>
    );
};

export default Doctors;