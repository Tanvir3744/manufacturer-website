import React from 'react';
import Brand1 from '../Assests/brand-1.jpg';
import Brand2 from '../Assests/brand-2.jpg';
import Brand3 from '../Assests/brand-3.jpg';
import Brand4 from '../Assests/brand-4.jpg';
import Brand5 from '../Assests/brand-5.jpg';
import Brand6 from '../Assests/brand-6.jpg';

const OurClient = () => {
    const ourClient = [
        { img: Brand1 },
        { img: Brand2 },
        { img: Brand3 },
        { img: Brand4 },
        { img: Brand5 },
        { img: Brand6 },
    ]
    return (
        <div>
            {
                ourClient.map(client =>
                    <div class="stats stats-vertical lg:stats-horizontal shadow max-w-7xl px-12">
                        <div class="stat">
                            <div class="stat-value"><img src={client.img} alt="" /></div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default OurClient;