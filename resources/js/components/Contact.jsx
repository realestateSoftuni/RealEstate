/*jshint esversion: 6 */
import GoogleMap from "./GoogleMapContactPage.jsx"
import ReCAPTCHA from "react-google-recaptcha";
import {useFormik} from "formik";
import * as Yup from "yup";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            subject: '',
            message: '',
            recaptcha: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('The field is Required!'),
            lastname: Yup.string().required('The field is Required!'),
            email: Yup.string().email('Invalid email address').required('The field is Required!'),
            subject: Yup.string().required('The field is Required!'),
            message: Yup.string().required('The field is Required!'),
            recaptcha: Yup.string().required('Please complete the ReCAPTCHA validation'),
        }),
        onSubmit: (values) => {
            console.log('Form submitted with values:', values);
        }
    });

    const handleRecaptchaChange = (value) => {
        // Set the ReCAPTCHA value to the formik state
        formik.setFieldValue('recaptcha', value);
        formik.setFieldTouched('recaptcha', true);
    };

    return (
        <section className="contact-us">
            <div className="container">
                <div className="property-location mb-5">
                    <h3>OUR LOCATION</h3>
                    <div className="divider-fade"></div>
                    <GoogleMap />
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <h3 className="mb-4">CONTACT US</h3>
                        <form id="contactform" className="contact-form" method="post" onSubmit={formik.handleSubmit}>
                            <div id="success" className="successform">
                                <p className="alert alert-success font-weight-bold" role="alert">Your message was sent successfully!</p>
                            </div>
                            <div id="error" className="errorform">
                                <p>Something went wrong, try refreshing and submitting the form again.</p>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control input-custom input-full" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} placeholder="First Name"/> {formik.touched.name && formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control input-custom input-full" name="lastname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} placeholder="Last Name"/>
                                {formik.touched.lastname && formik.errors.lastname ? <div style={{color: 'red'}}>{formik.errors.lastname}</div> : null}
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control input-custom input-full" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} placeholder="Email"/>
                                {formik.touched.email && formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control input-custom input-full" name="subject" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.subject} placeholder="Subject"/>
                                {formik.touched.subject && formik.errors.subject ? <div style={{color: 'red'}}>{formik.errors.subject}</div> : null}
                            </div>
                            <div className="form-group">
                                <textarea className="form-control textarea-custom input-full" id="ccomment" name="message" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message}  rows="8" placeholder="Message"/>
                                {formik.touched.message && formik.errors.message ? <div style={{color: 'red'}}>{formik.errors.message}</div> : null}
                            </div>
                            <ReCAPTCHA sitekey={"6LcpXxcpAAAAAN1PAdRCi8et9ohstzWg5YQXY6v9"} onChange={handleRecaptchaChange}/> {formik.touched.recaptcha && formik.errors.recaptcha ? <div>{formik.errors.recaptcha}</div> : null}
                            <button type="submit" id="submit-contact" className="btn btn-primary btn-lg">Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-4 col-md-12 bgc">
                        <div className="call-info">
                            <h3>CONTACT DETAILS</h3>
                            <p className="mb-5">Please find below contact details and contact us today!</p>
                            <ul>
                                <li>
                                    <div className="info">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <p className="in-p">95 South Park Ave, USA</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="info">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <p className="in-p">+456 875 369 208</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="info">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <p className="in-p ti">support@findhouses.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="info cll">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                        <p className="in-p ti">8:00 a.m - 9:00 p.m</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact
