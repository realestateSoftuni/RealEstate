/*jshint esversion: 6 */
import logo from '../../../assets/FullLogo_Transparent_NoBuffer.png'
import React, {useState} from "react";
import {Link} from "react-router-dom";
//import SingleProperty from "@/components/SingleProperty.jsx";


import SignInComponent from "../SignInComponent.jsx";

function HeaderBar(){
    const[isLanguageClicked, setIsLanguageClicked] = useState(false)
    const[isProfileClicked, setIsProfileClicked] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const languageHandler = () =>{
        setIsLanguageClicked(!isLanguageClicked)
    }

    const profileHandler = () => {
        setIsProfileClicked(!isProfileClicked)
    }


    return (
        <>
            <div id="header-container">
                <div id="header">
                    <div className="container container-header">
                        <div className="left-side">
                            <div id="logo">
                                <Link to="/"><img src={logo} alt=""/></Link>
                            </div>
                            <div className="mmenu-trigger">
                                <button className="hamburger hamburger--collapse" type="button">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                            <nav id="navigation" className="style-1 white">
                                <ul id="responsive">
                                    <li><a href="#">Listing</a>
                                        <ul>
                                            <li><Link to='/for-sale'>For Sale</Link></li>
                                            <li><Link to='/for-rent'>For Rent</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to='/about-us'>About Us</Link>
                                    </li>
                                    <li>
                                        <Link to={'/property'}>Property</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us">Contact</Link>
                                    </li>
                                    <li className="d-none d-xl-none d-block d-lg-block"><a href="login.html">Login</a></li>
                                    <li className="d-none d-xl-none d-block d-lg-block"><a href="register.html">Register</a></li>
                                    <li className="d-none d-xl-none d-block d-lg-block mt-5 pb-4 ml-5 border-bottom-0"><Link to="/add-property" className="button border btn-lg btn-block text-center">Add Listing<i className="fas fa-laptop-house ml-2"></i></Link></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="right-side d-none d-none d-lg-none d-xl-flex">
                            <div className="header-widget">
                                <Link to="/add-property" className="button border">Add Listing<i className="fas fa-laptop-house ml-2"></i></Link>
                            </div>
                        </div>

                        { isLoggedIn ? (
                        <div className={`header-user-menu user-menu add ${isProfileClicked ? 'active' : ''}`} onClick={profileHandler}>
                            <div className="header-user-name">
                                <span><img src="images/testimonials/ts-1.jpg" alt=""/></span>Hi, Mary!
                            </div>
                            <ul>
                                <li><a href="#"> Edit profile</a></li>
                                <li><Link to="/add-property"> Add Property</Link></li>
                                <li><a href="#">  Payments</a></li>
                                <li><a href="#"> Change Password</a></li>
                                <li><a href="#">Log Out</a></li>
                            </ul>
                        </div>
                            ) : (

                        < SignInComponent />
                            )}

                        <div className={`header-user-menu user-menu add d-none d-lg-none d-xl-flex ${isLanguageClicked ? 'active' : ''}`} onClick={languageHandler}>
                            <div className="lang-wrap">
                                <div className="show-lang"><span><i className="fas fa-globe-americas"></i><strong>ENG</strong></span><i className="fa fa-caret-down arrlan"></i></div>
                                <ul className="lang-tooltip lang-action no-list-style">
                                    <li><a href="#" className="current-lan" data-lantext="En">English</a></li>
                                    <li><a href="#" data-lantext="Fr">Francais</a></li>
                                    <li><a href="#" data-lantext="Es">Espanol</a></li>
                                    <li><a href="#" data-lantext="De">Deutsch</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    )
}

export default HeaderBar;
