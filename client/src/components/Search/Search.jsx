import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import './Search.css'
import AuthContext from '../../contexts/authContext';

export default function Search() {
    const { searchClickHandler } = useContext(AuthContext);
    const { productId } = useParams();

    return (
        <>
            <div className="search">
                <input className="srch" type="search" name="" placeholder="Type To text" />
                <button onClick={() => searchClickHandler(productId)} className="btn">Search</button>
            </div>
        </>
    )
}