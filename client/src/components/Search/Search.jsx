import { useContext, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import * as searchService from '../../services/searchService';
import './Search.css'

import AuthContext from '../../contexts/authContext';

export default function Search() {
    const { searchClickHandler } = useContext(AuthContext);
    const [values, setValues] = useState({});

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
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