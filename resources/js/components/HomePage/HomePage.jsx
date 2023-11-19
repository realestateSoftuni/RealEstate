import React from "react";
import HeaderSearchBar from "./HeaderSearchBar.jsx";
import PopularPlaces from "./PopularPlaces.jsx";
import SaleProperties from "./SaleProperties.jsx";
import RentProperties from "./RentProperties.jsx";
import ServicesSection from "./ServicesSection.jsx";

function HomePage(){
    return(
        <main className="main">
            <HeaderSearchBar/>
            <PopularPlaces/>
            <SaleProperties/>
            <RentProperties/>
            <ServicesSection/>
        </main>
    );
}

export default HomePage
