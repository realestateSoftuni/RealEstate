// VerifyEmail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
    const { token } = useParams();
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const verifyEmail = async () => {
            console.log('Token received:', token); // Check the received token
            try {
                console.log('Making API call to verify email');
                const response = await axios.get(`/api/verify/${token}`);
                console.log('Response from API:', response); // Check the API response
                setMessage(response.data.message || 'Verification successful.');
            } catch (error) {
                console.error('Error during email verification:', error.response || error); // Detailed error information
                setMessage(error.response?.data?.message || 'Verification failed. Please try again or contact support.');
            } finally {
                setLoading(false);
            }
        };

        verifyEmail();
    }, [token]);

    if (loading) {
        return <p>Verifying...</p>;
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default VerifyEmail;
