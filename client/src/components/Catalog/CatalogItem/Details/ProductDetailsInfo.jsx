import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import * as productService from '../../../../services/productService';

import './ProductDetailsInfo.css';
import AddComment from "./AddComment/AddComment";

export default function ProductDetailsInfo() {
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        productService.getOne(productId)
            .then(result => setProductDetails(result));
    }, [productId]);

    return (
        <>
            <section id="product-details">
                <h1>Product Details</h1>
                <div className="info-section">

                    <div className="product-header">
                        <img className="product-img" src={productDetails.imageUrl} />
                        <h1>{productDetails.productName}</h1>
                        <span className="material">Material</span>
                        <p className="type">{productDetails.material}</p>
                    </div>

                    <p className="text">
                        Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work
                        with an Orc to find a weapon everyone is prepared to kill for. Set in a world where fantasy
                        creatures live side by side with humans. A human cop is forced
                        to work with an Orc to find a weapon everyone is prepared to kill for.
                    </p>

            {/* Bonus ( for Guests and Users ) */}
                    <div className="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                    {/* list all comments for current game (If any) */}
                            <li className="comment">
                                <p>Content: I rate this one quite highly.</p>
                            </li>
                            <li className="comment">
                                <p>Content: The best game.</p>
                            </li>
                        </ul>
                {/* Display paragraph: If there are no games in the database */}
                        {/* <p className="no-comment">No comments.</p> */}
                    </div>

            {/* Edit/Delete buttons ( Only for creator of this game ) */}
                    <div className="buttons">
                        <a href="#" className="button">Edit</a>
                        <a href="#" className="button">Delete</a>
                    </div>
                </div>
                
            </section>

            <AddComment />
        </>
    )
}