/*jshint esversion: 9 */
import React, {useEffect, useState} from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import * as Yup from 'yup';

const LoginView = ({isOpen, onClose, children}) => {

    //Front-end validation using Formik
    if (!isOpen) return null;

    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    const[buttonRegisterIsClicked, setButtonRegIsClicked] = useState(1);

    const RegisterHandler = (buttonNumber) => {
        setButtonRegIsClicked(buttonNumber)
    };

    const styleChangesLog = {
        display: buttonRegisterIsClicked === 1 ? 'block' : 'none'
    };

    const styleChangesReg = {
        display: buttonRegisterIsClicked === 2 ? 'block' : 'none'
    };
    // Formik for login form
    const loginFormik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required!'),
            password: Yup.string().required('Password is required!'),
        }),
        onSubmit: (values) => {
            // Handle register form submission
            console.log('Login Form Values:', values);
        }
    });

    //Back-end login validation
    const onSubmitLogin = async (e) => {
        e.preventDefault();

        const formData = loginFormik.values;
        setErrors({});
        setSuccess('');
        setIsLoading(true);

        try {
            const response = await axios.post(`${window.Laravel.apiUrl}/api/login`, formData, {
                withCredentials: true, // Important for handling cookies across domains
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            console.log('Login successful!', response.data);
            setSuccess(response.data.message || 'Login successful!');
            setIsLoading(false);
        } catch (error) {
            console.error('Error during login:', error);
            setIsLoading(false);

            if (error.response && error.response.status === 401) {
                console.log('Invalid credentials');
                setErrors({ credentials: 'Incorrect username or password!' });
            } else {
                console.error('Unexpected error:', error);
            }
        }
    };


    // Formik for register form
    const registerFormik = useFormik({
        initialValues: {
            username:'',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required!'),
            first_name: Yup.string().required('First name is required!'),
            last_name: Yup.string().required('Second name is required!'),
            email: Yup.string().email('Invalid email address!').required('E-mail address is required!'),
            password: Yup.string().required('Password is required!'),
            password_confirmation: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match!')
                .required('Password is required!'),
        }),
        onSubmit: (values) => {
            // Handle register form submission
            console.log('Register Form Values:', values);
        },
    });

    // Back-end validation for register form
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

    useEffect(() => {
        if (success) {
            setButtonRegIsClicked(1);
        }
    }, [success]);

    const navigate = useNavigate(); // Hook for navigation

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmitRegister = async e => {
        e.preventDefault();
        setErrors({}); // Reset errors on new submission
        setSuccess(''); // Reset success message on new submission
        setIsLoading(true);

        try {
            const response = await axios.post(`${window.Laravel.apiUrl}/api/create_user`, formData);
            console.log('Registration successful!', response.data);
            setSuccess(response.data.message || 'Registration successful! Please check your email to verify!'); // Set success message
            setFormData({ // Clear form data
                username: '',
                email: '',
                password: '',
                password_confirmation: '',
            });
            setIsLoading(false);
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
            const errorMessage = errors[field].join(', ');
            return (<div className="error-message">{errorMessage}</div>);
        }
    };


    return (
        <div className="login-and-register-form modal" onClick={stopPropagation}>
            <div className="main-overlay"></div>
            <div className="main-register-holder">
                <div className="main-register fl-wrap">
                    <div className="close-reg" onClick={onClose}><i className="fa fa-times" onClick={onClose}></i></div>
                    <h3>Welcome to <span>Home<strong>ESTATE</strong></span></h3>
                    <div id="tabs-container">
                        <ul className="tabs-menu">
                            <li onClick={() => RegisterHandler(1)} className={`${buttonRegisterIsClicked === 1 ? 'current' : ''}`}>
                                <a>Login</a></li>
                            <li onClick={() => RegisterHandler(2)} className={`${buttonRegisterIsClicked === 2 ? 'current' : ''}`}>
                                <a>Register</a></li>
                        </ul>
                        <div className="tab">
                            <div className="tab-contents" style={styleChangesLog} id="tab-1">
                                <div className="custom-form">
                                    {success && <div className="success-message">{success}</div>}
                                    <form onSubmit={loginFormik.handleSubmit && onSubmitLogin} name="loginform" >
                                        <label>Username * </label>
                                        <input name="username"
                                               type="text"
                                               onChange={loginFormik.handleChange}
                                               onBlur={loginFormik.handleBlur}
                                               value={loginFormik.values.username}/>
                                        {loginFormik.touched.username && loginFormik.errors.username ? (
                                            <div className="error-message">{loginFormik.errors.username}</div>
                                        ) : null}
                                        {renderError('username')}

                                        <label>Password * </label>
                                        <input name="password"
                                               type="password"
                                               onChange={loginFormik.handleChange}
                                               onBlur={loginFormik.handleBlur}
                                               value={loginFormik.values.password}/>
                                        {loginFormik.touched.password && loginFormik.errors.password ? (
                                            <div className="error-message">{loginFormik.errors.password}</div>
                                        ) : null}
                                        {renderError('password')}
                                        {errors.credentials && <div className="error-message">{errors.credentials}</div>}
                                        <button type="submit" className="log-submit-btn"> <span>{isLoading ? 'Logging in...' : 'Log In'}</span>
                                        </button>
                                        <div className="clearfix"></div>
                                        <div className="filter-tags">
                                            <input id="check-a" type="checkbox" name="check"/>
                                            <label htmlFor="check-a">Remember me</label>
                                        </div>
                                    </form>
                                    <div className="lost_password">
                                        <a href="#">Lost Your Password?</a>
                                    </div>
                                    <div className="log-separator fl-wrap"><span>Or</span></div>
                                    <div className="soc-log fl-wrap">
                                        <a href="#" className="google-log"><i className="fa fa-google"></i> Sign in with
                                            Google</a>
                                        <a href="#" className="apple-log"><i className="fa fa-apple"></i>Sign in
                                            with Apple</a>
                                        <a href="#" className="facebook-log"><i className="fa fa-facebook-official"></i>Sign in
                                            with Facebook</a>
                                    </div>
                                </div>
                            </div>
                            <div className="tab">
                                <div className="tab-contents" style={styleChangesReg} id="tab-2">
                                    <div className="custom-form">
                                        {success && <div className="success-message">{success}</div>}
                                        <form onSubmit={registerFormik.handleSubmit && onSubmitRegister} name="registerform" className="main-register-form"
                                              id="main-register-form2">
                                            <label>Username * </label>
                                            <input name="username"
                                                   type="text"
                                                   onChange={(e) => {
                                                       registerFormik.handleChange(e);
                                                       onChange(e);
                                                   }}
                                                   onBlur={registerFormik.handleBlur}
                                                   value={registerFormik.values.username && formData.username}/>

                                            {registerFormik.touched.username && registerFormik.errors.username ? (
                                                <div className="error-message">{registerFormik.errors.username}</div>
                                            ) : null}
                                            {renderError('username')}

                                            <label>First Name * </label>
                                            <input name="first_name"
                                                   type="text"
                                                   onChange={(e) => {
                                                       registerFormik.handleChange(e);
                                                       onChange(e);
                                                   }}
                                                   onBlur={registerFormik.handleBlur}
                                                   value={registerFormik.values.first_name && formData.first_name}/>
                                            {registerFormik.touched.first_name && registerFormik.errors.first_name ? (
                                                <div className="error-message">{registerFormik.errors.first_name}</div>
                                            ) : null}

                                            <label>Second Name *</label>
                                            <input   name="last_name"
                                                     type="text"
                                                     onChange={(e) => {
                                                         registerFormik.handleChange(e);
                                                         onChange(e);
                                                     }}
                                                     onBlur={registerFormik.handleBlur}
                                                     value={registerFormik.values.last_name && formData.last_name}/>
                                            {registerFormik.touched.last_name && registerFormik.errors.last_name ? (
                                                <div className="error-message">{registerFormik.errors.last_name}</div>
                                            ) : null}

                                            <label>Email Address *</label>
                                            <input name="email"
                                                   type="text"
                                                   onChange={(e) => {
                                                       registerFormik.handleChange(e);
                                                       onChange(e);
                                                   }}
                                                   onBlur={registerFormik.handleBlur}
                                                   value={registerFormik.values.email && formData.email}/>
                                            {registerFormik.touched.email && registerFormik.errors.email ? (
                                                <div className="error-message">{registerFormik.errors.email}</div>
                                            ) : null}
                                            {renderError('email')}

                                            <label>Password *</label>
                                            <input name="password"
                                                   type="password"
                                                   id="password1"
                                                   onChange={(e) => {
                                                       registerFormik.handleChange(e);
                                                       onChange(e);
                                                   }}
                                                   onBlur={registerFormik.handleBlur}
                                                   value={registerFormik.values.password && formData.password}/>
                                            {registerFormik.touched.password && registerFormik.errors.password ? (
                                                <div className="error-message">{registerFormik.errors.password}</div>
                                            ) : null}
                                            {renderError('password')}

                                            <label>Confirm Password *</label>
                                            <input  name="password_confirmation"
                                                    type="password"
                                                    id="password2"
                                                    onChange={(e) => {
                                                        registerFormik.handleChange(e);
                                                        onChange(e);
                                                    }}
                                                    onBlur={registerFormik.handleBlur}
                                                    value={registerFormik.values.password_confirmation && formData.password_confirmation}/>
                                            {registerFormik.touched.password_confirmation && registerFormik.errors.password_confirmation ? (
                                                <div className="error-message">{registerFormik.errors.password_confirmation}</div>
                                            ) : null}
                                            {renderError('password_confirmation')}
                                            <button type="submit" className="log-submit-btn" disabled={isLoading}>
                                                <span> {isLoading ? 'Registering...' : 'Register Now!'}</span></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default LoginView
