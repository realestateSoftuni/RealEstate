import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import PopularPlaces from "./PopularPlaces.jsx";
import SaleProperties from "./SaleProperties.jsx";
import RentProperties from "./RentProperties.jsx";
import ServicesSection from "./ServicesSection.jsx";

function HomePage(){
    return(
        <main className="main">
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
                            <SearchBar/>
                        </div>
                    </div>
                </div>
            </section>
            <PopularPlaces/>
            <SaleProperties/>
            <RentProperties/>
            <ServicesSection/>
        </main>
    );
}

export default HomePage
