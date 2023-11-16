import { useState, useEffect } from "react";

import * as productService from '../../services/productService';

export default function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAll()
        .then(result => setProducts(result));
    }, []);
    
    return (
        <>
        <p>Catalog</p>
        </>
    )
}