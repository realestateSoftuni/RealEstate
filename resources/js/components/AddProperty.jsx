import UserLayout from "../components/UserLayout/UserLayout.jsx";
import {useState} from "react";
import {Form, Formik, useFormik} from "formik";
import * as Yup from "yup";
import {MyCheckbox, MySelect, MyTextarea, MyTextInput} from "@/utils/fields.jsx";
import {addPropertyValidations} from "@/utils/validations.js";

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

const fieldsState = {
    title: '',
    description: '',
    status: 'Status',
    type: 'Type',
    rooms: 'Size',
    price: '',
    area: '',
    build: '',
    address: '',
    city: '',
    state: '',
    country: '',
    latitude: '',
    longitude: '',
    floor: 'Floor',
    bedrooms: 'Bedrooms',
    bathrooms: 'Bathrooms',
    airConditioning: false,
    swimmingPool: false,
    centralHeating: false,
    laundryRoom: false,
    gym: false,
    alarm: false,
    windowCovering: false,
    refrigerator: false,
    tv_wifi: false,
    microwave: false,
    name: '',
    username: '',
    email: '',
    phone: '',
}

function AddProperty() {
    const [isOpen, setIsOpen] = useState(openInitialState);
    const [initialValues, setInitialValues] = useState(fieldsState);

    const clickOpenHandler = (button) => {
        let newState = {...openInitialState, [button]: !isOpen[button]}
        setIsOpen(newState)
    }

    const valueHandler = (e, field, value) => {
        let newValue = '';
        let fieldName = '';

        switch (e.target.type) {
            case 'dropdown':
                newValue = value;
                fieldName = field;
                break;
            case 'checkbox':
                fieldName = e.target.name;
                newValue = e.target.checked;
                break;
            default:
                newValue = e.target.value;
                fieldName = e.target.name;
                break;
        }
        let newState = { ...initialValues, [fieldName]: newValue}
        setInitialValues(newState)
    }

    return(
        <UserLayout>
            <div className="col-lg-9 col-md-12 col-xs-12 royal-add-property-area section_100 pl-0 user-dash2">
            <Formik
                initialValues={fieldsState}
                validationSchema={Yup.object(addPropertyValidations)}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('submitted')
                    setSubmitting(false);
                }}
            >
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
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-12 dropdown faq-drop" onClick={() => clickOpenHandler('status')}>
                                    <div className="form-group categories">
                                        <MySelect name="status" divClass='nice-select form-control wide'>
                                            <option value='rent' className='option'>Rent</option>
                                        </MySelect>
                                        {/*<div className={`nice-select form-control wide ${isOpen.status ? 'open' : ''}`} tabIndex="0"><span className="current">{initialValues.status}</span>*/}
                                        {/*    <ul className="list">*/}
                                        {/*        <li type='dropdown' data-value="1" className="option" onClick={(e) => valueHandler(e, 'status', 'Rent')}>Rent</li>*/}
                                        {/*        <li type='dropdown' data-value="2" className="option" onClick={(e) => valueHandler(e, 'status', 'Sale')}>Sale</li>*/}
                                        {/*    </ul>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 dropdown faq-drop" onClick={() => clickOpenHandler('type')}>
                                    <div className="form-group categories">
                                        <div className={`nice-select form-control wide ${isOpen.type ? 'open' : ''}`} tabIndex="0"><span className="current">{initialValues.type}</span>
                                            <ul className="list">
                                                {types.map((t) =>
                                                    <li key={t} type='dropdown' data-value={t} className="option" onClick={(e) => valueHandler(e, 'type', t)}>{t}</li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 dropdown faq-drop" onClick={() => clickOpenHandler('rooms')}>
                                    <div className="form-group categories">
                                        <div className={`nice-select form-control wide ${isOpen.rooms ? 'open' : ''}`} tabIndex="0"><span className="current">{initialValues.rooms}</span>
                                            <ul className="list">
                                                {rooms.map((s) =>
                                                    <li key={s} type='dropdown' data-value={s} className="option" onClick={(e) => valueHandler(e, 'rooms', s)}>{s}</li>
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
                                        <input type="text" name="price" onChange={(e) => valueHandler(e)} placeholder="USD" id="price"/>
                                    </p>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <p className="no-mb last">
                                        <label htmlFor="area">Area</label>
                                        <input type="text" name="area" onChange={(e) => valueHandler(e)} placeholder="Sqft" id="area"/>
                                    </p>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <p className="no-mb">
                                        <label htmlFor="price">Build</label>
                                        <input type="text" name="year" onChange={(e) => valueHandler(e)} placeholder="Year" id="price"/>
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
                                />
                                {/*<p>*/}
                                {/*    <label htmlFor="address">Address</label>*/}
                                {/*    <input type="text" name="address" onChange={(e) => valueHandler(e)} placeholder="Enter Your Address" id="address"/>*/}
                                {/*</p>*/}
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="City"
                                    name="city"
                                    type="text"
                                    placeholder="Enter Your City"
                                />
                                {/*<p>*/}
                                {/*    <label htmlFor="city">City</label>*/}
                                {/*    <input type="text" name="city" onChange={(e) => valueHandler(e)} placeholder="Enter Your City" id="city"/>*/}
                                {/*</p>*/}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="State"
                                    name="state"
                                    type="text"
                                    placeholder="Enter Your State"
                                />
                                {/*<p>*/}
                                {/*    <label htmlFor="state">State</label>*/}
                                {/*    <input type="text" name="state" onChange={(e) => valueHandler(e)} placeholder="Enter Your State" id="state"/>*/}
                                {/*</p>*/}
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="Country"
                                    name="country"
                                    type="text"
                                    placeholder="Enter Your Country"
                                />
                                {/*<p>*/}
                                {/*    <label htmlFor="country">Country</label>*/}
                                {/*    <input type="text" name="country" onChange={(e) => valueHandler(e)} placeholder="Enter Your Country" id="country"/>*/}
                                {/*</p>*/}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="Google Maps latitude"
                                    name="latitude"
                                    type="text"
                                    placeholder="Google Maps latitude"
                                />
                                {/*<p className="no-mb first">*/}
                                {/*    <label htmlFor="latitude">Google Maps latitude</label>*/}
                                {/*    <input type="text" name="latitude" onChange={(e) => valueHandler(e)} placeholder="Google Maps latitude" id="latitude"/>*/}
                                {/*</p>*/}
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <MyTextInput
                                    label="Google Maps longitude"
                                    name="longitude"
                                    type="text"
                                    placeholder="Google Maps longitude"
                                />
                                {/*<p className="no-mb last">*/}
                                {/*    <label htmlFor="longitude">Google Maps longitude</label>*/}
                                {/*    <input type="text" name="longitude" onChange={(e) => valueHandler(e)} placeholder="Google Maps longitude" id="longitude"/>*/}
                                {/*</p>*/}
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
                                    <div className={`nice-select form-control wide ${isOpen.floor ? 'open' : ''}`} tabIndex="0"><span className="current">{initialValues.floor}</span>
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
                                    <div className={`nice-select form-control wide ${isOpen.bedrooms ? 'open' : ''}`} tabIndex="0"><span className="current">{initialValues.bedrooms}</span>
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
                                    <div className={`nice-select form-control wide ${isOpen.bathrooms ? 'open' : ''}`} tabIndex="0"><span className="current">{initialValues.bathrooms}</span>
                                        <ul className="list">
                                            {rooms.map((bath) =>
                                                <li key={bath} type='dropdown' data-value={bath} className="option"  onClick={(e) => valueHandler(e,'bathrooms', bath)}>{bath}</li>
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
                                                label="Air Conditioning"
                                                name="airConditioning"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='airConditioning'
                                            />
                                            {/*<div className="filter-tags-wrap">*/}
                                            {/*    <input id="check-a" type="checkbox" name="airConditioning" onChange={(e) => valueHandler(e)} />*/}
                                            {/*        <label htmlFor="check-a">Air Conditioning</label>*/}
                                            {/*</div>*/}
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
                                            {/*<div className="filter-tags-wrap">*/}
                                            {/*    <input id="check-b" type="checkbox" name="swimmingPool" onChange={(e) => valueHandler(e)} />*/}
                                            {/*        <label htmlFor="check-b">Swimming Pool</label>*/}
                                            {/*</div>*/}
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <MyCheckbox
                                                label="Central Heating"
                                                name="centralHeating"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='centralHeating'
                                            />
                                            {/*<div className="filter-tags-wrap">*/}
                                            {/*    <input id="check-c" type="checkbox" name="centralHeating" onChange={(e) => valueHandler(e)} />*/}
                                            {/*        <label htmlFor="check-c">Central Heating</label>*/}
                                            {/*</div>*/}
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <MyCheckbox
                                                label="Laundry Room"
                                                name="laundryRoom"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='laundryRoom'
                                            />
                                            {/*<div className="filter-tags-wrap">*/}
                                            {/*    <input id="check-d" type="checkbox" name="laundryRoom" onChange={(e) => valueHandler(e)} />*/}
                                            {/*        <label htmlFor="check-d">Laundry Room</label>*/}
                                            {/*</div>*/}
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
                                            {/*<div className="filter-tags-wrap">*/}
                                            {/*    <input id="check-e" type="checkbox" name="gym" onChange={(e) => valueHandler(e)} />*/}
                                            {/*        <label htmlFor="check-e">Gym</label>*/}
                                            {/*</div>*/}
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
                                            {/*<div className="filter-tags-wrap">*/}
                                            {/*    <input id="check-g" type="checkbox" name="alarm" onChange={(e) => valueHandler(e)} />*/}
                                            {/*        <label htmlFor="check-g">Alarm</label>*/}
                                            {/*</div>*/}
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
                                            {/*<div className="filter-tags-wrap">*/}
                                            {/*    <input id="check-h" type="checkbox" name="windowCovering" onChange={(e) => valueHandler(e)} />*/}
                                            {/*        <label htmlFor="check-h">Window Covering</label>*/}
                                            {/*</div>*/}
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <MyCheckbox
                                                label="Refrigerator"
                                                name="refrigerator"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='refrigerator'
                                            />
                                            {/*<div className="filter-tags-wrap">*/}
                                            {/*    <input id="check-i" type="checkbox" name="refrigerator" onChange={(e) => valueHandler(e)} />*/}
                                            {/*        <label htmlFor="check-i">Refrigerator</label>*/}
                                            {/*</div>*/}
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
                                            {/*<div className="filter-tags-wrap">*/}
                                            {/*    <input id="check-j" type="checkbox" name="tv_wifi" onChange={(e) => valueHandler(e)} />*/}
                                            {/*        <label htmlFor="check-j">TV Cable & WIFI</label>*/}
                                            {/*</div>*/}
                                        </div>
                                    </li>
                                    <li className="fl-wrap filter-tags clearfix">
                                        <div className="checkboxes float-left">
                                            <MyCheckbox
                                                label="Microwave"
                                                name="microwave"
                                                type="checkbox"
                                                divClass='filter-tags-wrap'
                                                id='microwave'
                                            />
                                            {/*<div className="filter-tags-wrap">*/}
                                            {/*    <input id="check-k" type="checkbox" name="microwave" onChange={(e) => valueHandler(e)} />*/}
                                            {/*        <label htmlFor="check-k">Microwave</label>*/}
                                            {/*</div>*/}
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
                                    <input type="text" placeholder="Enter Your Name" id="con-name" name="name" onChange={(e) => valueHandler(e)} />
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p>
                                    <label htmlFor="con-user">Username</label>
                                    <input type="text" placeholder="Enter Your Username" id="con-user" name="username" onChange={(e) => valueHandler(e)} />
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <p className="no-mb first">
                                    <label htmlFor="con-email">Email</label>
                                    <input type="email" placeholder="Enter Your Email" id="con-email" name="email" onChange={(e) => valueHandler(e)} />
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p className="no-mb last">
                                    <label htmlFor="con-phn">Phone</label>
                                    <input type="text" placeholder="Enter Your Phone Number" id="con-phn" name="phone" onChange={(e) => valueHandler(e)} />
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
            </Form>
        </Formik>
            </div>
        </UserLayout>
    );
}

export default AddProperty
