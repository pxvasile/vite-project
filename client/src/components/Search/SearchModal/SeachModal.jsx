import { useContext } from 'react';

import CatalogItem from "../../Catalog/CatalogItem/CatalogItem";
import AuthContext from '../../../contexts/authContext';
import '../SearchModal/SearchModal.css'

export default function SearchModal(
) {
    const { searchProducts } = useContext(AuthContext);

    return (
        <>
            <div className="catalogHead">
                <h1>All Products</h1>
            </div>
            <section id="catalog-page">

                {searchProducts.map(x => (<CatalogItem key={x._id} {...x} />))}

                {searchProducts.length === 0 && (
                    <h3 className="no-articles">No products with this criteria!</h3>
                )}
            </section>
        </>
    )
}