import React from 'react';
import UserFooter from "../CommonComponents/UserFooter.jsx";
import NavigationBar from "../CommonComponents/NavigationBar.jsx";
import SideBar from "../CommonComponents/SideBar.jsx";

function ChangePassword() {
    return (
        <div className="maxw1600 m0a dashboard-bd">
            <div id="wrapper" className="int_main_wraapper">
                < NavigationBar />
                <div className="clearfix"></div>
                <section className="user-page section-padding pt-5">
                    <div className="container-fluid">
                        <div className="row">
                            < SideBar />
                            <div className="col-lg-7 col-md-6 col-xs-6 pl-3 offset-lg-1 offset-md-3">
                                <div className="my-address">
                                    <h3 className="heading pt-0">Change Password</h3>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12 ">
                                                <div className="form-group name">
                                                    <label>Current Password</label>
                                                    <input type="password" name="current-password" className="form-control" placeholder="Current Password" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group email">
                                                    <label>New Password</label>
                                                    <input type="password" name="new-password" className="form-control" placeholder="New Password" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 ">
                                                <div className="form-group subject">
                                                    <label>Confirm New Password</label>
                                                    <input type="password" name="confirm-new-password" className="form-control" placeholder="Confirm New Password" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="send-btn mt-2">
                                                    <button type="submit" className="btn btn-common">Send Changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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

export default ChangePassword;
