import React from 'react';
import BusinessSummary from '../../Components/BusinessSummary';
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
            <OurClient />
        </div>
    );
};

export default Home;