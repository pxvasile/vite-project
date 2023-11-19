import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
    return (
        <>
            <div className="form-login">
                <h2>Login Here</h2>
                <input type="email" name="email" placeholder="Enter Email Here..." />
                <input type="password" name="" placeholder="Enter Password Here..." />
                <button type="submit" className="form-login-btnn" value="Login">Login</button>

                <p className="link">Don't have an account
                    <Link href="#">Sign up here</Link></p>
                <p className="liw">Log in with</p>

                <div className="icons">
                    <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
                </div>

            </div>
        </>
    )
}