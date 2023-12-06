import { useState, useEffect, useReducer, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import * as productService from '../../../../services/productService';
import * as commentService from '../../../../services/commentService';

import AuthContext from '../../../../contexts/authContext';
import AddComment from "./AddComment/AddComment";
import reducer from './AddComment/commentReducer';
import './ProductDetailsInfo.css';

export default function ProductDetailsInfo() {
    const { username, userId } = useContext(AuthContext);
    const { productId } = useParams();
    // const [comments, setComments] = useState([]);
    const [comments, dispatch] = useReducer(reducer, []);
    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        productService.getOne(productId)
            .then(setProductDetails);
        commentService.getAll(productId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });
    }, [productId]);

    const addCommentHandler = async (values) => {
        values.productId = productDetails._id;
        values.username = username;
        const newComment = await commentService.create(values);
        // newComment.username = username;
        // setComments(state => ([...state, values]));
        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment,
        });
    };

    return (
        <>
            <section id="product-details">
                <h1>Product Details</h1>
                <div className="info-section">
                    <div className="product-header">
                        <img className="product-img" src={productDetails.imageUrl} />
                        <h1>{productDetails.productName}</h1>
                        <span className="material">MATERIAL</span>
                        <p className="type">{productDetails.material}</p>
                        <span className="material">PRICE</span>
                        <p className="type">${productDetails.price}</p>
                    </div>
                    <p className="text">
                      {productDetails.productDetails}
                    </p>

                    {userId === productDetails._ownerId && (<div className="buttons">
                        <Link to={`/catalog/${productId}/edit`} className="button">Edit</Link>
                        <Link to={`/catalog/${productId}/delete`} className="button">Delete</Link>
                    </div>)}
                </div>
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, username, comment }) => (
                            <li key={_id} className="comment">
                                <p>{username}: {comment}</p>
                            </li>
                        ))}
                    </ul>
                    {comments.length === 0 && (
                        <p className="no-comment">No comments yet!</p>
                    )}
                </div>
            </section>
            <AddComment addCommentHandler={addCommentHandler} />
        </>
    )
}