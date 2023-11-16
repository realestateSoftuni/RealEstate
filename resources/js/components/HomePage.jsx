import React from "react";
import HeaderSearchBar from "../components/HeaderSearchBar.jsx";
import PopularPlaces from "../components/PopularPlaces.jsx";

function HomePage(){
    return(
        <main className="main">
            <HeaderSearchBar/>
            <PopularPlaces/>
        </main>
    );
}

export default HomePage
