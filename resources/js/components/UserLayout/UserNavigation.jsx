function UserNavigation(){
    return(
        <>
            <div className="dash-content-wrap">
                <header id="header-container" className="db-top-header">
                    <div id="header">
                        <div className="container-fluid">
                            <div className="left-side">
                                <div id="logo">
                                    <a href="index.html"><img src="images/logo.svg" alt=""/></a>
                                </div>
                                <div className="mmenu-trigger">
                                    <button className="hamburger hamburger--collapse" type="button">
                                    <span className="hamburger-box">
							<span className="hamburger-inner"></span>
                                    </span>
                                    </button>
                                </div>
                                <nav id="navigation" className="style-1">
                                    <ul id="responsive">
                                        <li><a href="#">Home</a>
                                            <ul>
                                                <li><a href="#">Home Map</a></li>
                                                <li><a href="#">Home Image</a></li>
                                                <li><a href="#">Home Video</a></li>
                                                <li><a href="#">Home Slider</a></li>
                                                <li><a href="#">Home Styles</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Listing</a>
                                            <ul>
                                                <li><a href="#">Listing Grid</a></li>
                                                <li><a href="#">Listing List</a></li>
                                                <li><a href="#">Listing Map</a></li>
                                                <li><a href="#">Agent View</a></li>
                                                <li><a href="#">Agencies View</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Property</a></li>
                                        <li><a href="#">Pages</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="contact-us.html">Contact</a></li>
                                        <li className="d-none d-xl-none d-block d-lg-block"><a href="login.html">Login</a></li>
                                        <li className="d-none d-xl-none d-block d-lg-block"><a href="register.html">Register</a></li>
                                        <li className="d-none d-xl-none d-block d-lg-block mt-5 pb-4 ml-5 border-bottom-0"><a href="add-property.html" className="button border btn-lg btn-block text-center">Add Listing<i className="fas fa-laptop-house ml-2"></i></a></li>
                                    </ul>
                                </nav>
                                <div className="clearfix"></div>
                            </div>
                            <div className="header-user-menu user-menu">
                                <div className="header-user-name">
                                    <span><img src="images/testimonials/ts-1.jpg" alt=""/></span>Hi, Mary!
                                </div>
                                <ul>
                                    <li><a href="user-profile.html"> Edit profile</a></li>
                                    <li><a href="add-property.html"> Add Property</a></li>
                                    <li><a href="payment-method.html">  Payments</a></li>
                                    <li><a href="change-password.html"> Change Password</a></li>
                                    <li><a href="#">Log Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <div className="clearfix"></div>
        </>
    );
}

export default UserNavigation
