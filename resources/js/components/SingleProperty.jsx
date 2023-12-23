import Slider from "react-slick";
import pic from "../../assets/LA.jpg";
import pic2 from "../../assets/SF.jpg";
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
    return(
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
                        {/*ToDo: Is that section needed?*/}
                        <div className="floor-plan property wprt-image-video w50 pro">
                            <h5>What's Nearby</h5>
                            <div className="property-nearby">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="nearby-info mb-4">
                                            <span className="nearby-title mb-3 d-block text-info">
                                               <i className="fas fa-graduation-cap mr-2"></i><b className="title">Education</b>
                                            </span>
                                            <div className="nearby-list">
                                                <ul className="property-list list-unstyled mb-0">
                                                    <li className="d-flex">
                                                        <h6 className="mb-3 mr-2">Education Mandarin</h6>
                                                        <span>(15.61 miles)</span>
                                                        <ul className="list-unstyled list-inline ml-auto">
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half fa-xs"></i></li>
                                                        </ul>
                                                    </li>
                                                    <li className="d-flex">
                                                        <h6 className="mb-3 mr-2">Marry's Education</h6>
                                                        <span>(15.23 miles)</span>
                                                        <ul className="list-unstyled list-inline ml-auto">
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                                                        </ul>
                                                    </li>
                                                    <li className="d-flex">
                                                        <h6 className="mb-3 mr-2">The Kaplan</h6>
                                                        <span>(15.16 miles)</span>
                                                        <ul className="list-unstyled list-inline ml-auto">
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="nearby-info mb-4">
                                            <span className="nearby-title mb-3 d-block text-success">
                                              <i className="fas fa-user-md mr-2"></i><b className="title">Health & Medical</b>
                                            </span>
                                            <div className="nearby-list">
                                                <ul className="property-list list-unstyled mb-0">
                                                    <li className="d-flex">
                                                        <h6 className="mb-3 mr-2">Natural Market</h6>
                                                        <span>(13.20 miles)</span>
                                                        <ul className="list-unstyled list-inline ml-auto">
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half fa-xs"></i></li>
                                                        </ul>
                                                    </li>
                                                    <li className="d-flex">
                                                        <h6 className="mb-3 mr-2">Food For Health</h6>
                                                        <span>(13.22 miles)</span>
                                                        <ul className="list-unstyled list-inline ml-auto">
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                                                        </ul>
                                                    </li>
                                                    <li className="d-flex">
                                                        <h6 className="mb-3 mr-2">A Matter of Health</h6>
                                                        <span>(13.34 miles)</span>
                                                        <ul className="list-unstyled list-inline ml-auto">
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="nearby-info">
                                            <span className="nearby-title mb-3 d-block text-danger">
                                                <i className="fas fa-car mr-2"></i><b className="title">Transportation</b>
                                            </span>
                                            <div className="nearby-list">
                                                <ul className="property-list list-unstyled mb-0">
                                                    <li className="d-flex">
                                                        <h6 className="mb-3 mr-2">Airport Transportation</h6>
                                                        <span>(11.36 miles)</span>
                                                        <ul className="list-unstyled list-inline ml-auto">
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half fa-xs"></i></li>
                                                        </ul>
                                                    </li>
                                                    <li className="d-flex">
                                                        <h6 className="mb-3 mr-2">NYC Executive Limo</h6>
                                                        <span>(11.87 miles)</span>
                                                        <ul className="list-unstyled list-inline ml-auto">
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                                                        </ul>
                                                    </li>
                                                    <li className="d-flex">
                                                        <h6 className="mb-3 mr-2">Empire Limousine</h6>
                                                        <span>(11.52 miles)</span>
                                                        <ul className="list-unstyled list-inline ml-auto">
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                                                            <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="property wprt-image-video w50 pro">
                            <h5>Property Video</h5>
                            <img alt="image" src="images/slider/home-slider-4.jpg"/>
                                <a className="icon-wrap popup-video popup-youtube" href="https://www.youtube.com/watch?v=14semTlwyUY">
                                    <i className="fa fa-play"></i>
                                </a>
                                <div className="iq-waves">
                                    <div className="waves wave-1"></div>
                                    <div className="waves wave-2"></div>
                                    <div className="waves wave-3"></div>
                                </div>
                        </div>
                        {/*ToDo: Is that section needed?*/}
                        <div className="property-location map">
                            <h5>Location</h5>
                            <div className="divider-fade"></div>
                            <div id="map-contact" className="contact-map"></div>
                        </div>
                        {/*ToDo: Is that section needed?*/}
                        <section className="reviews comments">
                            <h3 className="mb-5">3 Reviews</h3>
                            <div className="row mb-5">
                                <ul className="col-12 commented pl-0">
                                    <li className="comm-inf">
                                        <div className="col-md-2">
                                            <img src="images/testimonials/ts-5.jpg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-md-10 comments-info">
                                            <div className="conra">
                                                <h5 className="mb-2">Mary Smith</h5>
                                                <div className="rating-box">
                                                    <div className="detail-list-rating mr-0">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mb-4">May 30 2020</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.</p>
                                            <div className="rest"><img src="images/single-property/s-1.jpg" className="img-fluid" alt=""/></div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className="row">
                                <ul className="col-12 commented pl-0">
                                    <li className="comm-inf">
                                        <div className="col-md-2">
                                            <img src="images/testimonials/ts-4.jpg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-md-10 comments-info">
                                            <div className="conra">
                                                <h5 className="mb-2">Abraham Tyron</h5>
                                                <div className="rating-box">
                                                    <div className="detail-list-rating mr-0">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mb-4">june 1 2020</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className="row mt-5">
                                <ul className="col-12 commented mb-0 pl-0">
                                    <li className="comm-inf">
                                        <div className="col-md-2">
                                            <img src="images/testimonials/ts-3.jpg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-md-10 comments-info">
                                            <div className="conra">
                                                <h5 className="mb-2">Lisa Williams</h5>
                                                <div className="rating-box">
                                                    <div className="detail-list-rating mr-0">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mb-4">jul 12 2020</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.</p>
                                            <div className="resti">
                                                <div className="rest"><img src="images/single-property/s-2.jpg" className="img-fluid" alt=""/></div>
                                                <div className="rest"><img src="images/single-property/s-3.jpg" className="img-fluid" alt=""/></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/*ToDo: Is that section needed?*/}
                        <section className="single reviews leve-comments details">
                            <div id="add-review" className="add-review-box">
                                <h3 className="listing-desc-headline margin-bottom-20 mb-4">Add Review</h3>
                                <span className="leave-rating-title">Your rating for this listing</span>
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <div className="clearfix"></div>
                                        <div className="leave-rating margin-bottom-30">
                                            <input type="radio" name="rating" id="rating-1" value="1" />
                                            <label htmlFor="rating-1" className="fa fa-star"></label>
                                            <input type="radio" name="rating" id="rating-2" value="2" />
                                            <label htmlFor="rating-2" className="fa fa-star"></label>
                                            <input type="radio" name="rating" id="rating-3" value="3" />
                                            <label htmlFor="rating-3" className="fa fa-star"></label>
                                            <input type="radio" name="rating" id="rating-4" value="4" />
                                            <label htmlFor="rating-4" className="fa fa-star"></label>
                                            <input type="radio" name="rating" id="rating-5" value="5" />
                                            <label htmlFor="rating-5" className="fa fa-star"></label>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="add-review-photos margin-bottom-30">
                                            <div className="photoUpload">
                                                <span><i className="sl sl-icon-arrow-up-circle"></i> Upload Photos</span>
                                                <input type="file" className="upload" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 data">
                                        <form action="#">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" name="name" className="form-control" placeholder="First Name" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" name="name" className="form-control" placeholder="Last Name" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="email" name="email" className="form-control" placeholder="Email" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <textarea className="form-control" id="exampleTextarea" rows="8" placeholder="Review" required></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-lg mt-2">Submit Review</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
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
    );
}

export default SingleProperty
