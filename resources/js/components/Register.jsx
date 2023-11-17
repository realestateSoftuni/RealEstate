import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';


const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        first_name: '',
        last_name: '',
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
        <div className="inner-pages hd-white">
            <div id="wrapper">
                <section className="headings">
                    <div className="text-heading text-center">
                        <div className="container">
                            <h1>Register</h1>
                            <h2><Link to='/'>Home</Link> &nbsp;/&nbsp; Register</h2>
                        </div>
                    </div>
                </section>
                <div id="login">
                    <div className="login">
                        {success && <div className="success-message">{success}</div>}
                        <form onSubmit={onSubmit} autoComplete="off">
                            <div className="form-group">
                                <label>Your Username</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={onChange}
                                    required
                                />
                                <i className="ti-user"></i>
                                {renderError('username')}
                            </div>
                            <div className="form-group">
                                <label>Your First Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={onChange}
                                    required
                                />
                                <i className="ti-user"></i>
                                {renderError('first_name')}
                            </div>
                            <div className="form-group">
                                <label>Your Last Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={onChange}
                                    required
                                />
                                <i className="ti-user"></i>
                                {renderError('last_name')}
                            </div>
                            <div className="form-group">
                                <label>Your Email</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={onChange}
                                    required
                                />
                                <i className="icon_mail_alt"></i>
                                {renderError('email')}
                            </div>
                            <div className="form-group">
                                <label>Your Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={onChange}
                                    required
                                    id="password1"
                                />
                                <i className="icon_lock_alt"></i>
                                {renderError('password')}
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password_confirmation"
                                    value={formData.password_confirmation}
                                    onChange={onChange}
                                    required
                                    id="password2"
                                />
                                <i className="icon_lock_alt"></i>
                                {renderError('password_confirmation')}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn_1 rounded full-width add_top_30" disabled={isLoading}>
                                    {isLoading ? 'Registering...' : 'Register Now!'}
                                </button>
                            </div>
                            <div className="text-center add_top_10">Already have an account? <strong><Link to='/login'>Sign In</Link></strong></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

