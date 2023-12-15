import logo from '../../../public/images/FullLogo_Transparent_NoBuffer.png'
import {useState} from "react";
import {Link} from "react-router-dom";

function HeaderBar(){
    const[isLanguageClicked, setIsLanguageClicked] = useState(false)
    const[isProfileClicked, setIsProfileClicked] = useState(false)
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
                               <Link to='/'><img src={logo} alt=""/></Link>
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
                                    <li><a href="#">Home</a>
                                        <ul>
                                            <li><a href="#">Home Map</a>
                                                <ul>
                                                    <li><a href="index-9.html">Home Map Style 1</a></li>
                                                    <li><a href="index-12.html">Home Map Style 2</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Home Image</a>
                                                {/*<ul>*/}
                                                {/*    <li><a href="index.html">Modern Home</a></li>*/}
                                                {/*    <li><a href="index-2.html">Home Boxed Image</a></li>*/}
                                                {/*    <li><a href="index-3.html">Home Modern Image</a></li>*/}
                                                {/*    <li><a href="index-5.html">Home Minimalist Style</a></li>*/}
                                                {/*    <li><a href="index-6.html">Home Parallax Image</a></li>*/}
                                                {/*    <li><a href="index-8.html">Home Search Form</a></li>*/}
                                                {/*    <li><a href="index-10.html">Modern Full Image</a></li>*/}
                                                {/*    <li><a href="index-15.html">Home Typed Image</a></li>*/}
                                                {/*    <li><a href="index-17.html">Modern Parallax Image</a></li>*/}
                                                {/*    <li><a href="index-18.html">Image Filter Search</a>*/}
                                                {/*        <li><a href="index-21.html">Parallax Image video</a></li>*/}
                                                {/*        <li><a href="index-23.html">Home Image</a></li>*/}
                                                {/*        <li><a href="index-24.html">Image and video</a></li>*/}
                                                {/*    </li>*/}
                                                {/*</ul>*/}
                                            </li>
                                            <li><a href="#">Home Video</a>
                                                <ul>
                                                    <li><a href="index-4.html">Home Video Image</a></li>
                                                    <li><a href="index-7.html">Home Video</a></li>
                                                    <li><a href="index-20.html">Home Modern Video</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Home Slider</a>
                                                <ul>
                                                    <li><a href="index-11.html">Slider Presentation 2</a></li>
                                                    <li><a href="index-16.html">Slider Presentation 3</a></li>
                                                    <li><a href="index-19.html">Home Modern Slider</a></li>
                                                    <li><a href="index-22.html">Home Image Slider</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Home Styles</a>
                                                <ul>
                                                    <li><a href="index-13.html">Home Style Dark</a></li>
                                                    <li><a href="index-14.html">Home Style White</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#">About Us</a>
                                        <ul>
                                            <li> <Link to='/our-story'>Our Story</Link>
                                            </li>
                                            <li><Link to='/'>Mission</Link>
                                            </li>
                                            <li><Link to='/'>Benefits</Link>
                                            </li>
                                            <li><Link to='/'>Client stories</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Property</a>
                                        <ul>
                                            <li><a href="single-property-1.html">Single Property 1</a></li>
                                            <li><a href="single-property-2.html">Single Property 2</a></li>
                                            <li><a href="single-property-3.html">Single Property 3</a></li>
                                            <li><a href="single-property-4.html">Single Property 4</a></li>
                                            <li><a href="single-property-5.html">Single Property 5</a></li>
                                            <li><a href="single-property-6.html">Single Property 6</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Pages</a>
                                        <ul>
                                            <li><a href="#">Shop</a>
                                                <ul>
                                                    <li><a href="shop-with-sidebar.html">Product Sidebar</a></li>
                                                    <li><a href="shop-full-page.html">Product Fullpage</a></li>
                                                    <li><a href="shop-single.html">Product Single</a></li>
                                                    <li><a href="shop-checkout.html">Checkout Page</a></li>
                                                    <li><a href="shop-order.html">Order Page</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">User Panel</a>
                                                <ul>
                                                    <li><a href="dashboard.html">Dashboard</a></li>
                                                    <li><a href="user-profile.html">User Profile</a></li>
                                                    <li><a href="my-listings.html">My Properties</a></li>
                                                    <li><a href="favorited-listings.html">Favorited Properties</a></li>
                                                    <li><a href="add-property.html">Add Property</a></li>
                                                    <li><a href="payment-method.html">Payment Method</a></li>
                                                    <li><a href="invoice.html">Invoice</a></li>
                                                    <li><a href="change-password.html">Change Password</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="faq.html">Faq</a></li>
                                            <li><a href="pricing-table.html">Pricing Tables</a></li>
                                            <li><a href="404.html">Page 404</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="register.html">Register</a></li>
                                            <li><a href="coming-soon.html">Coming Soon</a></li>
                                            <li><a href="under-construction.html">Under Construction</a></li>
                                            <li><a href="ui-element.html">UI Elements</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Blog</a>
                                        <ul>
                                            <li><a href="#">Grid Layout</a>
                                                <ul>
                                                    <li><a href="blog-full-grid.html">Full Grid</a></li>
                                                    <li><a href="blog-grid-sidebar.html">With Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">List Layout</a>
                                                <ul>
                                                    <li><a href="blog-full-list.html">Full List</a></li>
                                                    <li><a href="blog-list-sidebar.html">With Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact-us.html">Contact</a></li>
                                    <li className="d-none d-xl-none d-block d-lg-block"><a href="login.html">Login</a></li>
                                    <li className="d-none d-xl-none d-block d-lg-block"><a href="register.html">Register</a></li>
                                    <li className="d-none d-xl-none d-block d-lg-block mt-5 pb-4 ml-5 border-bottom-0"><a href="add-property.html" className="button border btn-lg btn-block text-center">Add Listing<i className="fas fa-laptop-house ml-2"></i></a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="right-side d-none d-none d-lg-none d-xl-flex">
                            <div className="header-widget">
                                <a href="add-property.html" className="button border">Add Listing<i className="fas fa-laptop-house ml-2"></i></a>
                            </div>
                        </div>

                        <div className={`header-user-menu user-menu add ${isProfileClicked ? 'active' : ''}`} onClick={profileHandler}>
                            <div className="header-user-name">
                                <span><img src="images/testimonials/ts-1.jpg" alt=""/></span>Hi, Mary!
                            </div>
                            <ul>
                                <li><a href="#"> Edit profile</a></li>
                                <li><a href="#"> Add Property</a></li>
                                <li><a href="#">  Payments</a></li>
                                <li><a href="#"> Change Password</a></li>
                                <li><a href="#">Log Out</a></li>
                            </ul>
                        </div>

                        <div className="right-side d-none d-none d-lg-none d-xl-flex sign ml-0">
                            <div className="header-widget sign-in">
                                <div className="show-reg-form modal-open"><a href="#">Sign In</a></div>
                            </div>
                        </div>
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

export default HeaderBar
