import React from 'react';
import UserFooter from "../CommonComponents/UserFooter.jsx";
import NavigationBar from "../CommonComponents/NavigationBar.jsx";
import SideBar from "../CommonComponents/SideBar.jsx";

function EditProfile() {
    return (
        <div className="maxw1600 m0a dashboard-bd">
        <div id="wrapper" className="int_main_wraapper">
            < NavigationBar />
            <div className="clearfix"></div>
            <section className="user-page section-padding pt-5">
                <div className="container-fluid">
                    <div className="row">
                        < SideBar />
                        <div className="col-lg-6 col-md-6 col-xs-6 widget-boxed mt-33 mt-0 offset-lg-2 offset-md-3">
                            <div className="widget-boxed-header">
                                <h4>Profile Details</h4>
                            </div>
                            <div className="sidebar-widget author-widget2">
                                <div className="author-box clearfix">
                                    <img src="images/testimonials/ts-1.jpg" alt="author-image" className="author__img" />
                                        <h4 className="author__title">Lisa Clark</h4>
                                        <p className="author__meta">Agent of Property</p>
                                </div>
                                <ul className="author__contact">
                                    <li><span className="la la-map-marker"><i className="fa fa-map-marker"></i></span>302 Av Park, New York</li>
                                    <li><span className="la la-phone"><i className="fa fa-phone" aria-hidden="true"></i></span><a href="#">(234) 0200 17813</a></li>
                                    <li><span className="la la-envelope-o"><i className="fa fa-envelope" aria-hidden="true"></i></span><a href="#">lisa@gmail.com</a></li>
                                </ul>
                                <div className="agent-contact-form-sidebar">
                                    <h4>Request Inquiry</h4>
                                    <form name="contact_form" method="post" action="functions.php">
                                        <input type="text" id="fname" name="full_name" placeholder="Full Name" required />
                                        <input type="number" id="pnumber" name="phone_number" placeholder="Phone Number" required />
                                        <input type="email" id="emailid" name="email_address" placeholder="Email Address" required />
                                        <textarea placeholder="Message" name="message" required></textarea>
                                        <input type="submit" name="sendmessage" className="multiple-send-message" value="Submit Request" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           <UserFooter/>

        </div>
    </div>
    );
};

export default EditProfile;
