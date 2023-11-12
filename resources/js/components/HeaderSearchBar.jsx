
function HeaderSearchBar() {
    return(
        <section className="home17 overlay home-three bg-img3">
            <div className="hero-main">
                <div className="container" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-12">
                            <div className="banner-inner">
                                <h5 className="sub-title">We Have Over Million Properties For You</h5>
                                <h1 className="title">Find Your <br/> Dream Home</h1>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="banner-search-wrap">
                                <ul className="nav nav-tabs rld-banner-tab">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#">For Sale</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#">For Rent</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tabs_1">
                                        <div className="rld-main-search">
                                            <div className="row">
                                                <div className="rld-single-input">
                                                    <input type="text" placeholder="Enter Keyword..."/>
                                                </div>
                                                <div className="rld-single-select ml-22">
                                                    <select className="select single-select">
                                                        <option value="1">Property Type</option>
                                                        <option value="2">Family House</option>
                                                        <option value="3">Apartment</option>
                                                        <option value="3">Condo</option>
                                                    </select>
                                                </div>
                                                <div className="rld-single-select">
                                                    <select className="select single-select mr-0">
                                                        <option value="1">Location</option>
                                                        <option value="2">Los Angeles</option>
                                                        <option value="3">Chicago</option>
                                                        <option value="3">Philadelphia</option>
                                                        <option value="3">San Francisco</option>
                                                        <option value="3">Miami</option>
                                                        <option value="3">Houston</option>
                                                    </select>
                                                </div>
                                                <div className="dropdown-filter"><span>Advanced Search</span></div>
                                                <div className="col-xl-2 col-lg-2 col-md-4 pl-0">
                                                    <a className="btn btn-yellow" href="#">Search Now</a>
                                                </div>
                                                <div className="explore__form-checkbox-list full-filter">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                                                            <div className="form-group categories">
                                                                <div className="nice-select form-control wide" tabIndex="0"><span className="current"><i className="fa fa-home"></i>Property Status</span>
                                                                    <ul className="list">
                                                                        <li data-value="1" className="option selected ">For Sale</li>
                                                                        <li data-value="2" className="option">For Rent</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0 ">
                                                            <div className="form-group beds">
                                                                <div className="nice-select form-control wide" tabIndex="0"><span className="current"><i className="fa fa-bed" aria-hidden="true"></i> Bedrooms</span>
                                                                    <ul className="list">
                                                                        <li data-value="1" className="option selected">1</li>
                                                                        <li data-value="2" className="option">2</li>
                                                                        <li data-value="3" className="option">3</li>
                                                                        <li data-value="3" className="option">4</li>
                                                                        <li data-value="3" className="option">5</li>
                                                                        <li data-value="3" className="option">6</li>
                                                                        <li data-value="3" className="option">7</li>
                                                                        <li data-value="3" className="option">8</li>
                                                                        <li data-value="3" className="option">9</li>
                                                                        <li data-value="3" className="option">10</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                                                            <div className="form-group bath">
                                                                <div className="nice-select form-control wide" tabIndex="0"><span className="current"><i className="fa fa-bath" aria-hidden="true"></i> Bathrooms</span>
                                                                    <ul className="list">
                                                                        <li data-value="1" className="option selected">1</li>
                                                                        <li data-value="2" className="option">2</li>
                                                                        <li data-value="3" className="option">3</li>
                                                                        <li data-value="3" className="option">4</li>
                                                                        <li data-value="3" className="option">5</li>
                                                                        <li data-value="3" className="option">6</li>
                                                                        <li data-value="3" className="option">7</li>
                                                                        <li data-value="3" className="option">8</li>
                                                                        <li data-value="3" className="option">9</li>
                                                                        <li data-value="3" className="option">10</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-5 col-md-12 col-sm-12 py-1 pr-30 mr-5 sld d-none d-lg-none d-xl-flex">
                                                            <div className="main-search-field-2">
                                                                <div className="range-slider">
                                                                    <label>Area Size</label>
                                                                    <div id="area-range" data-min="0" data-max="1300" data-unit="sq ft"></div>
                                                                    <div className="clearfix"></div>
                                                                </div>
                                                                <br/>
                                                                    <div className="range-slider">
                                                                        <label>Price Range</label>
                                                                        <div id="price-range" data-min="0" data-max="600000" data-unit="$"></div>
                                                                        <div className="clearfix"></div>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 py-1 pr-30 d-none d-lg-none d-xl-flex">
                                                            <div className="checkboxes one-in-row margin-bottom-10 ch-1">
                                                                <input id="check-2" type="checkbox" name="check"/>
                                                                    <label htmlFor="check-2">Air Conditioning</label>
                                                                    <input id="check-3" type="checkbox" name="check"/>
                                                                        <label htmlFor="check-3">Swimming Pool</label>
                                                                        <input id="check-4" type="checkbox" name="check"/>
                                                                            <label htmlFor="check-4">Central Heating</label>
                                                                            <input id="check-5" type="checkbox" name="check"/>
                                                                                <label htmlFor="check-5">Laundry Room</label>
                                                                                <input id="check-6" type="checkbox" name="check"/>
                                                                                    <label htmlFor="check-6">Gym</label>
                                                                                    <input id="check-7" type="checkbox" name="check"/>
                                                                                        <label htmlFor="check-7">Alarm</label>
                                                                                        <input id="check-8" type="checkbox" name="check"/>
                                                                                            <label htmlFor="check-8">Window Covering</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 py-1 pr-30 d-none d-lg-none d-xl-flex">
                                                            <div className="checkboxes one-in-row margin-bottom-10 ch-2">
                                                                <input id="check-9" type="checkbox" name="check"/>
                                                                    <label htmlFor="check-9">WiFi</label>
                                                                    <input id="check-10" type="checkbox" name="check"/>
                                                                        <label htmlFor="check-10">TV Cable</label>
                                                                        <input id="check-11" type="checkbox" name="check"/>
                                                                            <label htmlFor="check-11">Dryer</label>
                                                                            <input id="check-12" type="checkbox" name="check"/>
                                                                                <label htmlFor="check-12">Microwave</label>
                                                                                <input id="check-13" type="checkbox" name="check"/>
                                                                                    <label htmlFor="check-13">Washer</label>
                                                                                    <input id="check-14" type="checkbox" name="check"/>
                                                                                        <label htmlFor="check-14">Refrigerator</label>
                                                                                        <input id="check-15" type="checkbox" name="check"/>
                                                                                            <label htmlFor="check-15">Outdoor Shower</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tabs_2">
                                        <div className="rld-main-search">
                                            <div className="row">
                                                <div className="rld-single-input">
                                                    <input type="text" placeholder="Enter Keyword..."/>
                                                </div>
                                                <div className="rld-single-select ml-22">
                                                    <select className="select single-select">
                                                        <option value="1">Property Type</option>
                                                        <option value="2">Family House</option>
                                                        <option value="3">Apartment</option>
                                                        <option value="3">Condo</option>
                                                    </select>
                                                </div>
                                                <div className="rld-single-select">
                                                    <select className="select single-select mr-0">
                                                        <option value="1">Location</option>
                                                        <option value="2">Los Angeles</option>
                                                        <option value="3">Chicago</option>
                                                        <option value="3">Philadelphia</option>
                                                        <option value="3">San Francisco</option>
                                                        <option value="3">Miami</option>
                                                        <option value="3">Houston</option>
                                                    </select>
                                                </div>
                                                <div className="dropdown-filter"><span>Advanced Search</span></div>
                                                <div className="col-xl-2 col-lg-2 col-md-4 pl-0">
                                                    <a className="btn btn-yellow" href="#">Search Now</a>
                                                </div>
                                                <div className="explore__form-checkbox-list full-filter">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                                                            <div className="form-group categories">
                                                                <div className="nice-select form-control wide" tabIndex="0"><span className="current"><i className="fa fa-home"></i>Property Status</span>
                                                                    <ul className="list">
                                                                        <li data-value="1" className="option selected ">For Sale</li>
                                                                        <li data-value="2" className="option">For Rent</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0 ">
                                                            <div className="form-group beds">
                                                                <div className="nice-select form-control wide" tabIndex="0"><span className="current"><i className="fa fa-bed" aria-hidden="true"></i> Bedrooms</span>
                                                                    <ul className="list">
                                                                        <li data-value="1" className="option selected">1</li>
                                                                        <li data-value="2" className="option">2</li>
                                                                        <li data-value="3" className="option">3</li>
                                                                        <li data-value="3" className="option">4</li>
                                                                        <li data-value="3" className="option">5</li>
                                                                        <li data-value="3" className="option">6</li>
                                                                        <li data-value="3" className="option">7</li>
                                                                        <li data-value="3" className="option">8</li>
                                                                        <li data-value="3" className="option">9</li>
                                                                        <li data-value="3" className="option">10</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 py-1 pl-0 pr-0">
                                                            <div className="form-group bath">
                                                                <div className="nice-select form-control wide" tabIndex="0"><span className="current"><i className="fa fa-bath" aria-hidden="true"></i> Bathrooms</span>
                                                                    <ul className="list">
                                                                        <li data-value="1" className="option selected">1</li>
                                                                        <li data-value="2" className="option">2</li>
                                                                        <li data-value="3" className="option">3</li>
                                                                        <li data-value="3" className="option">4</li>
                                                                        <li data-value="3" className="option">5</li>
                                                                        <li data-value="3" className="option">6</li>
                                                                        <li data-value="3" className="option">7</li>
                                                                        <li data-value="3" className="option">8</li>
                                                                        <li data-value="3" className="option">9</li>
                                                                        <li data-value="3" className="option">10</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-5 col-md-12 col-sm-12 py-1 pr-30 mr-5 sld">
                                                            <div className="main-search-field-2">
                                                                <div className="range-slider">
                                                                    <label>Area Size</label>
                                                                    <div id="area-range-rent" data-min="0" data-max="1300" data-unit="sq ft"></div>
                                                                    <div className="clearfix"></div>
                                                                </div>
                                                                <br/>
                                                                    <div className="range-slider">
                                                                        <label>Price Range</label>
                                                                        <div id="price-range-rent" data-min="0" data-max="600000" data-unit="$"></div>
                                                                        <div className="clearfix"></div>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 py-1 pr-30">
                                                            <div className="checkboxes one-in-row margin-bottom-10 ch-1">
                                                                <input id="check-16" type="checkbox" name="check"/>
                                                                    <label htmlFor="check-16">Air Conditioning</label>
                                                                    <input id="check-17" type="checkbox" name="check"/>
                                                                        <label htmlFor="check-17">Swimming Pool</label>
                                                                        <input id="check-18" type="checkbox" name="check"/>
                                                                            <label htmlFor="check-18">Central Heating</label>
                                                                            <input id="check-19" type="checkbox" name="check"/>
                                                                                <label htmlFor="check-19">Laundry Room</label>
                                                                                <input id="check-20" type="checkbox" name="check"/>
                                                                                    <label htmlFor="check-20">Gym</label>
                                                                                    <input id="check-21" type="checkbox" name="check"/>
                                                                                        <label htmlFor="check-21">Alarm</label>
                                                                                        <input id="check-22" type="checkbox" name="check"/>
                                                                                            <label htmlFor="check-22">Window Covering</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12 py-1 pr-30">
                                                            <div className="checkboxes one-in-row margin-bottom-10 ch-2">
                                                                <input id="check-23" type="checkbox" name="check"/>
                                                                    <label htmlFor="check-23">WiFi</label>
                                                                    <input id="check-24" type="checkbox" name="check"/>
                                                                        <label htmlFor="check-24">TV Cable</label>
                                                                        <input id="check-25" type="checkbox" name="check"/>
                                                                            <label htmlFor="check-25">Dryer</label>
                                                                            <input id="check-26" type="checkbox" name="check"/>
                                                                                <label htmlFor="check-26">Microwave</label>
                                                                                <input id="check-27" type="checkbox" name="check"/>
                                                                                    <label htmlFor="check-27">Washer</label>
                                                                                    <input id="check-28" type="checkbox" name="check"/>
                                                                                        <label htmlFor="check-28">Refrigerator</label>
                                                                                        <input id="check-29" type="checkbox" name="check"/>
                                                                                            <label htmlFor="check-29">Outdoor Shower</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeaderSearchBar
