import { useState } from "react";
import AdvancedSearch from "./AdvancedSearch.jsx";
import axios from "axios";
// ... (imports)

function SearchBar() {
    const [buttonTypeIsClicked, setButtonTypeIsClicked] = useState('Sale');
    const [formValues, setFormValues] = useState({
        // Initialize your form values here
    });

    const saleRentButtonHandler = (buttonType) => {
        setButtonTypeIsClicked(buttonType);
    };

    const valueHandler = (field, value) => {
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [field]: value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("Search form submitted with:", buttonTypeIsClicked, formValues);

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/search", {
                type: buttonTypeIsClicked,
                formData: formValues,
            });

            console.log("Backend response:", response.data);
            // Handle the response as needed

            // For debugging purposes, log any additional information
            console.log("Additional log:", response.additionalInfo);

        } catch (error) {
            console.error("Error sending data to backend:", error);
            // Handle errors
        }
    };

    return (
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
                    <form onSubmit={submitHandler} method="post"> {/* Ensure the method is set to "post" */}
                        {/* ... (existing form elements) */}
                        <AdvancedSearch
                            typeProperty={buttonTypeIsClicked}
                            formValues={formValues}
                            onValueChange={valueHandler}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
