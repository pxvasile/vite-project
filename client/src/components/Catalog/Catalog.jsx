import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import * as productService from '../../services/productService';
import CatalogItem from "./CatalogItem/CatalogItem";

export default function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAll()
            .then(result => setProducts(result));
    }, []);

    return (
        <>
            <section id="catalog-page">
                <h1>All Products</h1>

                {products.map(x => <CatalogItem key={x._id} {...x} />)}

                {products.length === 0 && (
                    <h3 className="no-articles">No products yet!</h3>
                )}
            </section>
        </>
    )
}