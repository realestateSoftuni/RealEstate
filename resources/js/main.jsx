/*jshint esversion: 6 */
import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import {Routes, Route} from 'react-router-dom';
// import InfoSideBar from './components/InfoSideBar.jsx';
import AOS from 'aos'
import NotFound404 from "./components/NotFound404.jsx";
import Register from "./components/Register.jsx";
import EmailVerify from "./components/EmailVerify.jsx";

import AddEditProperty from "./components/AddEditProperty.jsx";
import FAQs from "./components/FAQs.jsx";
import Footer from "./components/MainLayout/Footer.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import LogIn from "./components/LogIn.jsx";
import AddProperty from "./components/AddEditProperty.jsx";
import ChangePassword from "./components/ChangePassword.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx";
import EditProfile from "./components/EditProfile.jsx";
import User from "./components/UserDetails.jsx";
import SingleProperty from "./components/SingleProperty.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";
import FirstBlogArticle from "./components/FirstBlogArticle.jsx";
import SecondBlogArticle from "./components/SecondBlogArticle.jsx";
import AboutUs from "./components/AboutUs.jsx"


import "../../public/favicon.ico"
import '../../public/css/jquery-ui.css'
import '../../public/font/flaticon.css'

import "../../public/css/fontawesome-all.min.css";
import "../../public/css/fontawesome-5-all.min.css";
import "../../public/css/font-awesome.min.css";
import '../../public/css/search-form.css';
import "../../public/css/search.css";
import "../../public/css/animate.css";
import "../../public/css/aos.css";
import "../../public/css/aos2.css";
import "../../public/css/magnific-popup.css";
import "../../public/css/lightcase.css";
import '../../public/css/owl-carousel.css';
import "../../public/css/owl.carousel.min.css";
import "../../public/css/bootstrap.min.css";
import "../../public/css/menu.css";
import "../../public/css/slick.css";
import "../../public/css/styles.css";
import '../../public/css/colors/brown.css';
import '../../public/css/leaflet.css';
import '../../public/css/leaflet-gesture-handling.min.css';
import '../../public/css/leaflet.markercluster.css';
import '../../public/css/leaflet.markercluster.default.css';
import '../../public/css/timedropper.css';
import '../../public/css/datedropper.css';
import '../../public/css/default.css';
import 'react-modal-video/scss/modal-video.scss';
import '../../public/css/dashbord-mobile-menu.css';
import '../../public/css/swiper.min.css'
import UserProperties from "@/components/UserProperties.jsx";




function Main() {
    useEffect(() => {
        AOS.init()
    }, []);

    return (
        <div className="inner-pages sin-1 maxw1600 m0a homepage-2 the-search hd-white">
                <div id="wrapper">
                    {/*< InfoSideBar />*/}
                    <Routes>
                        <Route path="/about-us" element={<AboutUs/>}/>
                        {/*<Route path="/process" element={<Process/>}/>*/}
                        <Route path="/faqs" element={<FAQs/>}/>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path='/blog' element={<Blog/>} />
                        <Route path='/navigating-the-real-estate-market' element={<FirstBlogArticle/>} />
                        <Route path='/embracing-the-future' element={<SecondBlogArticle/>} />
                        <Route path="/property" element={<SingleProperty/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/verify/:token" element={<EmailVerify />}/>
                        <Route path="/about-us" element={<AboutUs/>}/>
                        <Route path="*" element={<NotFound404 />} />
                        <Route path='/contact-us' element={<Contact/>}/>
                        <Route path='/add-property' element={<AddEditProperty/> } />
                        <Route path='/edit-property' element={<AddEditProperty action={'edit'}/>} />
                        <Route path='/favorite-properties' element={<UserProperties collection={'favorites'}/> } />
                        <Route path='/my-properties' element={<UserProperties collection='my-properties'/> } />

                    </Routes>
                </div>
        </div>
    );
}

export default Main
