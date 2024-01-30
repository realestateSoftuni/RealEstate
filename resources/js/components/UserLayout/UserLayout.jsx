import UserNavigation from "./UserNavigation.jsx";
import UserFooter from "./UserFooter.jsx";
import logo from "../../../assets/FullLogo_Transparent_NoBuffer.png";
import {Link} from "react-router-dom";
//import { initialData } from '../../utils/initialValues.js';
import {useState} from "react";
import {initialData} from "@/utils/initialValues.js";

const LayoutAll = ({ children }) => {
    const[userMenuOpen, setUserMenuOpen] = useState(false)

    const openHandler = () => {
        setUserMenuOpen(!userMenuOpen)
    }

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
                                            <Link to="/profile-details">
                                                <li>
                                                    <a>
                                                        <i className="fa fa-address-card-o"></i>My Profile details
                                                    </a>
                                                </li>
                                            </Link>
                                            <Link to="/edit-profile">
                                                <li>
                                                    <a>
                                                        <i className="fa fa-user"></i> Edit Profile
                                                    </a>
                                                </li>
                                            </Link>
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
                                                <Link to='/add-property' state= {{ action: 'add', initialData }}>
                                                    <i className="fa fa-list" aria-hidden="true"></i>Add Property
                                                </Link>
                                            </li>
                                            <Link to="/change-password">
                                                <li>
                                                    <a>
                                                        <i className="fa fa-lock"></i>Change Password
                                                    </a>
                                                </li>
                                            </Link>
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
                                            <button onClick={openHandler} className="dropbtn"><i className="fa fa-bars pr10 mr-2"></i> User menu</button>
                                            <ul id="myDropdown" className={`dropdown-content ${userMenuOpen ? 'show' : ''}`}>
                                                <li>
                                                    <a href="user-profile.html">
                                                        <i className="fa fa-user mr-3"></i>Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link to="/my-properties">
                                                        <i className="fa fa-list mr-3" aria-hidden="true"></i>My Properties
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/favorite-properties">
                                                        <i className="fa fa-heart mr-3" aria-hidden="true"></i>Favorite Properties
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/add-property' state= {{ action: 'add', initialData }}>
                                                        <i className="fa fa-list mr-3" aria-hidden="true"></i>Add Property
                                                    </Link>
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
