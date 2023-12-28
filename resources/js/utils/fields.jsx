import { useField } from 'formik';


export const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <p>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </p>
    );
};

export const MyTextarea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <p>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
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
