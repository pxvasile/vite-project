import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';
import Path from '../../paths';
import './Header.css';
import Search from '../Search/Search';

export default function Header() {

    const { username, isAuthenticated } = useContext(AuthContext);
    return (
        <div className="navbar">
            <div className="icon">
                <h2 className="logo-name">WOODWORLD</h2>
            </div>

            <div className="menu">
                <ul>
                    <li><Link to={Path.Home}>HOME</Link></li>
                    <li><Link to={Path.Catalog}>CATALOG</Link></li>
                    <li><Link to={Path.AboutUs}>ABOUT US</Link></li>
                    {isAuthenticated && (
                        <>
                            <li><Link to={Path.AddProduct}>ADD PRODUCT</Link></li>
                            <li><Link to={Path.Logout}>LOGOUT</Link></li>
                            <li><span>Hi, {username}!</span></li>
                        </>
                    )}

                    {!isAuthenticated && (
                        <>
                            <li><Link to={Path.Login}>LOGIN</Link></li>
                            <li><Link to={Path.Register}>REGISTER</Link></li>
                        </>
                    )}

                </ul>
            </div>

            <Search />
        </div>
    )
}