import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from '../../../assets/LA.jpg'

function SaleProperties() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="featured portfolio home18 bg-white-3">
            <div className="container-fluid">
                <div className="section-title ml-3">
                    <h3>Recent properties</h3>
                    <h2>FOR SALE</h2>
                </div>
                <Slider {...settings}>
                    <div className="agents-grid" data-aos="fade-up" data-aos-delay="150">
                        <div className="landscapes">
                            <div className="project-single">
                                <div className="project-inner project-head">
                                    <div className="homes">
                                        <a href="#" className="homes-img">
                                            <div className="homes-tag button alt featured">Featured</div>
                                            <div className="homes-tag button alt sale">For Sale</div>
                                            <div className="homes-price">$9,000/mo</div>
                                            <img src={pic} alt="home-1" className="img-responsive"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="homes-content">
                                    <h3><a href="#">Real House Luxury Villa</a></h3>
                                    <p className="homes-address mb-3">
                                        <a href="#">
                                            <i className="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                                        </a>
                                    </p>
                                    <ul className="homes-list clearfix pb-0">
                                        <li className="the-icons">
                                            <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                                            <span>6 Bedrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                            <span>3 Bathrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-square mr-2" aria-hidden="true"></i>
                                            <span>720 sq ft</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-car mr-2" aria-hidden="true"></i>
                                            <span>2 Garages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agents-grid" data-aos="fade-up" data-aos-delay="150">
                        <div className="landscapes">
                            <div className="project-single">
                                <div className="project-inner project-head">
                                    <div className="homes">
                                        <a href="#" className="homes-img">
                                            <div className="homes-tag button alt featured">Featured</div>
                                            <div className="homes-tag button alt sale">For Sale</div>
                                            <div className="homes-price">$9,000/mo</div>
                                            <img src={pic} alt="home-1" className="img-responsive"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="homes-content">
                                    <h3><a href="#">Real House Luxury Villa</a></h3>
                                    <p className="homes-address mb-3">
                                        <a href="#">
                                            <i className="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                                        </a>
                                    </p>
                                    <ul className="homes-list clearfix pb-0">
                                        <li className="the-icons">
                                            <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                                            <span>6 Bedrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                            <span>3 Bathrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-square mr-2" aria-hidden="true"></i>
                                            <span>720 sq ft</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-car mr-2" aria-hidden="true"></i>
                                            <span>2 Garages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agents-grid" data-aos="fade-up" data-aos-delay="150">
                        <div className="landscapes">
                            <div className="project-single">
                                <div className="project-inner project-head">
                                    <div className="homes">
                                        <a href="#" className="homes-img">
                                            <div className="homes-tag button alt featured">Featured</div>
                                            <div className="homes-tag button alt sale">For Sale</div>
                                            <div className="homes-price">$9,000/mo</div>
                                            <img src={pic} alt="home-1" className="img-responsive"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="homes-content">
                                    <h3><a href="#">Real House Luxury Villa</a></h3>
                                    <p className="homes-address mb-3">
                                        <a href="#">
                                            <i className="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                                        </a>
                                    </p>
                                    <ul className="homes-list clearfix pb-0">
                                        <li className="the-icons">
                                            <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                                            <span>6 Bedrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                            <span>3 Bathrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-square mr-2" aria-hidden="true"></i>
                                            <span>720 sq ft</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-car mr-2" aria-hidden="true"></i>
                                            <span>2 Garages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agents-grid" data-aos="fade-up" data-aos-delay="150">
                        <div className="landscapes">
                            <div className="project-single">
                                <div className="project-inner project-head">
                                    <div className="homes">
                                        <a href="#" className="homes-img">
                                            <div className="homes-tag button alt featured">Featured</div>
                                            <div className="homes-tag button alt sale">For Sale</div>
                                            <div className="homes-price">$9,000/mo</div>
                                            <img src={pic} alt="home-1" className="img-responsive"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="homes-content">
                                    <h3><a href="#">Real House Luxury Villa</a></h3>
                                    <p className="homes-address mb-3">
                                        <a href="#">
                                            <i className="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                                        </a>
                                    </p>
                                    <ul className="homes-list clearfix pb-0">
                                        <li className="the-icons">
                                            <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                                            <span>6 Bedrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                            <span>3 Bathrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-square mr-2" aria-hidden="true"></i>
                                            <span>720 sq ft</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-car mr-2" aria-hidden="true"></i>
                                            <span>2 Garages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agents-grid" data-aos="fade-up" data-aos-delay="150">
                        <div className="landscapes">
                            <div className="project-single">
                                <div className="project-inner project-head">
                                    <div className="homes">
                                        <a href="#" className="homes-img">
                                            <div className="homes-tag button alt featured">Featured</div>
                                            <div className="homes-tag button alt sale">For Sale</div>
                                            <div className="homes-price">$9,000/mo</div>
                                            <img src={pic} alt="home-1" className="img-responsive"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="homes-content">
                                    <h3><a href="#">Real House Luxury Villa</a></h3>
                                    <p className="homes-address mb-3">
                                        <a href="#">
                                            <i className="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                                        </a>
                                    </p>
                                    <ul className="homes-list clearfix pb-0">
                                        <li className="the-icons">
                                            <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                                            <span>6 Bedrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                            <span>3 Bathrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-square mr-2" aria-hidden="true"></i>
                                            <span>720 sq ft</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-car mr-2" aria-hidden="true"></i>
                                            <span>2 Garages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agents-grid" data-aos="fade-up" data-aos-delay="150">
                        <div className="landscapes">
                            <div className="project-single">
                                <div className="project-inner project-head">
                                    <div className="homes">
                                        <a href="#" className="homes-img">
                                            <div className="homes-tag button alt featured">Featured</div>
                                            <div className="homes-tag button alt sale">For Sale</div>
                                            <div className="homes-price">$9,000/mo</div>
                                            <img src={pic} alt="home-1" className="img-responsive"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="homes-content">
                                    <h3><a href="#">Real House Luxury Villa</a></h3>
                                    <p className="homes-address mb-3">
                                        <a href="#">
                                            <i className="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                                        </a>
                                    </p>
                                    <ul className="homes-list clearfix pb-0">
                                        <li className="the-icons">
                                            <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                                            <span>6 Bedrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                            <span>3 Bathrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-square mr-2" aria-hidden="true"></i>
                                            <span>720 sq ft</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-car mr-2" aria-hidden="true"></i>
                                            <span>2 Garages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agents-grid" data-aos="fade-up" data-aos-delay="150">
                        <div className="landscapes">
                            <div className="project-single">
                                <div className="project-inner project-head">
                                    <div className="homes">
                                        <a href="#" className="homes-img">
                                            <div className="homes-tag button alt featured">Featured</div>
                                            <div className="homes-tag button alt sale">For Sale</div>
                                            <div className="homes-price">$9,000/mo</div>
                                            <img src={pic} alt="home-1" className="img-responsive"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="homes-content">
                                    <h3><a href="#">Real House Luxury Villa</a></h3>
                                    <p className="homes-address mb-3">
                                        <a href="#">
                                            <i className="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                                        </a>
                                    </p>
                                    <ul className="homes-list clearfix pb-0">
                                        <li className="the-icons">
                                            <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                                            <span>6 Bedrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                            <span>3 Bathrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-square mr-2" aria-hidden="true"></i>
                                            <span>720 sq ft</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-car mr-2" aria-hidden="true"></i>
                                            <span>2 Garages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agents-grid" data-aos="fade-up" data-aos-delay="150">
                        <div className="landscapes">
                            <div className="project-single">
                                <div className="project-inner project-head">
                                    <div className="homes">
                                        <a href="#" className="homes-img">
                                            <div className="homes-tag button alt featured">Featured</div>
                                            <div className="homes-tag button alt sale">For Sale</div>
                                            <div className="homes-price">$9,000/mo</div>
                                            <img src={pic} alt="home-1" className="img-responsive"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="homes-content">
                                    <h3><a href="#">Real House Luxury Villa</a></h3>
                                    <p className="homes-address mb-3">
                                        <a href="#">
                                            <i className="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                                        </a>
                                    </p>
                                    <ul className="homes-list clearfix pb-0">
                                        <li className="the-icons">
                                            <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                                            <span>6 Bedrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                            <span>3 Bathrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-square mr-2" aria-hidden="true"></i>
                                            <span>720 sq ft</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-car mr-2" aria-hidden="true"></i>
                                            <span>2 Garages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agents-grid" data-aos="fade-up" data-aos-delay="150">
                        <div className="landscapes">
                            <div className="project-single">
                                <div className="project-inner project-head">
                                    <div className="homes">
                                        <a href="#" className="homes-img">
                                            <div className="homes-tag button alt featured">Featured</div>
                                            <div className="homes-tag button alt sale">For Sale</div>
                                            <div className="homes-price">$9,000/mo</div>
                                            <img src={pic} alt="home-1" className="img-responsive"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="homes-content">
                                    <h3><a href="#">Real House Luxury Villa</a></h3>
                                    <p className="homes-address mb-3">
                                        <a href="#">
                                            <i className="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                                        </a>
                                    </p>
                                    <ul className="homes-list clearfix pb-0">
                                        <li className="the-icons">
                                            <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                                            <span>6 Bedrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                            <span>3 Bathrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-square mr-2" aria-hidden="true"></i>
                                            <span>720 sq ft</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-car mr-2" aria-hidden="true"></i>
                                            <span>2 Garages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agents-grid" data-aos="fade-up" data-aos-delay="150">
                        <div className="landscapes">
                            <div className="project-single">
                                <div className="project-inner project-head">
                                    <div className="homes">
                                        <a href="#" className="homes-img">
                                            <div className="homes-tag button alt featured">Featured</div>
                                            <div className="homes-tag button alt sale">For Sale</div>
                                            <div className="homes-price">$9,000/mo</div>
                                            <img src={pic} alt="home-1" className="img-responsive"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="homes-content">
                                    <h3><a href="#">Real House Luxury Villa</a></h3>
                                    <p className="homes-address mb-3">
                                        <a href="#">
                                            <i className="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                                        </a>
                                    </p>
                                    <ul className="homes-list clearfix pb-0">
                                        <li className="the-icons">
                                            <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                                            <span>6 Bedrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                            <span>3 Bathrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-square mr-2" aria-hidden="true"></i>
                                            <span>720 sq ft</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-car mr-2" aria-hidden="true"></i>
                                            <span>2 Garages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agents-grid" data-aos="fade-up" data-aos-delay="150">
                        <div className="landscapes">
                            <div className="project-single">
                                <div className="project-inner project-head">
                                    <div className="homes">
                                        <a href="#" className="homes-img">
                                            <div className="homes-tag button alt featured">Featured</div>
                                            <div className="homes-tag button alt sale">For Sale</div>
                                            <div className="homes-price">$9,000/mo</div>
                                            <img src={pic} alt="home-1" className="img-responsive"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="homes-content">
                                    <h3><a href="#">Real House Luxury Villa</a></h3>
                                    <p className="homes-address mb-3">
                                        <a href="#">
                                            <i className="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                                        </a>
                                    </p>
                                    <ul className="homes-list clearfix pb-0">
                                        <li className="the-icons">
                                            <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                                            <span>6 Bedrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                            <span>3 Bathrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-square mr-2" aria-hidden="true"></i>
                                            <span>720 sq ft</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-car mr-2" aria-hidden="true"></i>
                                            <span>2 Garages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agents-grid" data-aos="fade-up" data-aos-delay="150">
                        <div className="landscapes">
                            <div className="project-single">
                                <div className="project-inner project-head">
                                    <div className="homes">
                                        <a href="#" className="homes-img">
                                            <div className="homes-tag button alt featured">Featured</div>
                                            <div className="homes-tag button alt sale">For Sale</div>
                                            <div className="homes-price">$9,000/mo</div>
                                            <img src={pic} alt="home-1" className="img-responsive"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="homes-content">
                                    <h3><a href="#">Real House Luxury Villa</a></h3>
                                    <p className="homes-address mb-3">
                                        <a href="#">
                                            <i className="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                                        </a>
                                    </p>
                                    <ul className="homes-list clearfix pb-0">
                                        <li className="the-icons">
                                            <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                                            <span>6 Bedrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                            <span>3 Bathrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-square mr-2" aria-hidden="true"></i>
                                            <span>720 sq ft</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-car mr-2" aria-hidden="true"></i>
                                            <span>2 Garages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agents-grid" data-aos="fade-up" data-aos-delay="150">
                        <div className="landscapes">
                            <div className="project-single">
                                <div className="project-inner project-head">
                                    <div className="homes">
                                        <a href="#" className="homes-img">
                                            <div className="homes-tag button alt featured">Featured</div>
                                            <div className="homes-tag button alt sale">For Sale</div>
                                            <div className="homes-price">$9,000/mo</div>
                                            <img src={pic} alt="home-1" className="img-responsive"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="homes-content">
                                    <h3><a href="#">Real House Luxury Villa</a></h3>
                                    <p className="homes-address mb-3">
                                        <a href="#">
                                            <i className="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                                        </a>
                                    </p>
                                    <ul className="homes-list clearfix pb-0">
                                        <li className="the-icons">
                                            <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                                            <span>6 Bedrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                            <span>3 Bathrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-square mr-2" aria-hidden="true"></i>
                                            <span>720 sq ft</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-car mr-2" aria-hidden="true"></i>
                                            <span>2 Garages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default SaleProperties
