import React from 'react';
import BusinessSummary from '../../Components/BusinessSummary';
import Review from '../../Components/Review';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <BusinessSummary />
            <Review />
        </div>
    );
};

export default Home;