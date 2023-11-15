import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
        <div className="navbar">
            <div className="icon">
                <h2 className="logo-name">WOODWORLD</h2>
            </div>

            <div className="menu">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/catalog">CATALOG</Link></li>
                    <li><Link to="/add-product">ADD PRODUCT</Link></li>
                    <li><Link to="/about-us">ABOUT US</Link></li>
                    <li><Link to="/login">LOGIN</Link></li>
                    <li><Link to="/register">REGISTER</Link></li>
                </ul>
            </div>

            <div className="search">
                <input className="srch" type="search" name="" placeholder="Type To text" />
                <Link to="#"> <button className="btn">Search</button></Link>
            </div>

        </div> 
        </>
    )
}