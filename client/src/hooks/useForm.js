import { useState } from "react";
import Validation from "../utils/Validation";

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
        setErrors(Validation(values));
    };

    const onSubmit = (e) => {
        e.preventDefault();
  
        submitHandler(values);
        
        setValues(initialValues);
    }

    return{
        values,
        onChange,
        onSubmit,
        errors
    }
};