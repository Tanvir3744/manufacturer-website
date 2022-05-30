import React from 'react';
import BusinessSummary from '../../Components/BusinessSummary';
import OurClient from '../../Components/OurClient';
import Products from '../../Components/Products';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <BusinessSummary />
            <Products />
            <OurClient />
        </div>
    );
};

export default Home;