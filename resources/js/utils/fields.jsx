import { useField } from 'formik';
import {useEffect} from "react";


export const MyTextInput = ({ label, ...props }, className) => {
    const [field, meta] = useField(props);
    return (
        <p>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className={className} {...field} {...props} />
            {meta.touched && meta.error ? (
                <span className="error">{meta.error}</span>
            ) : null}
        </p>
    );
};

export const MyField = props => {
    const [field, meta] = useField(props);
    useEffect(() => {
        props.setFieldValue(props.name, props.value);
    }, [props.value]);

    return (
        <>
            <input
                id={props.id}
                type="text"
                name={props.name}
                value={props.values[props.name]}
                className={props.className}
            />
            {meta.touched && meta.error ? (
                <span className="error">{meta.error}</span>
            ) : null}
        </>
    );
};

export const MyTextarea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <p>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <span className="error">{meta.error}</span>
            ) : null}
        </p>
    );
};

export  const MyCheckbox = ({divClass, label, children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div className={divClass}>

            <input type="checkbox" label={props.label} {...field} {...props} />
            {children}
            <label className="checkbox-input" htmlFor={props.id || props.name}>{label}</label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export  const MySelect = ({ divClass, selectClass, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={divClass}>
            <select className={selectClass} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};
