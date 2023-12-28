import UserLayout from "../components/UserLayout/UserLayout.jsx";
import {useState} from "react";

const types = ['house', 'apartment', 'commercial', 'lot', 'garage']
const rooms = []

for (let i = 1; i < 7; i++ ) {
    rooms.push(i)
}

const floors = []

for (let i = 1; i < 11; i++ ) {
    floors.push(i)
}

const initialState = {
    status: false,
    type: false,
    year: false,
    floor: false,
    bedrooms: false,
    bathrooms: false,
}

function AddProperty() {
    const [isOpen, setIsOpen] = useState(initialState)

    const clickOpenHandler = (button) => {
        let newState = {...initialState, [button]: !isOpen[button]}
        setIsOpen(newState)
    }

    return(
        <UserLayout>
            <div className="col-lg-9 col-md-12 col-xs-12 royal-add-property-area section_100 pl-0 user-dash2">
                <div className="single-add-property">
                    <h3>Property description and price</h3>
                    <div className="property-form-group">
                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <p>
                                        <label htmlFor="title">Property Title</label>
                                        <input type="text" name="title" id="title" placeholder="Enter your property title"/>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p>
                                        <label htmlFor="description">Property Description</label>
                                        <textarea id="description" name="pro-dexc" placeholder="Describe about your property"></textarea>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-12 dropdown faq-drop" onClick={() => clickOpenHandler('status')}>
                                    <div className="form-group categories">
                                        <div className={`nice-select form-control wide ${isOpen.status ? 'open' : ''}`} tabIndex="0"><span className="current">Status</span>
                                            <ul className="list">
                                                <li data-value="1" className="option">Rent</li>
                                                <li data-value="2" className="option">Sale</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 dropdown faq-drop" onClick={() => clickOpenHandler('type')}>
                                    <div className="form-group categories">
                                        <div className={`nice-select form-control wide ${isOpen.type ? 'open' : ''}`} tabIndex="0"><span className="current">Type</span>
                                            <ul className="list">
                                                {types.map((t) =>
                                                    <li key={t} data-value={t} className="option">{t}</li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 dropdown faq-drop" onClick={() => clickOpenHandler('year')}>
                                    <div className="form-group categories">
                                        <div className={`nice-select form-control wide ${isOpen.year ? 'open' : ''}`} tabIndex="0"><span className="current">Size</span>
                                            <ul className="list">
                                                {rooms.map((s) =>
                                                    <li key={s} data-value={s} className="option">{s}</li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <p className="no-mb">
                                        <label htmlFor="price">Price</label>
                                        <input type="text" name="price" placeholder="USD" id="price"/>
                                    </p>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <p className="no-mb last">
                                        <label htmlFor="area">Area</label>
                                        <input type="text" name="area" placeholder="Sqft" id="area"/>
                                    </p>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <p className="no-mb">
                                        <label htmlFor="price">Build</label>
                                        <input type="text" name="price" placeholder="Year" id="price"/>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="single-add-property">
                    <h3>property Media</h3>
                    <div className="property-form-group">
                        <div className="row">
                            <div className="col-md-12">
                                <form action="/file-upload" className="dropzone"></form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-add-property">
                    <h3>property Location</h3>
                    <div className="property-form-group">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <p>
                                    <label htmlFor="address">Address</label>
                                    <input type="text" name="address" placeholder="Enter Your Address" id="address"/>
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p>
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city" placeholder="Enter Your City" id="city"/>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <p>
                                    <label htmlFor="state">State</label>
                                    <input type="text" name="state" placeholder="Enter Your State" id="state"/>
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p>
                                    <label htmlFor="country">Country</label>
                                    <input type="text" name="country" placeholder="Enter Your Country" id="country"/>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <p className="no-mb first">
                                    <label htmlFor="latitude">Google Maps latitude</label>
                                    <input type="text" name="latitude" placeholder="Google Maps latitude" id="latitude"/>
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p className="no-mb last">
                                    <label htmlFor="longitude">Google Maps longitude</label>
                                    <input type="text" name="longitude" placeholder="Google Maps longitude" id="longitude"/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-add-property">
                    <h3>Extra Information</h3>
                    <div className="property-form-group">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                <div className="form-group categories" onClick={() => clickOpenHandler('floor')}>
                                    <div className={`nice-select form-control wide ${isOpen.floor ? 'open' : ''}`} tabIndex="0"><span className="current">Floor</span>
                                        <ul className="list">
                                            <li data-value="1" className="option">1</li>
                                            <li data-value="2" className="option">2</li>
                                            <li data-value="1" className="option">3</li>
                                            <li data-value="2" className="option">4</li>
                                            <li data-value="1" className="option">5</li>
                                            <li data-value="2" className="option">6</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                <div className="form-group categories" onClick={() => clickOpenHandler('bedrooms')}>
                                    <div className={`nice-select form-control wide ${isOpen.bedrooms ? 'open' : ''}`} tabIndex="0"><span className="current">Bedrooms</span>
                                        <ul className="list">
                                            <li data-value="1" className="option">1</li>
                                            <li data-value="2" className="option">2</li>
                                            <li data-value="1" className="option">3</li>
                                            <li data-value="2" className="option">4</li>
                                            <li data-value="1" className="option">5</li>
                                            <li data-value="2" className="option">6</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                <div className="form-group categories" onClick={() => clickOpenHandler('bathrooms')}>
                                    <div className={`nice-select form-control wide ${isOpen.bathrooms ? 'open' : ''}`} tabIndex="0"><span className="current">Bathrooms</span>
                                        <ul className="list">
                                            <li data-value="1" className="option">1</li>
                                            <li data-value="2" className="option">2</li>
                                            <li data-value="1" className="option">3</li>
                                            <li data-value="2" className="option">4</li>
                                            <li data-value="1" className="option">5</li>
                                            <li data-value="2" className="option">6</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-add-property">
                    <h3>Property Features</h3>
                    <div className="property-form-group">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="pro-feature-add pl-0">
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-a" type="checkbox" name="check"/>
                                                    <label htmlFor="check-a">Air Conditioning</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-b" type="checkbox" name="check"/>
                                                    <label htmlFor="check-b">Swimming Pool</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-c" type="checkbox" name="check"/>
                                                    <label htmlFor="check-c">Central Heating</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-d" type="checkbox" name="check"/>
                                                    <label htmlFor="check-d">Laundry Room</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-e" type="checkbox" name="check"/>
                                                    <label htmlFor="check-e">Gym</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-g" type="checkbox" name="check"/>
                                                    <label htmlFor="check-g">Alarm</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-h" type="checkbox" name="check"/>
                                                    <label htmlFor="check-h">Window Covering</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-i" type="checkbox" name="check"/>
                                                    <label htmlFor="check-i">Refrigerator</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-j" type="checkbox" name="check"/>
                                                    <label htmlFor="check-j">TV Cable & WIFI</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input id="check-k" type="checkbox" name="check"/>
                                                    <label htmlFor="check-k">Microwave</label>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-add-property">
                    <h3>Contact Information</h3>
                    <div className="property-form-group">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <p>
                                    <label htmlFor="con-name">Name</label>
                                    <input type="text" placeholder="Enter Your Name" id="con-name" name="con-name"/>
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p>
                                    <label htmlFor="con-user">Username</label>
                                    <input type="text" placeholder="Enter Your Username" id="con-user" name="con-user"/>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <p className="no-mb first">
                                    <label htmlFor="con-email">Email</label>
                                    <input type="email" placeholder="Enter Your Email" id="con-email" name="con-email"/>
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p className="no-mb last">
                                    <label htmlFor="con-phn">Phone</label>
                                    <input type="text" placeholder="Enter Your Phone Number" id="con-phn" name="con-phn"/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="add-property-button pt-5">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="prperty-submit-button">
                                    <button type="submit">Submit Property</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

export default AddProperty
