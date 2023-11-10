// VerifyEmail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook from react-router-dom for accessing URL parameters
import axios from 'axios'; // Import axios for making HTTP requests

// Define the VerifyEmail component
const VerifyEmail = () => {
    const { token } = useParams(); // Extract the token from the URL parameters
    const [loading, setLoading] = useState(true); // State to handle loading status
    const [message, setMessage] = useState(''); // State to store the message to be displayed to the user

    useEffect(() => {
        // Define an asynchronous function to verify the email
        const verifyEmail = async () => {
            console.log('Token received:', token); // Log the received token for debugging
            try {
                console.log('Making API call to verify email'); // Inform about the API call
                const response = await axios.get(`/api/verify/${token}`); // Make a GET request to verify the email
                console.log('Response from API:', response); // Log the response for debugging
                setMessage(response.data.message || 'Verification successful.'); // Set the message based on the API response
            } catch (error) {
                console.error('Error during email verification:', error.response || error); // Log any error that occurs during the request
                setMessage(error.response?.data?.message || 'Verification failed. Please try again or contact support.'); // Set an error message based on the error
            } finally {
                setLoading(false); // Set the loading state to false once the request is completed
            }
        };

        verifyEmail(); // Call the verifyEmail function when the component mounts
    }, [token]); // Dependency array with token to ensure the effect runs when the token changes

    if (loading) {
        return <p>Verifying...</p>; // Display a loading message while the request is being processed
    }

    return (
        <div>
            <p>{message}</p> // Display the message to the user
        </div>
    );
};

export default VerifyEmail; // Export the VerifyEmail component
