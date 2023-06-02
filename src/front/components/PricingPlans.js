import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'lib/axios';

const PricingPlans = ({ user }) => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await axios.get('/api/plans');
                setPlans(response.data); // Assuming the response data contains an array of plans
            } catch (error) {
                console.error('Error fetching plans:', error);
            }
        };

        fetchPlans();
    }, []);

    const navigate = useNavigate();

    const handlePurchase = async (planId) => {
        try {
            const response = await axios.post('/api/purchases', {
                plan_id: planId,
                user_id: user.data.id
            });
            console.log('Purchase successful:', response.data);

            // Redirect the user to the payment form URL
            const paymentFormUrl = response.data.payment_form_url;
            window.location.href = paymentFormUrl;
        } catch (error) {
            console.error('Error creating purchase:', error);
        }
    };

    return (
        <section id="pricing-plans" className="py-5">
            <div className="container">
                <div className="row">
                    {plans.map((plan) => (
                        <div className="col" key={plan.id}>
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">{plan.name}</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">₹{plan.price}
                                        <small className="text-muted fw-light">/{plan.period}</small>
                                    </h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>1 user included</li>
                                        <li>2 GB of storage</li>
                                        <li>No Email support</li>
                                        <li>No Help Center</li>
                                    </ul>
                                    <button
                                        type="button"
                                        className="w-100 btn btn-lg btn-outline-danger"
                                        onClick={() => handlePurchase(plan.id)}
                                    >
                                        Buy plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;
