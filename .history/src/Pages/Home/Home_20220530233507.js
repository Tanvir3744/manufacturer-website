import React from 'react';
import BusinessSummary from '../../Components/BusinessSummary';
import Feat from '../../Components/Feat';
import OurClient from '../../Components/OurClient';
import Products from '../../Components/Products';
import Reviews from '../../Components/Reviews';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <BusinessSummary />
            <Products />
            <Reviews />
            <Feat/>
            <OurClient />
        </div>
    );
};

export default Home;