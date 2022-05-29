import React from 'react';
import BusinessSummary from '../../Components/BusinessSummary';
import Products from '../../Components/Products';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <BusinessSummary />
            <Products />
        </div>
    );
};

export default Home;