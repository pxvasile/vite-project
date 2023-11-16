import { Link } from "react-router-dom";
import React from "react";
import './AddProduct.css';

export default function AddProduct() {
    return (
        <>
            <div id="add" className="form">

                <h2>ADD Product</h2>

                <label htmlFor="productName">Product Name:</label>
                <input type="text" id="productName" name="productName" placeholder="Enter Product name here..." /><br />

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" placeholder="Enter Category Here..." /><br />

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" placeholder="Enter Price Here..." /><br />

                <label htmlFor="product-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                <label className="labelm" htmlFor="material">Material:</label>
                <select id="material" name="material">
                    <option value="mdf">MDF</option>
                    <option value="pdch">PDCH</option>
                    <option value="solid-wood">Solid Wood</option>
                </select>
                <button className="btnn"><Link to="#">ADD Product</Link></button>

            </div>
        </>
    )
}