import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import * as productService from '../../services/productService';
import CatalogItem from "./CatalogItem/CatalogItem";
import './Catalog.css';

export default function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAll()
            .then(result => setProducts(result));
    }, []);

    return (
        <>
            <div className="catalogHead">
                <h1>All Products</h1>
            </div>
            <section id="catalog-page">

                {products.map(x => <CatalogItem key={x._id} {...x} />)}

                {products.length === 0 && (
                    <h3 className="no-articles">No products yet!</h3>
                )}
            </section>
        </>
    )
}