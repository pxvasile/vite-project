import { useContext, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import * as searchService from '../../services/searchService';
import './Search.css'
import Path from '../../paths';
import SearchModal from './SearchModal/SeachModal';

export default function Search() {
    const { productId } = useParams();
    const [values, setValues] = useState({});
    const [searchProducts, setSearchedProducts] = useState([]);

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const searchClickHandler = async (values) => {
        const searchProduct = await searchService.getAll(values);

        setSearchedProducts(searchProduct);

       <SearchModal searchProducts={searchProducts} />
    }
    return (
        <>
            <div className="search">
                <input value={values.searchName} onChange={onChangeHandler} className="srch" type="search" name="search" placeholder="Type To text" />
                <button onClick={() => searchClickHandler(values)} className="btn">Search</button>
            </div>
        </>
    )
}