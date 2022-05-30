import React from 'react';

const PortFolio = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://scontent.fcgp6-1.fna.fbcdn.net/v/t1.6435-9/209965356_1155338458265314_6896445838031691684_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMcezElSMlnHqFZhaHe09DgXdqAvVslNeBd2oC9WyU14pW06uIr4MYSJKnCeRxzKA_Pol4RH8NJqRDGblJ8IvF&_nc_ohc=kY_7r14AV2cAX_Are2A&tn=3zNZIjNE46W80S-x&_nc_ht=scontent.fcgp6-1.fna&oh=00_AT9ooqLb0JYf_0faUD6e4AEW3-MxX4BEBiDeIwyp8L2EPA&oe=62BA302F" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Mohammad Biplob Hossain
                    </h2>
                    <p><strong>Email : </strong>biplobmohammad1@gmail.com</p>
                    <p><strong>Education : </strong>BBS</p>
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn m-1">Skills</label>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li>Item 1</li>
                           
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PortFolio;