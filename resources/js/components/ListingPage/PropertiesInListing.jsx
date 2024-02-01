import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import loader from '../../../assets/loader.gif'
import axios from "axios";
import NavPart from "@/components/ListingPage/NavPart.jsx";

function PropertiesInListing() {
    const[propertiesList, setPropertiesList]=useState({});
    const navigate = useNavigate();
    const location = useLocation()
    const currentAction = location.state.action

    useEffect(() => {
        const fetchData = async (currentAction) => {
            try {
                const response = await axios.get(`${window.Laravel.apiUrl}/api/all-properties/${currentAction}`);
                setPropertiesList(response.data);
                // console.log(response.data)
            } catch (err) {
                navigate('/');
                console.log(err);
            }
        };
        fetchData(currentAction);
    }, [currentAction]);
    if (!propertiesList.length) {
        return (
            <div className='loading-container'>
                <img src={loader}/>
                <p>Loading . . . </p>
            </div>)
    }

    return (
        <>
            <div className="row featured portfolio-items">
                {propertiesList.map((property) =>
                    <div key={property.id} className="item col-lg-4 col-md-6 col-xs-12 landscapes sale">
                        <div className="project-single" data-aos="fade-up">
                            <div className="project-inner project-head">
                                <div className="project-bottom">
                                    <h4><Link to={`/property/ ${property.id}`}>View Property</Link></h4>
                                </div>
                                <div className="homes">
                                    <Link to={`/property/ ${property.id}`} className="homes-img">
                                        <div className="homes-tag button alt sale">{property.status === 'Sale' ? 'For Sale' : 'For Rent'}</div>
                                        <div className="homes-price">{property.property_type}</div>
                                        <img src={property.property_photos[0].photo_url} alt="home-1" className="img-responsive" />
                                    </Link>
                                </div>
                                <div className="button-effect">
                                    <Link to={`/property/ ${property.id}`} className="btn"><i className="fa fa-link"></i></Link>
                                </div>
                            </div>
                            <div className="homes-content">
                                <h3><Link to={`/property/ ${property.id}`}>{property.title}</Link></h3>
                                <p className="homes-address mb-3">
                                    <Link to={`/property/ ${property.id}`}>
                                        <i className="fa fa-map-marker"></i><span>{property.country}, {property.city}</span>
                                    </Link>
                                </p>
                                <ul className="homes-list clearfix pb-3">
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
                                <div className="price-properties">
                                    <h3 className="title mt-3">
                                        <p>$ {Number(property.price).toLocaleString('en-US')}</p>
                                    </h3>
                                    <div className="compare">
                                        <a href="#" title="Favorites">
                                            <i className="fa fa-heart-o"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="footer">
                                    <Link to="/profile-details">
                                        <i className="fa fa-user"></i> {property.name}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <NavPart/>
        </>
    )
}

export default PropertiesInListing
