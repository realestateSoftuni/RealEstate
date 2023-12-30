import UserLayout from "../components/UserLayout/UserLayout.jsx";
import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {MyCheckbox, MyField, MyTextarea, MyTextInput} from "../utils/fields.jsx";
import {addPropertyValidations} from "../utils/validations.js";

const types = ['House', 'Apartment', 'Commercial', 'Lot', 'Garage']
const rooms = []

for (let i = 1; i < 7; i++ ) {
    rooms.push(i)
}

const floors = []

for (let i = 1; i < 11; i++ ) {
    floors.push(i)
}

const openInitialState = {
    status: false,
    type: false,
    size: false,
    floor: false,
    bedrooms: false,
    bathrooms: false,
}

const heatingTypes = ['Air Conditioning', 'Gas', 'Central heating']
const constructionTypes = ['Brick', 'Ganged Wall Form', 'Prefabricated', 'Panel-build']

const dropdownFields = {
    status: 'Status',
    type: 'Type',
    rooms: 'Size',
    floor: 'Floor',
    construction: 'Construction Type',
    bedrooms: 'Bedrooms',
    bathrooms: 'Bathrooms',
    heating: 'Heating',
}

const fieldsState = {
    title: '',
    description: '',
    status: '',
    type: '',
    rooms: '',
    price: '',
    area: '',
    build: '',
    address: '',
    city: '',
    state: '',
    country: '',
    latitude: '',
    longitude: '',
    floor: '',
    construction: '',
    bedrooms: '',
    bathrooms: '',
    heating: '',
    inConstruction: false,
    garage: false,
    swimmingPool: false,
    furnished: false,
    parking: false,
    gym: false,
    alarm: false,
    windowCovering: false,
    guard: false,
    tv_wifi: false,
    renovated: false,
    yard: false,
    name: '',
    username: '',
    email: '',
    phone: '',
}

