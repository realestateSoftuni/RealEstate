import React from 'react'
import ReactDOM from 'react-dom/client'
import InfoSideBar from './components/InfoSideBar.jsx';
import HeaderBar from "./components/HeaderBar.jsx";
import Footer from "./components/Footer.jsx";
import '../../public/css/styles.css'
import "../../public/favicon/favicon.ico"
import '../../public/css/jquery-ui.css'
import '../css/app.css'
import '../../public/css/jquery-ui.css'
import "../../public/css/fontawesome-5-all.min.css"
import "../../public/css/font-awesome.min.css"
import "../../public/css/fontawesome-all.min.css"
import "../../public/css/search.css"
import "../../public/css/animate.css"
import "../../public/css/aos.css"
import "../../public/css/aos2.css"
import "../../public/css/swiper.min.css"
import "../../public/css/magnific-popup.css"
import "../../public/css/lightcase.css"
import "../../public/css/owl-carousel.css"
import "../../public/css/owl.carousel.min.css"
import "../../public/css/bootstrap.min.css"
import "../../public/css/menu.css"
import "../../public/css/slick.css"
import "../../public/css/styles.css"
import "../../public/css/default.css"
import '../../public/scss/styles.scss'
import $ from 'jquery';
import HeaderSearchBar from "./components/HeaderSearchBar.jsx";
import "../../public/js/jquery-3.5.1.min.js"
import "../../public/js/rangeSlider.js"
// import "../../public/js/tether.min.js"
// import "../../public/js/moment.js"
import "../../public/js/bootstrap.min.js"
// import "../../public/js/mmenu.min.js"
// import "../../public/js/mmenu.js"
// import "../../public/js/aos.js"
// import "../../public/js/aos2.js"
import "../../public/js/slick.min.js"
import "../../public/js/fitvids.js"
import "../../public/js/jquery.waypoints.min.js"
import "../../public/js/jquery.counterup.min.js"
import "../../public/js/imagesloaded.pkgd.min.js"
import "../../public/js/isotope.pkgd.min.js"
// import "../../public/js/smooth-scroll.min.js"
import "../../public/js/lightcase.js"
import "../../public/js/search.js"
import "../../public/js/owl.carousel.js"
// import "../../public/js/jquery.magnific-popup.min.js
import "../../public/js/ajaxchimp.min.js"
import "../../public/js/newsletter.js"
import "../../public/js/jquery.form.js"
import "../../public/js/jquery.validate.min.js"
import "../../public/js/searched.js"
import "../../public/js/forms-2.js"
import "../../public/js/range.js"
import "../../public/js/color-switcher.js"
// import "../../public/revolution/js/jquery.themepunch.tools.min.js"
import "../../public/revolution/js/jquery.themepunch.revolution.min.js"
// import "../../public/js/script.js"

function Main() {

    return (
        <body className="maxw1600 m0a homepage-2 the-search hd-white">
            <div id="wrapper">
                < InfoSideBar />
                < HeaderBar />

                <main className="main">
                    <HeaderSearchBar/>
                    {/*<HeaderBar />*/}
                </main>

                <Footer />
            </div>
        </body>
    );
}

export default Main
