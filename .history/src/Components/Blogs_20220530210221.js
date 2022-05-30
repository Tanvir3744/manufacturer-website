import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How will you improve the performance of a react app?</h2>
                    <p>There are many way to imporove the react app performance.</p>
                    <p>I will disable all extensions temporarily, especially React Developer Tools, because they can mess with the result of the analysis and
                        it can make our website speed little bit slower.
                    </p>
                    <p>When I'm going to deploy my react app I will run this command 'npm run build ' it will make my react app speed faster</p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">What are the different ways to manage a state in a react application?</h2>
                    <p>We can manage our state in react in three several ways</p>
                    <p>By using useState hook  and the second is using contextapi and the another is using redux</p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">how does prototypical inheritence work?</h2>
                    <p> As we know that every object with its methods and properties contains an internal and hidden property known as prototype in javascript. The prototypical Inheritance
                        is a feature in javascript used to add methods and properties in objects.
                        It is a method by which an object can inherit the properties and methods of another object. </p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Searching product by their name</h2>
                    <p>simply while we write code in react we can find any property from an array of objects . There is an preferable way to find products 
                        name from and array and it is filter method by filtering an array we can find there name easily
                    </p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">What is unit test and why should write unit test</h2>
                    <p>simply while we write code in react we can find any property from an array of objects . There is an preferable way to find products 
                        name from and array and it is filter method by filtering an array we can find there name easily
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;