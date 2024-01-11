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
                                            <a href="my-listings.html">
                                                <i className="fa fa-list" aria-hidden="true"></i>My Properties
                                            </a>
                                        </li>
                                        <li>
                                            <a href="favorited-listings.html">
                                                <i className="fa fa-heart" aria-hidden="true"></i>Favorited Properties
                                            </a>
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
                        {children}
                    </div>
                </div>
            </section>
            <UserFooter />
        </div>
        </div>
    );
};

export default LayoutAll;
