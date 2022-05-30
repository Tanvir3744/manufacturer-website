import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Review from './Review';


const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <h3 className='text-3xl font-bold text-center text-primary mt-12'>What People Say!</h3>
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