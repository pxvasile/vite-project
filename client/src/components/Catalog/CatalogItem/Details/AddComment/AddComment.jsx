import { useParams } from "react-router-dom";

import * as commentService from '../../../../../services/commentService';
import './AddComment.css';

export default function AddComment({
    setComments
}) {
    const { productId } = useParams();

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const createdComment = await commentService.create( //try catch
            productId,
            formData.get('username'),
            formData.get('comment')
        );

        setComments(state => [...state, createdComment]);
    }

    return (
        <>
            <form className="comment-form" onSubmit={addCommentHandler}>
                <h2>Add new comment:</h2>
                <input type="text" name="username" placeholder="Username..." />
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="comment-button" type="submit" value="Add Comment" />
            </form>
        </>
    )
}