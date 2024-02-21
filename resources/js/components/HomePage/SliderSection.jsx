import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect, useState} from "react";
import axios from "axios";
import loader from "../../../assets/loader.gif";
import {Link} from "react-router-dom";

function SliderSection(props) {
    const {status, count} = props;


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
    const[propertiesList, setPropertiesList]=useState({});

    useEffect(() => {
        console.log(status, count)
        const fetchData = async (status, count) => {
            try {
                const response = await axios.get(`${window.Laravel.apiUrl}/api/recent-properties/${status}/${count}`);
                setPropertiesList(response.data);
                console.log(response.data)
            } catch (err) {
                // navigate('/');
                console.log(err);
            }
        };
        fetchData(status, count);
    }, [status, count]);

    if (!propertiesList.length) {
        return (
            <div className='loading-container'>
                <img src={loader}/>
                <p>Loading . . . </p>
            </div>)
    }

    return (
            <Slider {...settings}>
                {propertiesList.map((property) =>
                    <div key={property.id} className="agents-grid" data-aos="fade-up" data-aos-delay="150">
                        <div className="landscapes">
                            <div className="project-single">
                                <div className="project-inner project-head">
                                    <div className="homes">
                                        <Link to={`/property/${property.id}`} className="homes-img">
                                            <div className="homes-tag button alt featured">{property.property_type}</div>
                                            <div className="homes-tag button alt sale">{property.status === 'Rent' ? 'For Rent' : 'For Sale'}</div>
                                            <div className="homes-price"> $ {Number(property.price).toLocaleString('en-US')}
                                                {property.status === 'Rent' ? ' /month' : ''}
                                            </div>
                                            {property.photos.length > 0 && <img src={property.photos[0].photo_url} alt="home-1" className="img-responsive"/>}
                                        </Link>
                                    </div>
                                </div>
                                <div className="homes-content">
                                    <h3><Link to={`/property/${property.id}`}>{property.title}</Link></h3>
                                    <p className="homes-address mb-3">
                                        <Link to={`/property/${property.id}`}>
                                            <i className="fa fa-map-marker"></i><span>{property.country}, {property.city}</span>
                                        </Link>
                                    </p>
                                    <ul className="homes-list clearfix pb-0">
                                        <li className="the-icons">
                                            <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                                            <span>{property.bedrooms} Bedrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                                            <span>{property.bathrooms} Bathrooms</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-square mr-2" aria-hidden="true"></i>
                                            <span>{Number(property.square_feet).toLocaleString('en-US')} sq ft</span>
                                        </li>
                                        <li className="the-icons">
                                            <i className="flaticon-calendario mr-2" aria-hidden="true"></i>
                                            <span>{property.build} Year</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
    );
}

export default SliderSection
