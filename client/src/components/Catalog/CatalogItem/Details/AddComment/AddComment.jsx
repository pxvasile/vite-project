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

    // const [values, setValues] = useState(initialValues);

    // const onChangeHandler = (e) => {
    //     setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    // }

    return (
        <>
            <form className="comment-form" onSubmit={onSubmit}>
                <h2>Add new comment:</h2>
                {/* <input
                    type="text"
                    name="username"
                    placeholder="Username..."
                    value={values.username}
                    onChange={onChangeHandler}
                /> */}
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