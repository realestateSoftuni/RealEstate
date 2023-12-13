const SideBar = () => {
    return (
        <div className="col-lg-3 col-md-12 col-xs-12 pl-0 pr-0 user-dash">
            <div className="user-profile-box mb-0">
                <div className="sidebar-header"><img src="images/logo-blue.svg" alt="header-logo2.png" /> </div>
                <div className="header clearfix">
                    <img src="images/testimonials/ts-1.jpg" alt="avatar" className="img-fluid profile-img" />
                </div>
                <div className="active-user">
                    <h2>Mary Smith</h2>
                </div>
                <div className="detail clearfix">
                    <ul className="mb-0">
                        <li>
                            <a href="dashboard.html">
                                <i className="fa fa-map-marker"></i> Dashboard
                            </a>
                        </li>
                        <li>
                            <a className="active" href="user-profile.html">
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
                            <a href="add-property.html">
                                <i className="fa fa-list" aria-hidden="true"></i>Add Property
                            </a>
                        </li>
                        <li>
                            <a href="payment-method.html">
                                <i className="fas fa-credit-card"></i>Payments
                            </a>
                        </li>
                        <li>
                            <a href="invoice.html">
                                <i className="fas fa-paste"></i>Invoices
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
    )
};

export default SideBar
