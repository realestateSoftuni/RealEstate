import React from 'react'
import ReactDOM from 'react-dom/client'
// import InfoSideBar from './components/InfoSideBar.jsx';
import HeaderBar from "./components/HeaderBar.jsx";
import Footer from "./components/Footer.jsx";
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
import HeaderSearchBar from "./components/HeaderSearchBar.jsx";

function Main() {

    return (
        <div className="maxw1600 m0a homepage-2 the-search hd-white">
            <div id="wrapper">
                {/*< InfoSideBar />*/}
                < HeaderBar />

                <main className="main">
                    <HeaderSearchBar/>
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default Main
