/*jshint esversion: 6 */
import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Route, Routes} from "react-router-dom";
// import InfoSideBar from './components/InfoSideBar.jsx';
import AOS from 'aos'
import NotFound404 from "./components/NotFound404.jsx";
import HeaderBar from "./components/HeaderBar.jsx";
import HeaderSearchBar from "./components/HeaderSearchBar.jsx";
import PopularPlaces from "./components/PopularPlaces.jsx";
import Register from "./components/Register.jsx";
import EmailVerify from "./components/EmailVerify.jsx";

import Footer from "./components/Footer.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import LogIn from "./components/LogIn.jsx";
import Register from "./components/Register.jsx";
import PropertiesCatalogue from "./components/PropertiesCatalogue.jsx";
import AddProperty from "./components/AddProperty.jsx";
import User from "./components/UserDetails.jsx";
import Contact from "./components/Contact.jsx"
import AboutUs from "./components/AboutUs.jsx"


import "../../public/favicon.ico"
import '../../public/css/jquery-ui.css'
import '../../public/font/flaticon.css'

import "../../public/css/fontawesome-all.min.css"
import "../../public/css/fontawesome-5-all.min.css"
import "../../public/css/font-awesome.min.css"
import '../../public/css/search-form.css'
import "../../public/css/search.css"
import "../../public/css/animate.css"
import "../../public/css/aos.css"
import "../../public/css/aos2.css"
import "../../public/css/magnific-popup.css"
import "../../public/css/lightcase.css"
import "../../public/css/owl.carousel.min.css"
import "../../public/css/bootstrap.min.css"
import "../../public/css/menu.css"
import "../../public/css/slick.css"
import "../../public/css/styles.css"
import '../../public/css/colors/dark-gray.css'



function Main() {
    useEffect(() => {
        AOS.init()
    }, []);
    
    return (
        <div className="maxw1600 m0a homepage-2 the-search hd-white">

            <Router>
                <div id="wrapper">
                    {/*< InfoSideBar />*/}
                    < HeaderBar/>
                    <Routes>
                        <Route path="/" element={
                            <main className="main">
                                <HeaderSearchBar/>
                                <PopularPlaces/>
                            </main>}/>
                        <Route path="/about-us" element={<AboutUs/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/verify/:token" element={<EmailVerify />}/>
                        <Route path="*" element={<NotFound404 />} />
                        <Route path='/contact-us' element={<Contact/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </Router>

        </div>
    );
}

export default Main
