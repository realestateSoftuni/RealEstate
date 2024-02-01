/*jshint esversion: 6 */

import TopMapsComponent from "./TopMapsComponent.jsx";
import PropertiesInListing from "./PropertiesInListing.jsx";
import LayoutAll from "../MainLayout/LayoutAll.jsx";
import AdvancedSearch from "../SearchBar/AdvancedSearch.jsx";
import {useLocation} from "react-router-dom";

function Listing() {
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
                    </div>
                </section>
            </div>
        </LayoutAll>
    )
}

export default Listing
