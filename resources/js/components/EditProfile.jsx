import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import UserLayout from "./UserLayout/UserLayout.jsx";


function EditProfile() {

    const validationSchema = Yup.object().shape({
        lastName: Yup.string().required("Full name is required"),
        address: Yup.string().required("Address is required"),
        phoneNumber: Yup.string().required("Phone number is required"),
        email: Yup.string().required("Email is required")
    });

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const formik = useFormik({
        initialValues: {
            lastName: "Clark",
            address: "302 Av Park, New York",
            phoneNumber: "(234) 0200 17813",
            email: "lisa@gmail.com"
        },
        onSubmit: (values) => {
            const formData = {
                ...values,
                photo: selectedPhoto,
            };
            console.log("Form submitted with values:", formData);
        }
    });

    return (
        <UserLayout>
            <div className="col-lg-4 col-md-6 col-xs-6 widget-boxed mt-33 mt-0 offset-lg-2 offset-md-3">
                <div className="widget-boxed-header">
                    <h4>Edit Profile</h4>
                </div>
                <div className="sidebar-widget author-widget2">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="contact-form">
                            <label htmlFor="photo">Profile Photo: </label>
                            <input
                                type="file"
                                accept="image/*"
                                id="photo"
                                name="photo"
                                onChange={(event) => {
                                    const file = event.target.files[0];
                                    setSelectedPhoto(file);
                                }}
                            />

                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                className="form-control input-custom input-full"
                                id="lastName"
                                name="lastName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                            />
                            {formik.touched.lastName && formik.errors.lastName && (
                                <div className="error-message">{formik.errors.fullName}</div>
                            )}
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                className="form-control input-custom input-full"
                                id="address"
                                name="address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                            />
                            {formik.touched.address && formik.errors.address && (
                                <div className="error-message">{formik.errors.address}</div>
                            )}
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input
                                type="text"
                                className="form-control input-custom input-full"
                                id="phoneNumber"
                                name="phoneNumber"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phoneNumber}
                            />
                            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                                <div className="error-message">{formik.errors.phoneNumber}</div>
                            )}
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="text"
                                className="form-control input-custom input-full"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="error-message">{formik.errors.email}</div>
                            )}

                        </div>
                        <div className="button-change">
                            <button type="submit" className="btn btn-primary btn-lg">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </UserLayout>
    );

}

export default EditProfile
