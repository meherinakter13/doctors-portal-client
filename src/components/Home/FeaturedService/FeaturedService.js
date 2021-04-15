import React from 'react';
import featured from '../../../images/featured.png';
const FutureServices = () => {
    return (
        <section className="pb-0 pb-md-5 my-5 pt-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on Your Terms</h1>
                        <p className="text-secondary my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus sunt harum, eos provident consequatur voluptate quaerat. Ratione tempora qui, veniam sunt dolor commodi amet. Rerum, corporis tenetur incidunt tempore quis eos cumque laudantium nobis?</p>
                        <button style={{backgroundImage: "linear-gradient(90deg, #86ebe7, #1CC7C1)"}} className="btn w-25 text-white mt-3">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FutureServices;