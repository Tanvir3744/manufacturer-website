import React from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';
import 'swiper/css';

const Review = (props) => {
    const { description, ratings, name } = props.review;
    return (
        <div className="card bg-base-100 shadow-xl my-12">
            <div className="card-body text-center">
                <p>{description}</p>
                <div className="text-center">
                    <h4 className='text-xl text-primary'>{name}</h4>
                    <StarRatings
                        rating={parseFloat(ratings)}
                        numberOfStars={5}
                        starDimension="20px"
                        starRatedColor="goldenrod"
                        starSpacing="15px"
                    />
                </div>
            </div>
        </div>
    );
};

export default Review;