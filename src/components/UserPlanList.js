import React, { useEffect, useState } from 'react';
import axios from 'lib/axios';

const UserPlanList = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await axios.get('/api/plans');
                setPlans(response.data);
            } catch (error) {
                console.error('Error fetching plans:', error);
            }
        };

        fetchPlans();
    }, []);

    return (
        <ul>
            {plans.map(plan => (
                <li key={plan.id}>
                    {plan.name} - {plan.price} ({plan.period})
                </li>
            ))}
        </ul>
    );
};

export default UserPlanList;