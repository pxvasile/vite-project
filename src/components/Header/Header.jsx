import '../Header/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header-area">
            <div className="container">
                <div className="menu-area">
                    <nav>
                        <ul>
                            <li><Link to="/" target="_self">HOME</Link></li>
                            <li><Link to="/catalog" target="_self">CATALOG</Link></li>
                            <li><Link to="/add-product" target="_self">ADD PRODUCT</Link></li>
                            <li><Link to="/about-us" target="_self">ABOUT US</Link></li>
                            <li><Link to="/login" target="_self">LOGIN</Link></li>
                            <li><Link to="/register" target="_self">REGISTER</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-content">
                    <h1>WOODWORLD</h1>
                    <p>
                        WE PROVIDE CARPENTRY SERVICES
                    </p>
                </div>
            </div>

        </header>
    )
}