/*jshint esversion: 6 */

import TopMapsComponent from "./TopMapsComponent.jsx";
import SearchResult from "./SearchResult.jsx";
import PropertiesInListing from "./PropertiesInListing.jsx";
import NavPart from "./NavPart.jsx";
import LayoutAll from "../MainLayout/LayoutAll.jsx";
import AdvancedSearch from "../SearchBar/AdvancedSearch.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

function Listing(collection) {
    // 'collection' give us info to filter what the client is searching for ('Sale' or 'Rent' values)
    const location = useLocation()
    const currentAction = location.state.action

    return (

        <LayoutAll>
            <div className="inner-pages st-1 agents hp-6 full hd-white">
                <TopMapsComponent/>
                <section className="properties-list featured portfolio blog">
                    <div className="container">
                        <AdvancedSearch/>
                        {/*<SearchResult/>*/}
                        <PropertiesInListing state={{action: {currentAction}}}/>
                        <NavPart/>
                    </div>
                </section>
            </div>
        </LayoutAll>
    )
}

export default Listing
