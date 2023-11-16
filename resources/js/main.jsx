import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
// import InfoSideBar from './components/InfoSideBar.jsx';
import AOS from 'aos'
import HeaderBar from "./components/HeaderBar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/HomePage.jsx";
import {Route, Routes} from "react-router-dom";
import LogIn from "./components/LogIn.jsx";
import Register from "./components/Register.jsx";
import PropertiesCatalogue from "./components/PropertiesCatalogue.jsx";
import AddProperty from "./components/AddProperty.jsx";
import User from "./components/UserDetails.jsx";
import "../../public/favicon.ico"
import '../../public/css/jquery-ui.css'
import '../../public/font/flaticon.css'
// import '../css/app.css'
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
            <div id="wrapper">
                {/*< InfoSideBar />*/}
                < HeaderBar />

                <Routes>

                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/login' element={<LogIn/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/properties' element={<PropertiesCatalogue/>}/>
                    <Route path='/add-property' element={<AddProperty/>}/>
                    <Route path='/user-details' element={<User/>}/>

                </Routes>

                <Footer />
            </div>
        </div>
    );
}

export default Main
