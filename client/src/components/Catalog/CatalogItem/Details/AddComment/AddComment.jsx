import { useState } from 'react';

import * as commentService from '../../../../../services/commentService';
import './AddComment.css';

export default function AddComment({
    setComments
}) {

    const initialValues = {
        productId: '',
        username: '',
        comment: '',
    }

    const [values, setValues] = useState(initialValues);

    const onSubmit = (e) => {
        e.preventDefault();

        addCommentHandler(values);

        setValues(initialValues);
    }

    // const resetCommentHandler = () => {

    // }

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    }

    const addCommentHandler = async ({ username, comment }) => {
        const createdComment = await commentService.create( //try catch
            username,
            comment
        );

        setComments(state => [...state, createdComment]);
    }
    
    return (
        <>
            <form className="comment-form" onSubmit={onSubmit}>
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
                <input className="comment-button" type="submit"  value="Add Comment" />
            </form>
        </>
    )
}