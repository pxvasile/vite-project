import './AddComment.css';

export default function AddComment() {
    return(
        <>
                 {/* Bonus
             Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
             <form className="comment-form">
                <h2>Add new comment:</h2>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="comment-button" type="submit" value="Add Comment"  />
             </form>
        </>
    )
}