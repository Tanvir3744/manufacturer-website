import React from 'react';
import Bg from '../../Assests/bg-foot.jpg'
const Banner = () => {
    return (
        <div style={{background:`url(${Bg})`}}>
            <div class="hero min-h-screen ">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl text-white font-bold">Big Sale!</h1>
                        <p class="py-6 text-white">We provide all the spare parts which a bussiness need to improve and boost there company by our qualityfull spare parths.</p>
                        <button class="btn btn-netural text-white">See All Parts</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;