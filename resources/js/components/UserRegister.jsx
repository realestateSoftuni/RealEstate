import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Assuming your CSS file is in the correct path
import '@/css/registerpage.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate(); // Hook for navigation

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        setErrors({}); // Reset errors on new submission
        setSuccess(''); // Reset success message on new submission
        setIsLoading(true);

        try {
            const response = await axios.post(`${window.Laravel.apiUrl}/api/create_user`, formData);
            console.log('Registration successful!', response.data);
            setSuccess(response.data.message || 'Registration successful! Please check your email to verify.'); // Set success message
            setFormData({ // Clear form data
                username: '',
                email: '',
                password: '',
                password_confirmation: '',
            });
            setIsLoading(false);
            // Login Logic
            // setTimeout(() => { // Redirect after 3 seconds
            //     navigate('/login'); // Replace '/login' with the path you want to redirect to
            // }, 3000);
        } catch (error) {
            console.error('Error during registration:', error);
            setIsLoading(false);
            if (error.response && error.response.status === 422) {
                console.log('Validation errors:', error.response.data.errors);
                setErrors(error.response.data.errors);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    };

    const renderError = field => {
        if (errors[field]) {
            const errorMessage = errors[field].join(', '); // Assuming errors[field] is an array
            return <span style={{ color: 'red' }}>{errorMessage}</span>;
        }
    };

    return (
        <div className="register-container">
            {success && <div className="success-message">{success}</div>}
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <div className="form-header">RealEstate SoftUni Register</div>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={formData.username}
                        onChange={onChange}
                        required
                    />
                    {renderError('username')}
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={onChange}
                        required
                    />
                    {renderError('email')}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={onChange}
                        required
                    />
                    {renderError('password')}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={onChange}
                        required
                    />
                    {renderError('password_confirmation')}
                </div>
                <div className="form-group">
                    <button type="submit" className="register-btn" disabled={isLoading}>{isLoading ? <div className="spinner-container"><div className="spinner"></div></div> : 'Register'}</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
