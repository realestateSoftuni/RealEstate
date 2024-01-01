import UserNavigation from "./UserNavigation.jsx";
import UserFooter from "./UserFooter.jsx";
import logo from "../../../assets/FullLogo_Transparent_NoBuffer.png";
import {Link} from "react-router-dom";
const LayoutAll = ({ children }) => {
    return (
        <div className="inner-pages maxw1600 m0a dashboard-bd">
        <div id="wrapper" className="int_main_wraapper">
            <UserNavigation />
            <section className="user-page section-padding pt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-xs-12 pl-0 pr-0 user-dash">
                            <div className="user-profile-box mb-0">
                                <div className="sidebar-header"><Link to='/'><img src={logo} alt="header-logo2.png"/></Link>
                                    <div className="active-user">
                                        <h2>Mary Smith</h2>
                                    </div>
                                </div>
                                <div className="detail clearfix">
                                    <ul className="mb-0">
                                        <li>
                                            <a href="user-profile.html">
                                                <i className="fa fa-user"></i>Profile
                                            </a>
                                        </li>
                                        <li>
                                            <Link to="/my-properties">
                                                <i className="fa fa-list" aria-hidden="true"></i>My Properties
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/favorite-properties">
                                                <i className="fa fa-heart" aria-hidden="true"></i>Favorite Properties
                                            </Link>
                                        </li>
                                        <li>
                                            <a className="active" href="add-property.html">
                                                <i className="fa fa-list" aria-hidden="true"></i>Add Property
                                            </a>
                                        </li>
                                        <li>
                                            <a href="change-password.html">
                                                <i className="fa fa-lock"></i>Change Password
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index.html">
                                                <i className="fas fa-sign-out-alt"></i>Log Out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-xs-12 pl-0 user-dash2">
                            <div className="col-lg-12 mobile-dashbord dashbord">
                                <div className="dashboard_navigationbar dashxl">
                                    <div className="dropdown">
                                        <button className="dropbtn"><i className="fa fa-bars pr10 mr-2"></i> Dashboard Navigation</button>
                                        <ul id="myDropdown" className="dropdown-content">
                                            <li>
                                                <a href="dashboard.html">
                                                    <i className="fa fa-map-marker mr-3"></i> Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a href="user-profile.html">
                                                    <i className="fa fa-user mr-3"></i>Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a className="active" href="my-listings.html">
                                                    <i className="fa fa-list mr-3" aria-hidden="true"></i>My Properties
                                                </a>
                                            </li>
                                            <li>
                                                <a href="favorited-listings.html">
                                                    <i className="fa fa-heart mr-3" aria-hidden="true"></i>Favorited Properties
                                                </a>
                                            </li>
                                            <li>
                                                <a href="add-property.html">
                                                    <i className="fa fa-list mr-3" aria-hidden="true"></i>Add Property
                                                </a>
                                            </li>
                                            <li>
                                                <a href="payment-method.html">
                                                    <i className="fas fa-credit-card mr-3"></i>Payments
                                                </a>
                                            </li>
                                            <li>
                                                <a href="invoice.html">
                                                    <i className="fas fa-paste mr-3"></i>Invoices
                                                </a>
                                            </li>
                                            <li>
                                                <a href="change-password.html">
                                                    <i className="fa fa-lock mr-3"></i>Change Password
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index.html">
                                                    <i className="fas fa-sign-out-alt mr-3"></i>Log Out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </section>
            <UserFooter />
        </div>
        </div>
    );
};

export default LayoutAll;
