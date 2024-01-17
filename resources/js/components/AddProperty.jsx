import UserLayout from "@/components/UserLayout/UserLayout.jsx";

function AddProperty() {
    return(
        <UserLayout>
            <div className="col-lg-9 col-md-12 col-xs-12 royal-add-property-area section_100 pl-0 user-dash2">
                <div className="single-add-property">
                    <h3>Property description and price</h3>
                    <div className="property-form-group">
                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <p>
                                        <label for="title">Property Title</label>
                                        <input type="text" name="title" id="title" placeholder="Enter your property title"/>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p>
                                        <label for="description">Property Description</label>
                                        <textarea id="description" name="pro-dexc" placeholder="Describe about your property"></textarea>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                    <div className="form-group categories">
                                        <div className="nice-select form-control wide" tabindex="0"><span className="current">Select status</span>
                                            <ul className="list">
                                                <li data-value="1" className="option">Rent</li>
                                                <li data-value="2" className="option">Sale</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                    <div className="form-group categories">
                                        <div className="nice-select form-control wide" tabindex="0"><span className="current">Type</span>
                                            <ul className="list">
                                                <li data-value="1" className="option">house</li>
                                                <li data-value="2" className="option">commercial</li>
                                                <li data-value="3" className="option">apartment</li>
                                                <li data-value="4" className="option">lot</li>
                                                <li data-value="5" className="option">garage</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                    <div className="form-group categories">
                                        <div className="nice-select form-control wide" tabindex="0"><span className="current">Rooms</span>
                                            <ul className="list">
                                                <li data-value="1" className="option">1</li>
                                                <li data-value="2" className="option">2</li>
                                                <li data-value="3" className="option">3</li>
                                                <li data-value="4" className="option">4</li>
                                                <li data-value="5" className="option">5</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <p className="no-mb">
                                        <label for="price">Price</label>
                                        <input type="text" name="price" placeholder="USD" id="price"/>
                                    </p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <p className="no-mb last">
                                        <label for="area">Area</label>
                                        <input type="text" name="area" placeholder="Sqft" id="area"/>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="single-add-property">
                    <h3>property Media</h3>
                    <div className="property-form-group">
                        <div className="row">
                            <div className="col-md-12">
                                <form action="/file-upload" className="dropzone"></form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-add-property">
                    <h3>property Location</h3>
                    <div className="property-form-group">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <p>
                                    <label for="address">Address</label>
                                    <input type="text" name="address" placeholder="Enter Your Address" id="address"/>
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p>
                                    <label for="city">City</label>
                                    <input type="text" name="city" placeholder="Enter Your City" id="city"/>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <p>
                                    <label for="state">State</label>
                                    <input type="text" name="state" placeholder="Enter Your State" id="state"/>
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p>
                                    <label for="country">Country</label>
                                    <input type="text" name="country" placeholder="Enter Your Country" id="country"/>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <p className="no-mb first">
                                    <label for="latitude">Google Maps latitude</label>
                                    <input type="text" name="latitude" placeholder="Google Maps latitude" id="latitude"/>
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p className="no-mb last">
                                    <label for="longitude">Google Maps longitude</label>
                                    <input type="text" name="longitude" placeholder="Google Maps longitude" id="longitude"/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-add-property">
                    <h3>Extra Information</h3>
                    <div className="property-form-group">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                <div className="form-group categories">
                                    <div className="nice-select form-control wide" tabindex="0"><span className="current">Select Age</span>
                                        <ul className="list">
                                            <li data-value="1" className="option">0-1 years</li>
                                            <li data-value="2" className="option">0-5 years</li>
                                            <li data-value="1" className="option">0-10 years</li>
                                            <li data-value="2" className="option">0-15 years</li>
                                            <li data-value="1" className="option">0-20 years</li>
                                            <li data-value="2" className="option">0-50 years</li>
                                            <li data-value="1" className="option">50+ years</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                <div className="form-group categories">
                                    <div className="nice-select form-control wide" tabindex="0"><span className="current">Select Rooms</span>
                                        <ul className="list">
                                            <li data-value="1" className="option">1</li>
                                            <li data-value="2" className="option">2</li>
                                            <li data-value="1" className="option">3</li>
                                            <li data-value="2" className="option">4</li>
                                            <li data-value="1" className="option">5</li>
                                            <li data-value="2" className="option">6</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                <div className="form-group categories">
                                    <div className="nice-select form-control wide" tabindex="0"><span className="current">Select Bathrooms</span>
                                        <ul className="list">
                                            <li data-value="1" className="option">1</li>
                                            <li data-value="2" className="option">2</li>
                                            <li data-value="1" className="option">3</li>
                                            <li data-value="2" className="option">4</li>
                                            <li data-value="1" className="option">5</li>
                                            <li data-value="2" className="option">6</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-add-property">
                    <h3>Property Features</h3>
                    <div className="property-form-group">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="pro-feature-add pl-0">
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-a" type="checkbox" name="check"/>
                                                    <label for="check-a">Air Conditioning</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-b" type="checkbox" name="check"/>
                                                    <label for="check-b">Swimming Pool</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-c" type="checkbox" name="check"/>
                                                    <label for="check-c">Central Heating</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-d" type="checkbox" name="check"/>
                                                    <label for="check-d">Laundry Room</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-e" type="checkbox" name="check"/>
                                                    <label for="check-e">Gym</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-g" type="checkbox" name="check"/>
                                                    <label for="check-g">Alarm</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-h" type="checkbox" name="check"/>
                                                    <label for="check-h">Window Covering</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-i" type="checkbox" name="check"/>
                                                    <label for="check-i">Refrigerator</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-j" type="checkbox" name="check"/>
                                                    <label for="check-j">TV Cable & WIFI</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-k" type="checkbox" name="check"/>
                                                    <label for="check-k">Microwave</label>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-add-property">
                    <h3>Contact Information</h3>
                    <div className="property-form-group">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <p>
                                    <label for="con-name">Name</label>
                                    <input type="text" placeholder="Enter Your Name" id="con-name" name="con-name"/>
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p>
                                    <label for="con-user">Username</label>
                                    <input type="text" placeholder="Enter Your Username" id="con-user" name="con-user"/>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <p className="no-mb first">
                                    <label htmlFor="con-email">Email</label>
                                    <input type="email" placeholder="Enter Your Email" id="con-email" name="con-email"/>
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p className="no-mb last">
                                    <label htmlFor="con-phn">Phone</label>
                                    <input type="text" placeholder="Enter Your Phone Number" id="con-phn" name="con-phn"/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="add-property-button pt-5">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="prperty-submit-button">
                                    <button type="submit">Submit Property</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

export default AddProperty
