import {useState} from "react";
import AdvancedSearch from "./AdvancedSearch.jsx";

function SearchBar() {
    const[buttonTypeIsClicked, setButtonTypeIsClicked] = useState('Sale');



    const saleRentButtonHandler = (buttonType) => {
        setButtonTypeIsClicked(buttonType)
    };


    return(
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
                    <AdvancedSearch typeProperty={buttonTypeIsClicked}/>
                </div>
            </div>
        </div>
    )
}
export default SearchBar
