import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen -mt-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Big Sale!</h1>
                        <p className="py-6 w-9/12">We provdie best qualityfull hardware tools to all business and other company to improve and boost their business.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;