import Slider from "react-slick";
import pic from "../../assets/LA.jpg";
import pic2 from "../../assets/SF.jpg";
import video_pic from "../../assets/video3.png"
import location from "../../assets/location_pic.png"
import ModalVideo from 'react-modal-video';
import React, {useState} from "react";
import LayoutAll from "./MainLayout/LayoutAll.jsx";

function SingleProperty(){
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        className: 'inner-slider-div'
    };
    const [isOpen, setOpen] = useState(false);

    return(
        <LayoutAll>
            <section className="single-proper blog details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 blog-pots">
                            <div className="row">
                                <div className="col-md-12">
                                    <section className="headings-2 pt-0">
                                        <div className="pro-wrapper">
                                            <div className="detail-wrapper-body">
                                                <div className="listing-title-bar">
                                                    <h3>Luxury Villa House <span className="mrg-l-5 category-tag">For Sale</span></h3>
                                                    <div className="mt-0">
                                                        <a href="#listing-location" className="listing-address">
                                                            <i className="fa fa-map-marker pr-2 ti-location-pin mrg-r-5"></i>77 - Central Park South, NYC
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single detail-wrapper mr-2">
                                                <div className="detail-wrapper-body">
                                                    <div className="listing-title-bar">
                                                        <h4>$ 230,000</h4>
                                                        <div className="mt-0">
                                                            <a href="#listing-location" className="listing-address">
                                                                <p>$ 1,200 / sq ft</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <div id="listingDetailsSlider" className="carousel listing-details-sliders slide mb-30">
                                        <h5 className="mb-4">Gallery</h5>
                                        <div className="carousel-inner">
                                            <Slider {...settings}>
                                                <div>
                                                    <img className='property-img' src={pic} />
                                                </div>
                                                <div>
                                                    <img className='property-img' src={pic2} />
                                                </div>
                                                <div>
                                                    <img className='property-img' src={pic} />
                                                </div>
                                                <div>
                                                    <img className='property-img' src={pic2} />
                                                </div>
                                            </Slider>

                                        </div>
                                    </div>
                                    <div className="blog-info details mb-30">
                                        <h5 className="mb-4">Description</h5>
                                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit.</p>
                                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit.</p>
                                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="single homes-content details mb-30">
                                <h5 className="mb-4">Property Details</h5>
                                <ul className="homes-list clearfix">
                                    <li>
                                        <span className="font-weight-bold mr-1">Property ID:</span>
                                        <span className="det">V254680</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Property Type:</span>
                                        <span className="det">House</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Property status:</span>
                                        <span className="det">For Sale</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Property Price:</span>
                                        <span className="det">$230,000</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Rooms:</span>
                                        <span className="det">6</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Bedrooms:</span>
                                        <span className="det">7</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Bath:</span>
                                        <span className="det">4</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Garages:</span>
                                        <span className="det">2</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Year Built:</span>
                                        <span className="det">10/6/2020</span>
                                    </li>
                                </ul>
                                <h5 className="mt-5">Amenities</h5>
                                <ul className="homes-list clearfix">
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Air Cond</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Balcony</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Internet</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Dishwasher</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Bedding</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Cable TV</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Parking</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Pool</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Fridge</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="floor-plan property wprt-image-video w50 pro">
                                <h5>Floor Plans</h5>
                                <img alt="image" src="images/bg/floor-plan-1.png"/>
                            </div>
                            <div className="property wprt-image-video w50 pro">
                                <h5>Property Video</h5>
                                <React.Fragment>
                                    <ModalVideo
                                        channel="youtube"
                                        youtube={{ mute: 0, autoplay: 0 }}
                                        isOpen={isOpen}
                                        videoId="14semTlwyUY"
                                        onClose={() => setOpen(false)}
                                    />
                                    <img alt="image" src={video_pic}/>
                                    <a  className="icon-wrap popup-video popup-youtube" onClick={() => setOpen(true)}>
                                        <i className="fa fa-play"></i>
                                    </a>
                                    <div className="iq-waves">
                                        <div className="waves wave-1"></div>
                                        <div className="waves wave-2"></div>
                                        <div className="waves wave-3"></div>
                                    </div>
                                </React.Fragment>

                            </div>
                            <div className="property-location map">
                                <h5>Location</h5>
                                <div className="divider-fade"></div>
                                <div id="map-contact" className="contact-map">
                                    <img alt='location map' className='location-picture' src={location}/>
                                </div>
                            </div>
                        </div>
                        <aside className="col-lg-4 col-md-12 car">
                            <div className="single widget">
                                <div className="sidebar">
                                    <div className="widget-boxed mt-33 mt-5">
                                        <div className="widget-boxed-header">
                                            <h4>Agent Information</h4>
                                        </div>
                                        <div className="widget-boxed-body">
                                            <div className="sidebar-widget author-widget2">
                                                <div className="author-box clearfix">
                                                    <img src="images/testimonials/ts-1.jpg" alt="author-image" className="author__img"/>
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
                                    <div className="main-search-field-2">
                                        <div className="widget-boxed popular mt-5">
                                            <div className="widget-boxed-header">
                                                <h4>Specials of the day</h4>
                                            </div>
                                            <div className="widget-boxed-body">
                                                <div className="banner"><img src="images/single-property/banner.jpg" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </LayoutAll>
    );
}

export default SingleProperty
