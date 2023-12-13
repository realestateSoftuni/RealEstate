import React, {useEffect, useState} from 'react'
import {Route, Routes, useNavigate} from "react-router-dom";
import AOS from 'aos'

// import InfoSideBar from './components/InfoSideBar.jsx';
import HeaderBar from "./components/HeaderBar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import LogIn from "./components/LogIn.jsx";
import Register from "./components/Register.jsx";
import PropertiesCatalogue from "./components/PropertiesCatalogue.jsx";
import AddProperty from "./components/AddProperty.jsx";

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
import EditProfile from "./components/UserManagment/UserPages/EditProfile.jsx";
import SideBar from "@/components/UserManagment/CommonComponents/SideBar.jsx";
import ChangePassword from "./components/UserManagment/UserPages/ChangePassword.jsx";


function Main() {
    const navigate = useNavigate();
    const [excludeHeaderFooter, setExcludeHeaderFooter] = useState(false);

    useEffect(() => {
        AOS.init()
    }, []);

    const navigateToRoute = (route, exclude) => {
        // Set the state to exclude header and footer
        setExcludeHeaderFooter(exclude);
        // Navigate to the specified route
        navigate(route);
    };

    return (
        <div className="maxw1600 m0a homepage-2 the-search hd-white">
            <div id="wrapper">
                {/*< InfoSideBar />*/}
                {!excludeHeaderFooter && <HeaderBar navigateToRoute={navigateToRoute} />}

                <Routes>

                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/login' element={<LogIn/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/properties' element={<PropertiesCatalogue/>}/>
                    <Route path='/add-property' element={<AddProperty/>}/>
                    <Route path="/edit-profile" element={<EditProfile navigateToRoute={navigateToRoute}/>} />
                    <Route path="/change-password" element={<ChangePassword navigateToRoute={navigateToRoute}/>} />
                    {/*<Route path="/change-password" element={<ChangePassword/>} />*/}
                </Routes>

                {!excludeHeaderFooter && <Footer />}
            </div>
        </div>
    );
}

export default Main
