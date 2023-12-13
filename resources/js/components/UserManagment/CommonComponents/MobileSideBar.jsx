const MobileSideBar = () => {
    return (
        <div className="col-lg-12 mobile-dashbord dashbord">
            <div className="dashboard_navigationbar dashxl">
                <div className="dropdown">
                    <button onClick="myFunction()" className="dropbtn"><i
                        className="fa fa-bars pr10 mr-2"></i> Dashboard Navigation
                    </button>
                    <ul id="myDropdown" className="dropdown-content">
                        <li>
                            <a href="dashboard.html">
                                <i className="fa fa-map-marker mr-3"></i> Dashboard
                            </a>
                        </li>
                        <li>
                            <a className="active" href="user-profile.html">
                                <i className="fa fa-user mr-3"></i>Profile
                            </a>
                        </li>
                        <li>
                            <a href="my-listings.html">
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
    )
};

export default MobileSideBar
