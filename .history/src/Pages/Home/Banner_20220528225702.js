import React from 'react';
import WoodCutter from '../../Assests/woodcuutter.png'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen -mt-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={WoodCutter} className="max-w-sm " />
                    <div>
                        <h1 className="text-5xl font-bold">Big Sale!</h1>
                        <p className="py-6 w-9/12">We provdie best qualityfull hardware tools to all business and other company to improve and boost their business.</p>
                        <button className="btn btn-neutral font-bold uppercase">Get Products</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;