import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='bg-gradient-to-r from-accent to-primary mt-12 rounded shadow p-8 text-white'>
            <div class="hero min-h-full ">
                <div class="hero-content text-center">
                    <div class="max-w-screen">
                        <h1 class="text-5xl font-bold">Our Business Summary</h1>
                        <p class="py-6">Our companies must be able to manufacture products of superior quality at
                            competitive costs to compete effectively in the global economy. Many studies undertaken in recent years to
                            define the most important areas of industrial research have emphasized the need to place manufacturing process
                            development on an equal basis with new product technologies for cars.
                        </p>
                        <h2 className='text-center font-bold text-slate-200 text-3xl uppercase mb-4'>Stastistics</h2>
                        <div class="stats shadow grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            <div class="stat">
                                <div class="stat-figure text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </div>
                                <div class="stat-title">We Served</div>
                                <div class="stat-value text-primary">7K +</div>
                                <div class="stat-desc">Customer's in last 6 month</div>
                            </div>

                            <div class="stat">
                                <div class="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div class="stat-title">Revenue</div>
                                <div class="stat-value text-secondary">2M+</div>
                                <div class="stat-desc">In Last 6 month</div>
                            </div>

                            <div class="stat">
                                <div class="stat-title">New Customers</div>
                                <div class="stat-value">1.2K</div>
                                <div class="stat-desc">??????(22%) than other months.</div>
                            </div>

                            <div class="stat place-items-center">
                                <div class="stat-title">Reviews</div>
                                <div class="stat-value">31K</div>
                                <div class="stat-desc">From January 1st to February 1st</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;