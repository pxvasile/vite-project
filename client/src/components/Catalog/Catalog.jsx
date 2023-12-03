import { useContext } from 'react';

import CatalogItem from "./CatalogItem/CatalogItem";
import './Catalog.css';
import AuthContext from '../../contexts/authContext';

export default function Catalog() {
    const { products } = useContext(AuthContext);

    return (
        <>
            <div className="catalogHead">
                <h1>All Products</h1>
            </div>
            <section id="catalog-page">

                {products.map(x => (<CatalogItem key={x._id} {...x} />))}

                {products.length === 0 && (
                    <h3 className="no-articles">No products yet!</h3>
                )}
            </section>
        </>
    )
}