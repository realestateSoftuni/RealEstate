import * as Yup from 'yup';

export const addPropertyValidations={
    name: Yup.string()
        .max(20, 'Name should not be more than 20 characters')
        .min(2, 'Name should be at least 2 characters')
        .required('Required'),
    username: Yup.string()
        .max(20, 'Username should not be more than 20 characters')
        .min(4, 'Username should be at least 4 characters')
        .required('Required'),
    price: Yup.number()
        .min(0, 'Price should be a positive number')
        .required('Required'),
    square_feet: Yup.number()
        .min(0, 'Area should be a positive number')
        .required('Required'),
    city: Yup.string()
        .required('Required'),
    country: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    title: Yup.string()
        .max(100, 'Title should not be more than 100 characters')
        .min(4, 'Title should be at least 4 characters')
        .required('Required'),
    description: Yup.string()
        .max(900, 'Description should not be more than 900 characters'),
    // property_type: Yup.string()
    //     .transform((originalValue) => {
    //         return originalValue === 'Type' ? undefined : originalValue;
    //     })
    //     .required('Required'),
    // rooms: Yup.string()
    //     .transform((originalValue) => {
    //         return originalValue === 'Size' ? undefined : originalValue;
    //     })
    //     .required('Required'),
    // status: Yup.string()
    //     .transform((originalValue) => {
    //         return originalValue === 'Status' ? undefined : originalValue;
    //     })
    //     .required('This field is required'),
};

export const ContactUs = {
    name: Yup.string()
        .required('The field is Required!'),
    lastname: Yup.string()
        .required('The field is Required!'),
    email: Yup.string()
        .email('Invalid email address')
        .required('The field is Required!'),
    subject: Yup.string()
        .required('The field is Required!'),
    message: Yup.string()
        .required('The field is Required!'),
    recaptcha: Yup.string()
        .required('Please complete the ReCAPTCHA validation'),
}
