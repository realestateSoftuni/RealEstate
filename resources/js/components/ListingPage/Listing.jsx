/*jshint esversion: 6 */

import TopMapsComponent from "./TopMapsComponent.jsx";
import SearchResult from "./SearchResult.jsx";
import PropertiesInListing from "./PropertiesInListing.jsx";
import NavPart from "./NavPart.jsx";
import LayoutAll from "../MainLayout/LayoutAll.jsx";
import AdvancedSearch from "../SearchBar/AdvancedSearch.jsx";

function Listing(collection) {
    // 'collection' give us info to filter what the client is searching for ('Sale' or 'Rent' values)
    console.log(collection);

    return (

        <LayoutAll>
            <div className="inner-pages st-1 agents hp-6 full hd-white">
                <TopMapsComponent/>
                <section className="properties-list featured portfolio blog">
                    <div className="container">
                        <AdvancedSearch/>
                        <SearchResult/>
                        <PropertiesInListing/>
                        <NavPart/>
                    </div>
                </section>
            </div>
        </LayoutAll>
    )
}

export default Listing
