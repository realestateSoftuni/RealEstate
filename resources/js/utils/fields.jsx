import { useField } from 'formik';


export const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

export const MyTextarea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <textarea className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

export  const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <input type="checkbox" label={props.label} {...field} {...props} />
            {children}
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
