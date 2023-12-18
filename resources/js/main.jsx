import React, {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HeaderBar from "./components/HeaderBar.jsx";
import Footer from "./components/Footer.jsx";
import HeaderSearchBar from "./components/HeaderSearchBar.jsx";
import PopularPlaces from "./components/PopularPlaces.jsx";
import Register from "./components/Register.jsx";
import EmailVerify from "./components/EmailVerify.jsx";
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


import AOS from 'aos'
import NotFound404 from "./components/NotFound404.jsx";


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
                    </Routes>
                    <Footer/>
                </div>
            </Router>
        </div>
    );
}

export default Main
