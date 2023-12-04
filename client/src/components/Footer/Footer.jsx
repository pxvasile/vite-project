import { Link } from "react-router-dom";

import './Footer.css';

export default function Footer() {
    return (
        <>
        <div className="footer-area">
        <div className="logo">
        <img src="../images/footer-logo.png" alt="Footer Logo" />
        <div className="copyright">
         <p>
            © 2023 -
            <Link to="https://www.facebook.com/plamen.vasilev.351" target="_blank">
                Plamen Vasilev
            </Link>
            - All Rights Reserved!
        </p>
                    </div>
                </div>
        </div>
        </>
    )
}