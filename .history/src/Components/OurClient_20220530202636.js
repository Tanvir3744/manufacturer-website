import React from 'react';
import Brand1 from '../Assests/brand-1.jpg';
import Brand2 from '../Assests/brand-2.jpg';
import Brand3 from '../Assests/brand-3.jpg';
import Brand4 from '../Assests/brand-4.jpg';
import Brand5 from '../Assests/brand-5.jpg';

const OurClient = () => {
    const ourClient = [
        { img: Brand1 },
        { img: Brand2 },
        { img: Brand3 },
        { img: Brand2 },
        { img: Brand3 },
        { img: Brand4 },
    ]
    return (
        <div>
            {
                ourClient.map(client =>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        <div>
                            <img class="mask mask-circle" src={client.img} />
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default OurClient;