import {useState} from "react";
import MultiRangeSlider from "multi-range-slider-react";

const rooms = []

for (let i = 1; i < 7; i++ ) {
    rooms.push(i)
}

const openInitialState = {
    advanced: false,
    status: false,
    type: false,
    location: false,
    bedrooms: false,
    bathrooms: false,
}

const dropdownFields = {
    status: 'Property status',
    type: 'Type',
    location: 'Location',
    bedrooms: 'Bedrooms',
    bathrooms: 'Bathrooms',
}

const initialValues = {
    searchWord: '',
    status: 'Property status',
    type: 'Type',
    location: 'Location',
    bedrooms: 'Bedrooms',
    bathrooms: 'Bathrooms',
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
    minArea: 1,
    maxArea: 1300,
    minPrice: 1,
    maxPrice: 999000,
}

const cities = ['Sofia', 'Bourgas', 'Varna']

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
function AdvancedSearch(typeProperty) {
    //Advanced search menu
    const[formValues, setFormValues] = useState(initialValues);
    const [isOpen, setIsOpen] = useState(openInitialState);

    const currency = 'EUR';
    const areaMeasure = 'sq.m.'
    const types = ['House', 'Apartment', 'Commercial', 'Lot', 'Garage']


    const clickOpenHandler = (button) => {
        let newState = {...isOpen, [button]: !isOpen[button]}
        setIsOpen(newState)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(formValues)
    }

    const valueHandler = (e, field, value) => {
        let newValue = '';

        switch (e.target.type) {
            case 'checkbox':
                newValue = e.target.checked;
                console.log(newValue)
                break;
            case 'text':
                newValue = e.target.value;
                break;
            default:
                newValue = value
        }
        let newState = { ...formValues, [field]: newValue}
        setFormValues(newState)
    }

    // Range-sliders
    const handleArea = (e) => {
        let minValue = e.minValue
        let maxValue = e.maxValue
        let newState = { ...formValues, minArea: minValue, maxArea: maxValue}
        setFormValues(newState);
    }

    const handlePrice = (e) => {
        let minValue = e.minValue
        let maxValue = e.maxValue
        let newState = { ...formValues, minPrice: minValue, maxPrice: maxValue}
        setFormValues(newState);
    }

    return(
        <div className="tab-pane fade show active" id="tabs_1">
            <form onSubmit={submitHandler}>
                <div className="rld-main-search">
                    <div className="row">
                        <div className="rld-single-input">
                            <input type="text" onChange={(e) => valueHandler(e, 'searchWord')} placeholder="Enter Keyword..."/>
                        </div>
                        <div className="rld-single-select ml-22" onClick={() => clickOpenHandler('type')}>
                            <div className={`nice-select select single-select ${isOpen.type ? 'open' : ''}`} tabIndex="0">
                                <span className="current">{formValues.type}</span>
                                <ul className="list">
                                    {types.map((t) =>
                                        <li key={t} type='dropdown' data-value={t} className="option" onClick={(e) => valueHandler(e, 'type', t)}>{t}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="rld-single-select" onClick={() => clickOpenHandler('location')}>
                            <div className={`nice-select select single-select mr-0 ${isOpen.location ? 'open' : ''}`} tabIndex="0">
                                <span className="current">{formValues.location}</span>
                                <ul className="list">
                                    {cities.map((c) =>
                                        <li key={c} type='dropdown' data-value={c} className="option" onClick={(e) => valueHandler(e, 'location', c)}>{c}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="dropdown-filter" onClick={() => clickOpenHandler('advanced')}><span>Advanced Search</span></div>
                        <div className="col-xl-2 col-lg-2 col-md-4 pl-0">
                            <button type='submit' className="btn btn-yellow">Search Now</button>
                        </div>
                        <div className={`explore__form-checkbox-list full-filter ${isOpen.advanced ? 'filter-block' : ''}`}>
                            <div className="row">
                                <div onClick={() => clickOpenHandler('status')} className="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                                    <div className="form-group categories">
                                        <div className={`nice-select form-control wide ${isOpen.status ? 'open' : ''}`} tabIndex="0"><span className="current"><i className="fa fa-home"></i>{formValues.status}</span>
                                            <ul className="list">
                                                <li type='dropdown' onClick={(e) => valueHandler(e, 'status', "For Sale")} value="For Sale" className="option">For Sale</li>
                                                <li type='dropdown' onClick={(e) => valueHandler(e, 'status', "For Rent")} value="For Rent" className="option">For Rent</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => clickOpenHandler('bedrooms')} className="col-lg-4 col-md-6 py-1 pr-30 pl-0 ">
                                    <div className="form-group beds">
                                        <div className={`nice-select form-control wide ${isOpen.bedrooms ? 'open' : ''}`} tabIndex="0"><span className="current"><i className="fa fa-bed" aria-hidden="true"></i> {formValues.bedrooms}</span>
                                            <ul className="list">
                                                {rooms.map((bed) =>
                                                    <li key={bed} type='dropdown' data-value={bed} className="option"  onClick={(e) => valueHandler(e, 'bedrooms', bed)}>{bed}</li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => clickOpenHandler('bathrooms')} className="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                                    <div className="form-group bath">
                                        <div className={`nice-select form-control wide ${isOpen.bathrooms ? 'open' : ''}`} tabIndex="0"><span className="current"><i className="fa fa-bath" aria-hidden="true"></i> {formValues.bathrooms}</span>
                                            <ul className="list">
                                                {rooms.map((bath) =>
                                                    <li key={bath} type='dropdown' data-value={bath} className="option"  onClick={(e) => valueHandler(e,'bathrooms', bath)}>{bath}</li>
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
                                                minValue={formValues.minArea}
                                                maxValue={formValues.maxArea}
                                                ruler={false}
                                                onInput={(e) => {
                                                    handleArea(e);
                                                }}
                                                className={'slider-bar-custom'}
                                                label='false'
                                            />
                                            <label className='first-slider-value'>{formValues.minArea} {areaMeasure}</label>
                                            <label className='second-slider-value'>{formValues.maxArea} {areaMeasure}</label>
                                            <div className="clearfix"></div>
                                        </div>
                                        <br/>
                                        <div className="range-slider">
                                            <label>Price Range</label>
                                            <MultiRangeSlider
                                                min={1}
                                                max={999000}
                                                step={1}
                                                minValue={formValues.minPrice}
                                                maxValue={formValues.maxPrice}
                                                ruler={false}
                                                onInput={(e) => {
                                                    handlePrice(e);
                                                }}
                                                className={'slider-bar-custom'}
                                                label='false'
                                            />
                                            <label className='first-slider-value'>{currency} {formValues.minPrice.toLocaleString()}</label>
                                            <label className='second-slider-value'>{currency} {formValues.maxPrice. toLocaleString()}</label>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 py-1 pr-30 d-none d-lg-none d-xl-flex">
                                    <div className="checkboxes one-in-row margin-bottom-10 ch-1">
                                        {Object.keys(checkboxOptions).slice(0,halfOptions).map((box, i) =>
                                            <>
                                                <input key={box} onChange={(e) => valueHandler(e, box)} id={`check-${i+2}`} type="checkbox" name={box}/>
                                                <label htmlFor={`check-${i+2}`}>{box}</label>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 py-1 pr-30 d-none d-lg-none d-xl-flex">
                                    <div className="checkboxes one-in-row margin-bottom-10 ch-2">
                                        {Object.keys(checkboxOptions).slice(halfOptions, halfOptions*2+1).map((box, i) =>
                                            <>
                                                <input key={box} onChange={(e) => valueHandler(e, box )} id={`check-${i+2+halfOptions}`} type="checkbox" name={box}/>
                                                <label htmlFor={`check-${i+2+halfOptions}`}>{box}</label>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AdvancedSearch
