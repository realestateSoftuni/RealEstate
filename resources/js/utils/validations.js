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
    // password: Yup.string()
    //     .min(6, 'Password should be at least 6 characters')
    //     .max(15, 'Username should not be more than 15 characters')
    //     .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    // confirmPassword: Yup.string()
    //     .oneOf([Yup.ref('password'), null], "The value should match the Password field value")
    //     .required('Required'),
};
