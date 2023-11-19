import {useState} from "react";
import SearchBar from "./SearchBar.jsx";

function HeaderSearchBar() {
    const[buttonTypeIsClicked, setButtonTypeIsClicked] = useState('Sale');



    const saleRentButtonHandler = (buttonType) => {
        setButtonTypeIsClicked(buttonType)
    };


    return(
        <section className="home17 overlay home-three bg-img3">
            <div className="hero-main">
                <div className="container aos-init aos-animate" data-aos="zoom-in">
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
                                    <li className="nav-item" onClick={() => saleRentButtonHandler('Sale')}>
                                        <a className={`nav-link ${buttonTypeIsClicked === 'Sale' ? 'active' : ''}`} data-toggle="tab">For Sale</a>
                                    </li>
                                    <li className="nav-item" onClick={() => saleRentButtonHandler('Rent')}>
                                        <a className={`nav-link ${buttonTypeIsClicked === 'Rent' ? 'active' : ''}`} data-toggle="tab">For Rent</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <SearchBar typeProperty={buttonTypeIsClicked}/>
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
