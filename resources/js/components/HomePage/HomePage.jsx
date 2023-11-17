import React from "react";
import HeaderSearchBar from "./HeaderSearchBar.jsx";
import PopularPlaces from "./PopularPlaces.jsx";
import SaleProperties from "./SaleProperties.jsx";

function HomePage(){
    return(
        <main className="main">
            <HeaderSearchBar/>
            <PopularPlaces/>
            <SaleProperties/>
        </main>
    );
}

export default HomePage
