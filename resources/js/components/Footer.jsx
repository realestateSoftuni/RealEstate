import logo from '../../../public/images/FullLogo_Transparent_NoBuffer.png'

function Footer(){
    return (
        <footer className="first-footer rec-pro">
            <div className="top-footer bg-white">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="netabout">
                                <a href="" className="logo">
                                    <img src={logo} alt="Logo" style={{width: '60px'}} />
                                </a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse.</p>
                            </div>
                            <div className="contactus">
                                <ul>
                                    <li>
                                        <div className="info">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            <p className="in-p">95 South Park Avenue, USA</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                            <p className="in-p">+456 875 369 208</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            <p className="in-p ti">support@findhouses.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="navigation">
                                <h3>Navigation</h3>
                                <div className="nav-footer">
                                    <ul>
                                        <li><a href="">Home One</a></li>
                                        <li><a href="">Properties Right</a></li>
                                        <li><a href="">Properties List</a></li>
                                        <li><a href="">Property Details</a></li>
                                        <li className="no-mgb"><a href="">Agents Listing</a></li>
                                    </ul>
                                    <ul className="nav-right">
                                        <li><a href="">Agents Details</a></li>
                                        <li><a href="">About Us</a></li>
                                        <li><a href="">Blog Default</a></li>
                                        <li><a href="">Blog Details</a></li>
                                        <li className="no-mgb"><a href="">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget">
                                <h3>Twitter Feeds</h3>
                                <div className="twitter-widget contuct">
                                    <div className="twitter-area">
                                        <div className="single-item">
                                            <div className="icon-holder">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </div>
                                            <div className="text">
                                                <h5><a href="#">@findhouses</a> all share them with me baby said inspet.</h5>
                                                <h4>about 5 days ago</h4>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-holder">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </div>
                                            <div className="text">
                                                <h5><a href="#">@findhouses</a> all share them with me baby said inspet.</h5>
                                                <h4>about 5 days ago</h4>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-holder">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </div>
                                            <div className="text">
                                                <h5><a href="#">@findhouses</a> all share them with me baby said inspet.</h5>
                                                <h4>about 5 days ago</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="newsletters">
                                <h3>Newsletters</h3>
                                <p>Sign Up for Our Newsletter to get Latest Updates and Offers. Subscribe to receive news in your inbox.</p>
                            </div>
                            <form className="bloq-email mailchimp form-inline" method="post">
                                <label className="error"></label>
                                <div className="email">
                                    <input type="email" id="subscribeEmail" name="EMAIL" placeholder="Enter Your Email" />
                                    <input type="submit" value="Subscribe" />
                                    <p className="subscription-success"></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-footer bg-white-3 rec-pro">
                <div className="container-fluid sd-f">
                    <p>2021 © Copyright - All Rights Reserved.</p>
                    <ul className="netsocials">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>

            <a data-scroll="" href="#wrapper" className="go-up"><i className="fa fa-angle-double-up"></i></a>
        </footer>
    );
}

export default Footer
