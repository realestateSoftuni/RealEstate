import UserLayout from "./UserLayout/UserLayout.jsx";

function ProfileDetails() {
    return (
        <UserLayout>
            <div className="col-lg-4 col-md-6 col-xs-6 widget-boxed mt-33 mt-0 offset-lg-2 offset-md-3">
                <div className="widget-boxed-header">
                    <h4>Profile Details</h4>
                </div>
                <div className="sidebar-widget author-widget2">
                    <div className="author-box clearfix">
                        <img src="images/testimonials/ts-1.jpg" alt="author-image" className="author__img"/>
                        <h4 className="author__title">Lisa Clark</h4>
                        <p className="author__meta">Agent of Property</p>
                    </div>
                    <ul className="author__contact">
                        <li><span className="la la-map-marker"><i className="fa fa-map-marker"></i></span>302
                            Av Park, New York
                        </li>
                        <li><span className="la la-phone"><i className="fa fa-phone" aria-hidden="true"></i></span>(234)
                            0200 17813
                        </li>
                        <li><span className="la la-envelope-o"><i className="fa fa-envelope"
                                                                  aria-hidden="true"></i></span>lisa@gmail.com
                        </li>
                    </ul>
                </div>
            </div>

        </UserLayout>
    )
}

export default ProfileDetails
