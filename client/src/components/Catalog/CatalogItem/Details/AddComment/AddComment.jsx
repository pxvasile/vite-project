import { useParams } from "react-router-dom";
import { useState } from 'react';

import * as commentService from '../../../../../services/commentService';
import './AddComment.css';

export default function AddComment({
    setComments
}) {
    const { productId } = useParams();

    const [values, setValues] = useState({
        productId: '',
        username: '',
        comment: '',
    });

    const addCommentHandler = async (values) => {

        const formData = new FormData(values.currentTarget);

        const createdComment = await commentService.create( //try catch
            productId,
            formData.get('username'),
            formData.get('comment')
        );

        setComments(state => [...state, createdComment]);
    }

    const onChangeHandler = (e) => {
        e.preventDefault();

        setValues(state => ({...state, [e.target.name]: e.target.value}));
    }

    return (
        <>
            <form className="comment-form" onSubmit={addCommentHandler}>
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