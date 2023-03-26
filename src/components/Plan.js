import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory, Link } from "react-router-dom";

const Plan = () => {
    const { id } = useParams();
    const history = useHistory();
    const [plan, setPlan] = useState(null);

    useEffect(() => {
        fetchPlan();
    }, []);

    const fetchPlan = async () => {
        try {
            const response = await axios.get(`/api/plans/${id}`);
            setPlan(response.data);
        } catch (error) {
            console.error("Error fetching plan:", error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this plan?")) {
            try {
                await axios.delete(`/api/plans/${id}`);
                history.push("/plans");
            } catch (error) {
                console.error("Error deleting plan:", error);
            }
        }
    };

    if (!plan) return <div>Loading...</div>;

    return (
        <div>
            <h1>{plan.name}</h1>
            <p>Price: {plan.price}</p>
            <p>Period: {plan.period}</p>
            <Link to={`/plans/${id}/edit`}>Edit Plan</Link>
            <button onClick={handleDelete}>Delete Plan</button>
        </div>
    );
};

export default Plan;
