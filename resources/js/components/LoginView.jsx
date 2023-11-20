import React, { useState } from 'react';
//import toggleCurrent from "../../utilities/tooglecurrent.js";

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

    return (
            <div className="login-and-register-form modal" onClick={stopPropagation}>
                    <div className="main-overlay"></div>
                    <div className="main-register-holder">
                        <div className="main-register fl-wrap">
                            <div className="close-reg" onClick={onClose}><i className="fa fa-times" onClick={onClose}></i></div>
                            <h3>Welcome to <span>Home<strong>ESTATE</strong></span></h3>
                            <div id="tabs-container">
                                <ul className="tabs-menu">
                                    <li onClick={() => RegisterHandler(1)}>
                                        <a className={`${buttonRegisterIsClicked === 1 ? 'current' : ''}`}>Login</a></li>
                                    <li onClick={() => RegisterHandler(2)}>
                                        <a className={`${buttonRegisterIsClicked === 2 ? 'current' : ''}`}>Register</a></li>
                                </ul>
                                <div className="tab">
                                    <div className="tab-contents" style={styleChangesLog} id="tab-1">
                                        <div className="custom-form">
                                            <form method="post" name="registerform">
                                                <label>Username or Email Address * </label>
                                                <input name="email" type="text" onClick="this.select()" value=""/>
                                                <label>Password * </label>
                                                <input name="password" type="password" onClick="this.select()"
                                                       value=""/>
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
                                                <a href="#" className="google-log"><i className="fa fa-google"></i> Log in with
                                                    Google</a>
                                                <a href="#" className="facebook-log"><i className="fa fa-facebook-official"></i>Log in
                                                    with Facebook</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab">
                                        <div className="tab-contents" style={styleChangesReg} id="tab-2">
                                            <div className="custom-form">
                                                <form method="post" name="registerform" className="main-register-form"
                                                      id="main-register-form2">
                                                    <label>First Name * </label>
                                                    <input name="name" type="text" onClick="this.select()" value=""/>
                                                    <label>Second Name *</label>
                                                    <input name="name2" type="text" onClick="this.select()" value=""/>
                                                    <label>Email Address *</label>
                                                    <input name="email" type="text" onClick="this.select()" value=""/>
                                                    <label>Password *</label>
                                                    <input name="password" type="password" onClick="this.select()"
                                                           value=""/>
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
