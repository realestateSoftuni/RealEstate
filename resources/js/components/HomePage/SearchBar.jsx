import {useState} from "react";
import MultiRangeSlider from "multi-range-slider-react";

const options = []

for (let i = 1; i < 10; i++ ) {
    options.push(i)
}

const checkboxOptions = {
    "WiFi": false,
    "TV Cable": false,
    "Dryer": false,
    "Microwave": false,
    "Washer": false,
    "Refrigerator": false,
    "Outdoor Shower": false,
    "Air Conditioning": false,
    "Swimming Pool": false,
    "Central Heating": false,
    "Laundry Room": false,
    "Gym": false,
    "Alarm": false,
    "Window Covering": false,
}

let halfOptions = Object.keys(checkboxOptions).length/2

// 'typeProperty' give us info to filter what the client is searching for ('Sale' or 'Rent' values)
function SearchBar(typeProperty) {
    //Advanced search menu
    const[advancedIsClicked, setAdvancedIsClicked] = useState(false);

    //Drop-down menus
    const[statusClicked, setStatusClicked] = useState(false)
    const[bedroomsClicked, setBedroomsClicked] = useState(false)
    const[statusValue, setStatusValue] = useState('Property status')
    const[bedroomsValue, setBedroomsValue] = useState('Bedrooms')
    const[bathroomsClicked, setBathroomsClicked] = useState(false)
    const[bathroomsValue, setBathroomsValue] = useState('Bathrooms')

    //Range-sliders
    const [minValueArea, setMinValueArea] = useState(1);
    const [maxValueArea, setMaxValueArea] = useState(1300);
    const [minValuePrice, setMinValuePrice] = useState(1);
    const [maxValuePrice, setMaxValuePrice] = useState(999000);
    const currency = 'EUR';
    const areaMeasure = 'sq.m.'

    //Check-box
    const [checkBox, setCheckBox] = useState(checkboxOptions)

    //Advanced search menus
    const clickAdvancedHandler = () => {
        setAdvancedIsClicked(!advancedIsClicked);
    };

    // Range-sliders
    const handleArea = (e) => {
        setMinValueArea(e.minValue);
        setMaxValueArea(e.maxValue);
    }

    const handlePrice = (e) => {
        setMinValuePrice(e.minValue);
        setMaxValuePrice(e.maxValue);
    }

    //Drop-downs
    const clickStatusHandler = () => {
        setStatusClicked(!statusClicked);
    };

    const clickBedroomsHandler = () => {
        setBedroomsClicked(!bedroomsClicked)
    }

    const clickBathroomsHandler = () => {
        setBathroomsClicked(!bathroomsClicked)
    }

    const statusValueHandler = (option) => {
        setStatusValue(option)
        setStatusClicked(!statusClicked);
    };

    const bedroomsValueHandler = (option) => {
        setBedroomsValue(option)
        setBedroomsClicked(!bedroomsClicked);
    };

    const bathroomsValueHandler = (option) => {
        setBathroomsValue(option)
        setBathroomsClicked(!bathroomsClicked);
        console.log(checkBox)
    };

    const checkBoxHandler = (e) => {
        setCheckBox(state => ({
            ...state,
            [e.target.name]: e.target.checked
        }))
    }

    return(
        <div className="tab-pane fade show active" id="tabs_1">
            <div className="rld-main-search">
                <div className="row">
                    <div className="rld-single-input">
                        <input type="text" placeholder="Enter Keyword..."/>
                    </div>
                    <div className="rld-single-select ml-22">
                        <select className="select single-select">
                            <option value="1">Property Type</option>
                            <option value="2">Family House</option>
                            <option value="3">Apartment</option>
                            <option value="3">Condo</option>
                        </select>
                    </div>
                    <div className="rld-single-select">
                        <select className="select single-select mr-0">
                            <option value="1">Location</option>
                            <option value="2">Los Angeles</option>
                            <option value="3">Chicago</option>
                            <option value="3">Philadelphia</option>
                            <option value="3">San Francisco</option>
                            <option value="3">Miami</option>
                            <option value="3">Houston</option>
                        </select>
                    </div>
                    <div className="dropdown-filter" onClick={clickAdvancedHandler}><span>Advanced Search</span></div>
                    <div className="col-xl-2 col-lg-2 col-md-4 pl-0">
                        <a className="btn btn-yellow" href="#">Search Now</a>
                    </div>
                    <div className={`explore__form-checkbox-list full-filter ${advancedIsClicked ? 'filter-block' : ''}`}>
                        <div className="row">
                            <div onClick={clickStatusHandler} className="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                                <div className="form-group categories">
                                    <div className={`nice-select form-control wide ${statusClicked ? 'open' : ''}`} tabIndex="0"><span className="current"><i className="fa fa-home"></i>{statusValue}</span>
                                        <ul className="list">
                                            <li onClick={() => statusValueHandler("For Sale")} value="For Sale" className="option">For Sale</li>
                                            <li onClick={() => statusValueHandler("For Rent")} value="For Rent" className="option">For Rent</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div onClick={clickBedroomsHandler} className="col-lg-4 col-md-6 py-1 pr-30 pl-0 ">
                                <div className="form-group beds">
                                    <div className={`nice-select form-control wide ${bedroomsClicked ? 'open' : ''}`} tabIndex="0"><span className="current"><i className="fa fa-bed" aria-hidden="true"></i> {bedroomsValue}</span>
                                        <ul className="list">
                                            {options.map((b) =>
                                                <li key={b} onClick={() => bedroomsValueHandler(b)} data-value={b} className="option">{b}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div onClick={clickBathroomsHandler} className="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                                <div className="form-group bath">
                                    <div className={`nice-select form-control wide ${bathroomsClicked ? 'open' : ''}`} tabIndex="0"><span className="current"><i className="fa fa-bath" aria-hidden="true"></i> {bathroomsValue}</span>
                                        <ul className="list">
                                            {options.map((b) =>
                                                <li key={b} onClick={() => bathroomsValueHandler(b)} data-value={b} className="option">{b}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 py-1 pr-30 mr-5 sld d-none d-lg-none d-xl-flex">
                                <div className="main-search-field-2">
                                    <div className="range-slider">
                                        <label>Area Size</label>
                                        <MultiRangeSlider
                                            min={1}
                                            max={1300}
                                            step={1}
                                            minValue={minValueArea}
                                            maxValue={maxValueArea}
                                            ruler={false}
                                            onInput={(e) => {
                                                handleArea(e);
                                            }}
                                            className={'slider-bar-custom'}
                                            label='false'
                                        />
                                        <label className='first-slider-value'>{minValueArea} {areaMeasure}</label>
                                        <label className='second-slider-value'>{maxValueArea} {areaMeasure}</label>
                                        <div className="clearfix"></div>
                                    </div>
                                    <br/>
                                    <div className="range-slider">
                                        <label>Price Range</label>
                                        <MultiRangeSlider
                                            min={1}
                                            max={999000}
                                            step={1}
                                            minValue={minValuePrice}
                                            maxValue={maxValuePrice}
                                            ruler={false}
                                            onInput={(e) => {
                                                handlePrice(e);
                                            }}
                                            className={'slider-bar-custom'}
                                            label='false'
                                        />
                                        <label className='first-slider-value'>{currency} {minValuePrice.toLocaleString()}</label>
                                        <label className='second-slider-value'>{currency} {maxValuePrice. toLocaleString()}</label>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 py-1 pr-30 d-none d-lg-none d-xl-flex">
                                <div className="checkboxes one-in-row margin-bottom-10 ch-1">
                                    {Object.keys(checkboxOptions).slice(0,halfOptions).map((box, i) =>
                                        <>
                                            <input key={box} onChange={checkBoxHandler} id={`check-${i+2}`} type="checkbox" name={box}/>
                                            <label htmlFor={`check-${i+2}`}>{box}</label>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 py-1 pr-30 d-none d-lg-none d-xl-flex">
                                <div className="checkboxes one-in-row margin-bottom-10 ch-2">
                                    {Object.keys(checkboxOptions).slice(halfOptions, halfOptions*2+1).map((box, i) =>
                                        <>
                                            <input key={box} onChange={checkBoxHandler} id={`check-${i+2+halfOptions}`} type="checkbox" name={box}/>
                                            <label htmlFor={`check-${i+2+halfOptions}`}>{box}</label>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar
