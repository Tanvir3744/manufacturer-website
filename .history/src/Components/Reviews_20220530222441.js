import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Review from './Review.js'


const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-scrubland-15745.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <h3 className='text-3xl font-bold text-center text-accent mt-12'>What People Says!</h3>
            <h4 className='text-xl font-semibold text-center mt-4'> About Our Company</h4>
            <Swiper
                navigation={true} modules={[Navigation]} className="mySwiper"
            >
                {
                    review && review.map(r => <SwiperSlide> <Review
                        key={r._id}
                        review={r}
                    ></Review></SwiperSlide>)
                }
            </Swiper> 
        </div>
    );
};

export default Reviews;