function AddProperty() {
    const [isOpen, setIsOpen] = useState(openInitialState);
    const [dropdownValues, setDropdownValues] = useState(dropdownFields);


    const clickOpenHandler = (button) => {
        let newState = {...openInitialState, [button]: !isOpen[button]}
        setIsOpen(newState)
    }

    const valueHandler = (e, field, value) => {
        let newState = { ...dropdownValues, [field]: value}
        setDropdownValues(newState)
    }

    return(
        <UserLayout>
            <div className="col-lg-9 col-md-12 col-xs-12 royal-add-property-area section_100 pl-0 user-dash2">
            <Formik
                initialValues={fieldsState}
                validationSchema={Yup.object(addPropertyValidations)}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    setSubmitting(false);
                }}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        setFieldValue
                    } = props;
            return(
                <Form>
                <div className="single-add-property">
                    <h3>Property description and price</h3>
                    <div className="property-form-group">
                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <MyTextInput
                                        label="Property Title"
                                        name="title"
                                        type="text"
                                        placeholder="Enter your property title"
                                        className='text-input'
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <MyTextarea
                                        label="Property Description"
                                        name="description"
                                        type="textarea"
                                        placeholder="Describe about your property"
                                        className='text-input'
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-12 dropdown faq-drop" onClick={() => clickOpenHandler('status')}>
                                    <div className="form-group categories">
                                        <div className={`nice-select form-control wide ${isOpen.status ? 'open' : ''}`} tabIndex="0"><span className="current">{dropdownValues.status}</span>
                                            <ul className="list">
                                                <li type='dropdown' data-value="1" className="option"
                                                    onClick={(e) => valueHandler(e, 'status', 'Rent')}>Rent</li>
                                                <li type='dropdown' data-value="2" className="option" onClick={(e) => valueHandler(e, 'status', 'Sale')}>Sale</li>
                                            </ul>
                                        </div>
                                        <MyField
                                            name="status"
                                            id='status'
                                            type="text"
                                            setFieldValue={setFieldValue}
                                            value={dropdownValues.status}
                                            values={values}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className='text-input select-hide'
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 dropdown faq-drop" onClick={() => clickOpenHandler('type')}>
                                    <div className="form-group categories">
                                        <div className={`nice-select form-control wide ${isOpen.type ? 'open' : ''}`} tabIndex="0"><span className="current">{dropdownValues.type}</span>
                                            <ul className="list">
                                                {types.map((t) =>
                                                    <li key={t} type='dropdown' data-value={t} className="option" onClick={(e) => valueHandler(e, 'type', t)}>{t}</li>
                                                )}
                                            </ul>
                                        </div>
                                        <MyField
                                            name="type"
                                            type="text"
                                            id='type'
                                            setFieldValue={setFieldValue}
                                            value={dropdownValues.type}
                                            values={values}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className='text-input select-hide'
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 dropdown faq-drop" onClick={() => clickOpenHandler('rooms')}>
                                    <div className="form-group categories">
                                        <div className={`nice-select form-control wide ${isOpen.rooms ? 'open' : ''}`} tabIndex="0"><span className="current">{dropdownValues.rooms}</span>
                                            <ul className="list">
                                                {rooms.map((s) =>
                                                    <li key={s} type='dropdown' data-value={s} className="option" onClick={(e) => valueHandler(e, 'rooms', s)}>{s}</li>
                                                )}
                                            </ul>
                                        </div>
                                        <MyField
                                            name="rooms"
                                            type="text"
                                            id='rooms'
                                            setFieldValue={setFieldValue}
                                            value={dropdownValues.rooms}
                                            values={values}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className='text-input select-hide'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <MyTextInput
                                        label="Price"
                                        name="price"
                                        type="text"
                                        id='price'
                                        placeholder="USD"
                                        className='text-input'
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <MyTextInput
                                        label="Area"
                                        name="area"
                                        type="text"
                                        id='area'
                                        placeholder="Sqft"
                                        className='text-input'
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <MyTextInput
                                        label="Build"
                                        name="year"
                                        type="text"
                                        id='year'
                                        placeholder="Year"
                                        className='text-input'
                                    />
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
                                <form action="/file-upload" className="dropzone">
                                    <div className='dz-default dz-message'><span><i className='fa fa-cloud-upload'></i> Click here or drop files to upload</span></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-add-property">
                    <h3>property Location</h3>
                    <div className="property-form-group">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="Address"
                                    name="address"
                                    type="text"
                                    placeholder="Enter Your Address"
                                    className='text-input'
                                />
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="City"
                                    name="city"
                                    type="text"
                                    placeholder="Enter Your City"
                                    className='text-input'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="State"
                                    name="state"
                                    type="text"
                                    placeholder="Enter Your State"
                                    className='text-input'
                                />
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="Country"
                                    name="country"
                                    type="text"
                                    placeholder="Enter Your Country"
                                    className='text-input'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="Google Maps latitude"
                                    name="latitude"
                                    type="text"
                                    placeholder="Google Maps latitude"
                                    className='text-input'
                                />
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="Google Maps longitude"
                                    name="longitude"
                                    type="text"
                                    placeholder="Google Maps longitude"
                                    className='text-input'
                                />
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
                                    <MyField
                                        name="floor"
                                        type="text"
                                        id='floor'
                                        setFieldValue={setFieldValue}
                                        value={dropdownValues.floor}
                                        values={values}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className='text-input select-hide'
                                    />
                                    <div className={`nice-select form-control wide ${isOpen.floor ? 'open' : ''}`} tabIndex="0"><span className="current">{dropdownValues.floor}</span>
                                        <ul className="list">
                                            {rooms.map((f) =>
                                                <li key={f} type='dropdown' data-value={f} className="option"  onClick={(e) => valueHandler(e,'floor', f)}>{f}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                <div className="form-group categories" onClick={() => clickOpenHandler('bedrooms')}>
                                    <MyField
                                        name="bedrooms"
                                        type="text"
                                        id='bedrooms'
                                        setFieldValue={setFieldValue}
                                        value={dropdownValues.bedrooms}
                                        values={values}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className='text-input select-hide'
                                    />
                                    <div className={`nice-select form-control wide ${isOpen.bedrooms ? 'open' : ''}`} tabIndex="0"><span className="current">{dropdownValues.bedrooms}</span>
                                        <ul className="list">
                                            {rooms.map((bed) =>
                                                <li key={bed} type='dropdown' data-value={bed} className="option"  onClick={(e) => valueHandler(e, 'bedrooms', bed)}>{bed}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                <div className="form-group categories" onClick={() => clickOpenHandler('bathrooms')}>
                                    <MyField
                                        name="bathrooms"
                                        type="text"
                                        id='bathrooms'
                                        setFieldValue={setFieldValue}
                                        value={dropdownValues.bathrooms}
                                        values={values}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className='text-input select-hide'
                                    />
                                    <div className={`nice-select form-control wide ${isOpen.bathrooms ? 'open' : ''}`} tabIndex="0"><span className="current">{dropdownValues.bathrooms}</span>
                                        <ul className="list">
                                            {rooms.map((bath) =>
                                                <li key={bath} type='dropdown' data-value={bath} className="option"  onClick={(e) => valueHandler(e,'bathrooms', bath)}>{bath}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                <div className="form-group categories" onClick={() => clickOpenHandler('heating')}>
                                    <MyField
                                        name="heating"
                                        type="text"
                                        id='heating'
                                        setFieldValue={setFieldValue}
                                        value={dropdownValues.heating}
                                        values={values}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className='text-input select-hide'
                                    />
                                    <div className={`nice-select form-control wide ${isOpen.heating ? 'open' : ''}`} tabIndex="0"><span className="current">{dropdownValues.heating}</span>
                                        <ul className="list">
                                            {heatingTypes.map((h) =>
                                                <li key={h} type='dropdown' data-value={h} className="option"  onClick={(e) => valueHandler(e, 'heating', h)}>{h}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                <div className="form-group categories" onClick={() => clickOpenHandler('construction')}>
                                    <MyField
                                        name="construction"
                                        type="text"
                                        id='construction'
                                        setFieldValue={setFieldValue}
                                        value={dropdownValues.construction}
                                        values={values}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className='text-input select-hide'
                                    />
                                    <div className={`nice-select form-control wide ${isOpen.construction ? 'open' : ''}`} tabIndex="0"><span className="current">{dropdownValues.construction}</span>
                                        <ul className="list">
                                            {constructionTypes.map((c) =>
                                                <li key={c} type='dropdown' data-value={c} className="option"  onClick={(e) => valueHandler(e, 'construction', c)}>{c}</li>
                                            )}
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
                                            <MyCheckbox
                                                label="In construction"
                                                name="inConstruction"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='inConstruction'
                                            />
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <MyCheckbox
                                                label="Garage"
                                                name="garage"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='garage'
                                            />
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <MyCheckbox
                                                label="Yard"
                                                name="yard"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='yard'
                                            />
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <MyCheckbox
                                                label="Parking"
                                                name="parking"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='parking'
                                            />
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <MyCheckbox
                                                label="Guard"
                                                name="guard"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='guard'
                                            />
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <MyCheckbox
                                                label="Alarm"
                                                name="alarm"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='alarm'
                                            />
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <MyCheckbox
                                                label="Furnished"
                                                name="furnished"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='furnished'
                                            />
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <MyCheckbox
                                                label="Renovated"
                                                name="renovated"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='renovated'
                                            />
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <MyCheckbox
                                                label="Swimming Pool"
                                                name="swimmingPool"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='swimmingPool'
                                            />
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <MyCheckbox
                                                label="Gym"
                                                name="gym"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='gym'
                                            />
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <MyCheckbox
                                                label="Window Covering"
                                                name="windowCovering"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='windowCovering'
                                            />
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <MyCheckbox
                                                label="TV Cable & WIFI"
                                                name="tv_wifi"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='tv_wifi'
                                            />
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
                                <MyTextInput
                                    label="Name"
                                    name="name"
                                    type="text"
                                    id="name"
                                    placeholder="Enter Your Name"
                                    className='text-input'
                                />
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="Username"
                                    name="username"
                                    type="text"
                                    id="username"
                                    placeholder="Enter Your Username"
                                    className='text-input'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    className='text-input'
                                />
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="Phone"
                                    name="phone"
                                    type="text"
                                    id="phone"
                                    placeholder="Enter Your Phone Number"
                                    className='text-input'
                                />
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
            </Form>);}}
        </Formik>
            </div>
        </UserLayout>
    );
}

export default AddProperty
