import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Review from './Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-scrubland-15745.herokuapp.com/review')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            {/* <h3 className='text-3xl font-bold text-center text-primary mt-12'>What People Say!</h3>
            <Swiper
                navigation={true} modules={[Navigation]} className="mySwiper"
            >
                {
                    reviews.map(r => <SwiperSlide> <Review
                        key={r._id}
                        review={r}
                    ></Review></SwiperSlide>)
                }
            </Swiper> */}
        </div>
    );
};

export default Reviews;