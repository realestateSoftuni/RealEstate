import UserLayout from "../components/UserLayout/UserLayout.jsx";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyField, MyTextarea, MyTextInput } from "../utils/fields.jsx";
import { addPropertyValidations } from "../utils/validations.js";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import DropzoneComponent from "./DragDrop.jsx";

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
    property_type: false,
    size: false,
    floor: false,
    bedrooms: false,
    bathrooms: false,
}

const heatingTypes = ['Air Conditioning', 'Gas', 'Central heating']
const constructionTypes = ['Brick', 'Ganged Wall Form', 'Prefabricated', 'Panel-build']


function AddEditProperty() {
    const [isOpen, setIsOpen] = useState(openInitialState);
    const location = useLocation()
    const initialData = location.state.initialData
    const [dropdownValues, setDropdownValues] = useState(initialData);

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [parentImages, setParentImages] = useState([]);
    const [parentFloorPlans, setParentFloorPlans] = useState([]);
    const [propertyVideo, setPropertyVideo] = useState('');

    const handleFilesChange = (acceptedFiles, fileType) => {
        switch (fileType) {
            case ('image'):
                setParentImages(acceptedFiles);
                break;
            case ('floorPlans'):
                setParentFloorPlans(acceptedFiles);
                break;
        }
    };

    const navigate = useNavigate(); // Hook for navigation


    const submitHandler = async (values) => {
        console.log(values)
        setErrors({}); // Reset errors on new submission
        setSuccess(''); // Reset success message on new submission
        setIsLoading(true);
        values.images = parentImages;
        values.video = propertyVideo;
        values.floorPlans = parentFloorPlans;

        try {
            const response = await axios.post(`${window.Laravel.apiUrl}/api/add_property`, values, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response);
            setSuccess(response.data.message || 'Your property has been added successfully'); // Set success message
            setIsLoading(false);

            setTimeout(() => { // Redirect after 3 seconds
                navigate('/my-properties');
            }, 3000);
        } catch (error) {
            console.error('Error during adding property:', error);
            setIsLoading(false);
            if (error.response && error.response.status === 422) {
                console.log('Validation errors:', error.response.data.errors);
                setErrors(error.response.data.errors);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    };

    const renderError = field => {
        if (errors[field]) {
            const errorMessage = errors[field].join('\n');
            return <span style={{ color: 'red' }}>{errorMessage}</span>;
        }
    };


    const clickOpenHandler = (button) => {
        let newState = {...openInitialState, [button]: !isOpen[button]}
        setIsOpen(newState)
    }

    const valueHandler = (e, field, value) => {
        let newState = { ...dropdownValues, [field]: value}
        setDropdownValues(newState)
    }

    const imageMimes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    const imageNum = 10;
    const imageTitle = 'Click here or drop images to upload (max 10 images)';
    const floorNum = 3
    const plansTitle = 'Click here or drop floor plans images to upload (max 3 images)';

    function checkboxHandler(e, values) {
        if (e.target.checked) {
            values['features'].push(e.target.name)
        } else {
            let index = values['features'].indexOf(e.target.name);
            if (index !== -1) {
                values['features'].splice(index, 1);
            }
        }
    }

    return(
        <UserLayout>
            <div className="col-lg-9 col-md-12 col-xs-12 royal-add-property-area section_100 pl-0 user-dash2">
                <div className="single-add-property">
                    <h3>property Media</h3>
                    <div className="property-form-group">
                        <div className="row">
                            <h4>Property Photos</h4>
                            <div className="col-md-12">
                                <DropzoneComponent onFilesChange={handleFilesChange}
                                                   fileType='image'
                                                   fileMimes={imageMimes}
                                                   fileNumber={imageNum}
                                                   title={imageTitle}/>
                                {renderError('images')}
                            </div>
                        </div>
                    </div>
                    <div className="property-form-group">
                        <div className="row">
                            <h4>Property Video</h4>
                            <div className="col-md-12">
                                <p>
                                    <input className='text-input' onChange={(e) => setPropertyVideo(e.target.value)} name='video' type='text' placeholder='Enter your video URL'/>
                                </p>
                                {renderError('video')}
                            </div>

                        </div>
                    </div>
                    <div className="property-form-group">
                        <div className="row">
                            <h4>Property Floor Plans</h4>
                            <div className="col-md-12">
                                <DropzoneComponent onFilesChange={handleFilesChange}
                                                   fileType='floorPlans'
                                                   fileMimes={imageMimes}
                                                   fileNumber={floorNum}
                                                   title={plansTitle}/>
                                {renderError('floorPlans')}
                            </div>
                        </div>
                    </div>
                </div>
            <Formik
                initialValues= { initialData }
                validationSchema={ Yup.object(addPropertyValidations) }
                onSubmit={(values) => {
                    submitHandler(values);
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
                        <div className="row">
                            <div className="col-md-12">
                                <MyTextInput
                                    label="Property Title"
                                    name="title"
                                    type="text"
                                    placeholder="Enter your property title"
                                    className='text-input'
                                    value = {values.title}
                                />
                                {renderError('title')}
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
                                    value={values.description}
                                />
                                {renderError('description')}
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
                                    {renderError('status')}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 dropdown faq-drop" onClick={() => clickOpenHandler('property_type')}>
                                <div className="form-group categories">
                                    <div className={`nice-select form-control wide ${isOpen['property_type'] ? 'open' : ''}`} tabIndex="0"><span className="current">{dropdownValues['property_type']}</span>
                                        <ul className="list">
                                            {types.map((t) =>
                                                <li key={t} type='text' data-value={t} className="option" onClick={(e) => valueHandler(e, 'property_type', t)}>{t}</li>
                                            )}
                                        </ul>
                                    </div>
                                    <MyField
                                        name="property_type"
                                        type="text"
                                        id='property_type'
                                        setFieldValue={setFieldValue}
                                        value={dropdownValues['property_type']}
                                        values={values}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className='text-input select-hide'
                                    />
                                    {renderError('property_type')}
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
                                    {renderError('rooms')}
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
                                {renderError('price')}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <MyTextInput
                                    label="Area"
                                    name="square_feet"
                                    type="text"
                                    id='square_feet'
                                    placeholder="Sqft"
                                    className='text-input'
                                />
                                {renderError('square_feet')}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <MyTextInput
                                    label="Build"
                                    name="build"
                                    type="text"
                                    id='build'
                                    placeholder="Year"
                                    className='text-input'
                                />
                                {renderError('build')}
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
                                {renderError('address')}
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="City"
                                    name="city"
                                    type="text"
                                    placeholder="Enter Your City"
                                    className='text-input'
                                />
                                {renderError('city')}
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
                                {renderError('state')}
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="Country"
                                    name="country"
                                    type="text"
                                    placeholder="Enter Your Country"
                                    className='text-input'
                                />
                                {renderError('country')}
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
                                {renderError('latitude')}
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="Google Maps longitude"
                                    name="longitude"
                                    type="text"
                                    placeholder="Google Maps longitude"
                                    className='text-input'
                                />
                                {renderError('longitude')}
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
                                    <div className={`nice-select form-control wide ${isOpen.floor ? 'open' : ''}`} tabIndex="0"><span className="current">{dropdownValues.floor}</span>
                                        <ul className="list">
                                            {rooms.map((f) =>
                                                <li key={f} type='dropdown' data-value={f} className="option"  onClick={(e) => valueHandler(e,'floor', f)}>{f}</li>
                                            )}
                                        </ul>
                                    </div>
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
                                    {renderError('floor')}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                <div className="form-group categories" onClick={() => clickOpenHandler('bedrooms')}>
                                    <div className={`nice-select form-control wide ${isOpen.bedrooms ? 'open' : ''}`} tabIndex="0"><span className="current">{dropdownValues.bedrooms}</span>
                                        <ul className="list">
                                            {rooms.map((bed) =>
                                                <li key={bed} type='dropdown' data-value={bed} className="option"  onClick={(e) => valueHandler(e, 'bedrooms', bed)}>{bed}</li>
                                            )}
                                        </ul>
                                    </div>
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
                                    {renderError('bedrooms')}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                <div className="form-group categories" onClick={() => clickOpenHandler('bathrooms')}>
                                    <div className={`nice-select form-control wide ${isOpen.bathrooms ? 'open' : ''}`} tabIndex="0"><span className="current">{dropdownValues.bathrooms}</span>
                                        <ul className="list">
                                            {rooms.map((bath) =>
                                                <li key={bath} type='dropdown' data-value={bath} className="option"  onClick={(e) => valueHandler(e,'bathrooms', bath)}>{bath}</li>
                                            )}
                                        </ul>
                                    </div>
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
                                    {renderError('bathrooms')}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                <div className="form-group categories" onClick={() => clickOpenHandler('heating')}>
                                    <div className={`nice-select form-control wide ${isOpen.heating ? 'open' : ''}`} tabIndex="0"><span className="current">{dropdownValues.heating}</span>
                                        <ul className="list">
                                            {heatingTypes.map((h) =>
                                                <li key={h} type='dropdown' data-value={h} className="option"  onClick={(e) => valueHandler(e, 'heating', h)}>{h}</li>
                                            )}
                                        </ul>
                                    </div>
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
                                    {renderError('heating')}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 dropdown faq-drop">
                                <div className="form-group categories" onClick={() => clickOpenHandler('construction')}>
                                    <div className={`nice-select form-control wide ${isOpen.construction ? 'open' : ''}`} tabIndex="0"><span className="current">{dropdownValues.construction}</span>
                                        <ul className="list">
                                            {constructionTypes.map((c) =>
                                                <li key={c} type='dropdown' data-value={c} className="option"  onClick={(e) => valueHandler(e, 'construction', c)}>{c}</li>
                                            )}
                                        </ul>
                                    </div>
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
                                    {renderError('construction')}
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
                                                <input onClick={(e) => {checkboxHandler(e, values)}} id="check-a" type="checkbox" name="Air Conditioning"/>
                                                    <label htmlFor="check-a">Air Conditioning</label>
                                            </div>
                                            {/*<MyCheckbox*/}
                                            {/*    label="In construction"*/}
                                            {/*    name="inConstruction"*/}
                                            {/*    type="checkbox"*/}
                                            {/*    divClass='filter-tags-wrap'*/}
                                            {/*    id='inConstruction'*/}
                                            {/*/>*/}
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input onClick={(e) => {checkboxHandler(e, values)}} id="check-b" type="checkbox" name="Garage"/>
                                                <label htmlFor="check-b">Garage</label>
                                            </div>
                                            {/*<MyCheckbox*/}
                                            {/*    label="Garage"*/}
                                            {/*    name="garage"*/}
                                            {/*    type="checkbox"*/}
                                            {/*    divClass='filter-tags-wrap'*/}
                                            {/*    id='garage'*/}
                                            {/*/>*/}
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input onClick={(e) => {checkboxHandler(e, values)}} id="check-c" type="checkbox" name="Yard"/>
                                                <label htmlFor="check-c">Yard</label>
                                            </div>
                                            {/*<MyCheckbox*/}
                                            {/*    label="Yard"*/}
                                            {/*    name="yard"*/}
                                            {/*    type="checkbox"*/}
                                            {/*    divClass='filter-tags-wrap'*/}
                                            {/*    id='yard'*/}
                                            {/*/>*/}
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input onClick={(e) => {checkboxHandler(e, values)}} id="check-d" type="checkbox" name="Parking"/>
                                                <label htmlFor="check-d">Parking</label>
                                            </div>
                                            {/*<MyCheckbox*/}
                                            {/*    label="Parking"*/}
                                            {/*    name="parking"*/}
                                            {/*    type="checkbox"*/}
                                            {/*    divClass='filter-tags-wrap'*/}
                                            {/*    id='parking'*/}
                                            {/*/>*/}
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input onClick={(e) => {checkboxHandler(e, values)}} id="check-e" type="checkbox" name="Guard"/>
                                                <label htmlFor="check-e">Guard</label>
                                            </div>
                                            {/*<MyCheckbox*/}
                                            {/*    label="Guard"*/}
                                            {/*    name="guard"*/}
                                            {/*    type="checkbox"*/}
                                            {/*    divClass='filter-tags-wrap'*/}
                                            {/*    id='guard'*/}
                                            {/*/>*/}
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input onClick={(e) => {checkboxHandler(e, values)}} id="check-f" type="checkbox" name="Alarm"/>
                                                <label htmlFor="check-f">Alarm</label>
                                            </div>
                                            {/*<MyCheckbox*/}
                                            {/*    label="Alarm"*/}
                                            {/*    name="alarm"*/}
                                            {/*    type="checkbox"*/}
                                            {/*    divClass='filter-tags-wrap'*/}
                                            {/*    id='alarm'*/}
                                            {/*/>*/}
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input onClick={(e) => {checkboxHandler(e, values)}} id="check-g" type="checkbox" name="Furnished"/>
                                                <label htmlFor="check-g">Furnished</label>
                                            </div>
                                            {/*<MyCheckbox*/}
                                            {/*    label="Furnished"*/}
                                            {/*    name="furnished"*/}
                                            {/*    type="checkbox"*/}
                                            {/*    divClass='filter-tags-wrap'*/}
                                            {/*    id='furnished'*/}
                                            {/*/>*/}
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input onClick={(e) => {checkboxHandler(e, values)}} id="check-h" type="checkbox" name="Renovated"/>
                                                <label htmlFor="check-h">Renovated</label>
                                            </div>
                                            {/*<MyCheckbox*/}
                                            {/*    label="Renovated"*/}
                                            {/*    name="renovated"*/}
                                            {/*    type="checkbox"*/}
                                            {/*    divClass='filter-tags-wrap'*/}
                                            {/*    id='renovated'*/}
                                            {/*/>*/}
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input onClick={(e) => {checkboxHandler(e, values)}} id="check-i" type="checkbox" name="Swimming Pool"/>
                                                <label htmlFor="check-i">Swimming Pool</label>
                                            </div>
                                            {/*<MyCheckbox*/}
                                            {/*    label="Swimming Pool"*/}
                                            {/*    name="swimmingPool"*/}
                                            {/*    type="checkbox"*/}
                                            {/*    divClass='filter-tags-wrap'*/}
                                            {/*    id='swimmingPool'*/}
                                            {/*/>*/}
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input onClick={(e) => {checkboxHandler(e, values)}} id="check-j" type="checkbox" name="Gym"/>
                                                <label htmlFor="check-j">Gym</label>
                                            </div>
                                            {/*<MyCheckbox*/}
                                            {/*    label="Gym"*/}
                                            {/*    name="gym"*/}
                                            {/*    type="checkbox"*/}
                                            {/*    divClass='filter-tags-wrap'*/}
                                            {/*    id='gym'*/}
                                            {/*/>*/}
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input onClick={(e) => {checkboxHandler(e, values)}} id="check-k" type="checkbox" name="Window Covering"/>
                                                <label htmlFor="check-k">Window Covering</label>
                                            </div>
                                            {/*<MyCheckbox*/}
                                            {/*    label="Window Covering"*/}
                                            {/*    name="windowCovering"*/}
                                            {/*    type="checkbox"*/}
                                            {/*    divClass='filter-tags-wrap'*/}
                                            {/*    id='windowCovering'*/}
                                            {/*/>*/}
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <div className="filter-tags-wrap">
                                                <input onClick={(e) => {checkboxHandler(e, values)}} id="check-l" type="checkbox" name="TV Cable & WIFI"/>
                                                <label htmlFor="check-l">TV Cable & WIFI</label>
                                            </div>
                                            {/*<MyCheckbox*/}
                                            {/*    label="TV Cable & WIFI"*/}
                                            {/*    name="tv_wifi"*/}
                                            {/*    type="checkbox"*/}
                                            {/*    divClass='filter-tags-wrap'*/}
                                            {/*    id='tv_wifi'*/}
                                            {/*/>*/}
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
                                {renderError('name')}
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
                                {renderError('username')}
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
                                {renderError('email')}
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
                                {renderError('phone')}
                                {renderError('description')}
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
                    {renderError("images")}
                    {renderError("images.0")}
                </div>
            </Form>)}}
        </Formik>
            </div>
        </UserLayout>
    );
}

export default AddEditProperty
