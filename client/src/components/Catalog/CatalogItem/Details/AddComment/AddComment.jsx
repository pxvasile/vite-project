import { useState } from 'react';

import './AddComment.css';

export default function AddComment({
    onSubmit,
}) {

    const initialValues = {
        productId: '',
        username: '',
        comment: '',
    }

    const [values, setValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    return (
        <>
            <form className="comment-form" onSubmit={(e) => onSubmit(e, values)}>
                <h2>Add new comment:</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Username..."
                    value={values.username}
                    onChange={onChangeHandler}
                />
                <textarea
                    name="comment"
                    placeholder="Comment......"
                    value={values.comment}
                    onChange={onChangeHandler}
                />
                <input className="comment-button" type="submit" value="Add Comment" />
            </form>
        </>
    )
}