import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginView = ({isOpen, onClose, children}) => {

    if (!isOpen) return null;

    const stopPropagation = (e) => {
        e.stopPropagation();
    }
    const scrollToTarget = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
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

    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            // Handle login form submission
            console.log('Login Form Values:', values);
        },
    });

    // Formik for register form
    const registerFormik = useFormik({
        initialValues: {
            name: '',
            name2: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            name2: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required'),
        }),
        onSubmit: (values) => {
            // Handle register form submission
            console.log('Register Form Values:', values);
        },
    });

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
                                    <form method="post" name="registerform" onSubmit={loginFormik.handleSubmit}>
                                        <label>Username or Email Address * </label>
                                        <input name="email"
                                               type="text"
                                               onChange={loginFormik.handleChange}
                                               onBlur={loginFormik.handleBlur}
                                               value={loginFormik.values.email}/>
                                        {loginFormik.touched.email && loginFormik.errors.email ? (
                                            <div className="error-message">{loginFormik.errors.email}</div>
                                        ) : null}
                                        <label>Password * </label>
                                        <input name="password"
                                               type="password"
                                               onChange={loginFormik.handleChange}
                                               onBlur={loginFormik.handleBlur}
                                               value={loginFormik.values.password}/>
                                        {loginFormik.touched.password && loginFormik.errors.password ? (
                                            <div className="error-message">{loginFormik.errors.password}</div>
                                        ) : null}
                                        <button type="submit" className="log-submit-btn"><span>Log In</span>
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
                                        <form method="post" name="registerform" className="main-register-form"
                                              id="main-register-form2" onSubmit={registerFormik.handleSubmit}>
                                            <label>First Name * </label>
                                            <input name="name"
                                                   type="text"
                                                   onChange={registerFormik.handleChange}
                                                   onBlur={registerFormik.handleBlur}
                                                   value={registerFormik.values.name}/>
                                            {registerFormik.touched.name && registerFormik.errors.name ? (
                                                <div className="error-message">{registerFormik.errors.name}</div>
                                            ) : null}
                                            <label>Second Name *</label>
                                            <input   name="name2"
                                                     type="text"
                                                     onChange={registerFormik.handleChange}
                                                     onBlur={registerFormik.handleBlur}
                                                     value={registerFormik.values.name2}/>
                                            {registerFormik.touched.name2 && registerFormik.errors.name2 ? (
                                                <div className="error-message">{registerFormik.errors.name2}</div>
                                            ) : null}
                                            <label>Email Address *</label>
                                            <input name="email"
                                                   type="text"
                                                   onChange={registerFormik.handleChange}
                                                   onBlur={registerFormik.handleBlur}
                                                   value={registerFormik.values.email}/>
                                            {registerFormik.touched.email && registerFormik.errors.email ? (
                                                <div className="error-message">{registerFormik.errors.email}</div>
                                            ) : null}
                                            <label>Password *</label>
                                            <input name="password"
                                                   type="password"
                                                   onChange={registerFormik.handleChange}
                                                   onBlur={registerFormik.handleBlur}
                                                   value={registerFormik.values.password}/>
                                            {registerFormik.touched.password && registerFormik.errors.password ? (
                                                <div className="error-message">{registerFormik.errors.password}</div>
                                            ) : null}
                                            <label>Confirm Password *</label>
                                            <input  name="confirmPassword"
                                                    type="password"
                                                    onChange={registerFormik.handleChange}
                                                    onBlur={registerFormik.handleBlur}
                                                    value={registerFormik.values.confirmPassword}/>
                                            {registerFormik.touched.confirmPassword && registerFormik.errors.confirmPassword ? (
                                                <div className="error-message">{registerFormik.errors.confirmPassword}</div>
                                            ) : null}
                                            <button type="submit" className="log-submit-btn">
                                                <span>Register</span></button>
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
