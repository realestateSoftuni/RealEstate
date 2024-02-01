import Slider from "react-slick";
import { extractVideoId } from "../utils/functions.js";
import video_pic from "../../assets/video3.png"
import location from "../../assets/location_pic.png"
import ModalVideo from 'react-modal-video';
import React, {useEffect, useState} from "react";
import LayoutAll from "./MainLayout/LayoutAll.jsx";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

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
    const [property, setProperty] = useState({});
    const [images, setImages] = useState([]);
    const [plans, setPlans] = useState([]);
    const [videoId, setVideoId] =useState();
    const [features, setFeatures] = useState([]);
    const { propertyId } = useParams();
    const navigate = useNavigate();
    const priceArea = (property.price / property.square_feet).toFixed(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${window.Laravel.apiUrl}/api/properties/${propertyId}`);
                setProperty(response.data);
                setVideoId(extractVideoId(response.data.property_videos[0].video_url));
                setImages(response.data.property_photos);
                setFeatures(response.data.property_features);
                setPlans(response.data.property_floor_plans);
            } catch (err) {
                navigate('/*');
                console.log(err);
            }
        };
        fetchData();
    }, [propertyId]);




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
                                                    <h3>{property.title}<span className="mrg-l-5 category-tag">{property.status === 'sale' ? 'For Sale' : 'For Rent'}</span></h3>
                                                    <div className="mt-0">
                                                        <a href="#listing-location" className="listing-address">
                                                            <i className="fa fa-map-marker pr-2 ti-location-pin mrg-r-5"></i>{property.country}, {property.city}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single detail-wrapper mr-2">
                                                <div className="detail-wrapper-body">
                                                    <div className="listing-title-bar">
                                                        <h4 className='price'>$ {Number(property.price).toLocaleString('en-US')}</h4>
                                                        <div className="mt-0">
                                                            <a href="#listing-location" className="listing-address">
                                                                <p>$ {Number(priceArea).toLocaleString('en-US')} / sq ft</p>
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
                                                {images.map((img) => <div key={img.id} >
                                                    <img className='property-img' src={img.photo_url} />
                                                </div>
                                                )}
                                            </Slider>
                                        </div>
                                    </div>
                                    <div className="blog-info details mb-30">
                                        <h5 className="mb-4">Description</h5>
                                        <p className="mb-3">{property.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="single homes-content details mb-30">
                                <h5 className="mb-4">Property Details</h5>
                                <ul className="homes-list clearfix">
                                    <li>
                                        <span className="font-weight-bold mr-1">Property ID:</span>
                                        <span className="det">{property.id}</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Property Type:</span>
                                        <span className="det">{property.property_type}</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Property area:</span>
                                        <span className="det">{Number(property.square_feet).toLocaleString('en-US')} Sq ft </span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Floor:</span>
                                        <span className="det">{property.floor}</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Rooms:</span>
                                        <span className="det">{property.rooms}</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Bedrooms:</span>
                                        <span className="det">{property.bedrooms}</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Bathrooms:</span>
                                        <span className="det">{property.bathrooms}</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Construction:</span>
                                        <span className="det">{property.construction}</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Year Built:</span>
                                        <span className="det">{property.build}</span>
                                    </li>
                                </ul>
                                <h5 className="mt-5">Amenities</h5>
                                <ul className="homes-list clearfix">
                                    {(features).map((feature) =>
                                        <li>
                                            <i className="fa fa-check-square" aria-hidden="true"></i>
                                            <span>{feature.feature_name}</span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div className="floor-plan property wprt-image-video w50 pro">
                                <h5>Floor Plans</h5>
                                <Slider {...settings}>
                                    {(plans).map((plan) => <div key={plan.id} >
                                            <img className='property-img' src={plan.image_url} />
                                        </div>
                                    )}
                                </Slider>
                            </div>
                            <div className="property wprt-image-video w50 pro">
                                <h5>Property Video</h5>
                                <React.Fragment>
                                    <ModalVideo
                                        channel="youtube"
                                        youtube={{ mute: 0, autoplay: 0 }}
                                        isOpen={isOpen}
                                        videoId={videoId}
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
                                            <h4>Seller Information</h4>
                                        </div>
                                        <div className="widget-boxed-body">
                                            <div className="sidebar-widget author-widget2">
                                                <div className="author-box clearfix">
                                                    {/*<img src="images/testimonials/ts-1.jpg" alt="author-image" className="author__img"/>*/}
                                                    {property.name && <h4 className="author__title">{property.name}</h4>}
                                                </div>
                                                <ul className="author__contact">
                                                    {/*<li><span className="la la-map-marker"><i className="fa fa-map-marker"></i></span>302 Av Park, New York</li>*/}
                                                    {property.phone && <li><span className="la la-phone"><i className="fa fa-phone" aria-hidden="true"></i></span><a href="#">{property.phone}</a></li>}
                                                    <li><span className="la la-envelope-o"><i className="fa fa-envelope" aria-hidden="true"></i></span><a href="#">{property.email}</a></li>
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
                                    {/*<div className="main-search-field-2">*/}
                                    {/*    <div className="widget-boxed popular mt-5">*/}
                                    {/*        <div className="widget-boxed-header">*/}
                                    {/*            <h4>Specials of the day</h4>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="widget-boxed-body">*/}
                                    {/*            <div className="banner"><img src="images/single-property/banner.jpg" alt=""/></div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
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
