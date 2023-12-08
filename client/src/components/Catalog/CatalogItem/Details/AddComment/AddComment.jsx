import { useMemo } from 'react';

import useForm from '../../../../../hooks/useForm';
import './AddComment.css';

export default function AddComment({
    addCommentHandler,
}) {

    const initialValues = useMemo(() => ({
        productId: '',
        username: '',
        comment: '',
    }), [])

    const { formValues, onChange, onSubmit } = useForm(addCommentHandler, initialValues);

    return (
        <>
            <form className="comment-form" onSubmit={onSubmit}>
                <h2>Add new comment:</h2>
                <textarea
                    name="comment"
                    placeholder="Comment......"
                    value={formValues.comment}
                    onChange={onChange}
                />
                <input className="comment-button" type="submit" value="Add Comment" />
            </form>
        </>
    )
}