import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
    const [formValues, setValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setFormErrors(validate(formValues));
        const noErrors = {};
        const err = validate(formValues);

        submitHandler(formValues, noErrors, err);

        // setValues(initialValues);
    }

    const validate = (values) => {
        const errors = {};

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (values.password !== values.repass) {
            errors.password = ('Password and ConfirmPassword dont\'t match!');
            errors.repass = ('Password and ConfirmPassword dont\'t match!');
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        } else if (values.password !== values.repass) {
            errors.password = ('Password and ConfirmPassword dont\'t match!');
            errors.repass = ('Password and ConfirmPassword dont\'t match!');
        }
        if (!values.repass) {
            errors.repass = "Password is required";
        } else if (values.repass.length < 4) {
            errors.repass = "Password must be more than 4 characters";
        } else if (values.repass.length > 10) {
            errors.repass = "Password cannot exceed more than 10 characters";
        } else if (values.password !== values.repass) {
            errors.password = ('Password and ConfirmPassword dont\'t match!');
            errors.repass = ('Password and ConfirmPassword dont\'t match!');
        }

        return errors;
    };

    return {
        formValues,
        onChange,
        onSubmit,
        formErrors,
    }
};