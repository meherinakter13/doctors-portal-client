import React from 'react';
import chair from '../../../images/chair.png';

const MainHeader = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center w-100">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Start Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero temporibus aperiam, voluptatum hic dolores earum!</p>
                <button style={{backgroundImage: "linear-gradient(90deg, #86ebe7, #1CC7C1)"}}class="btn text-white">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default MainHeader;