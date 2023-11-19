import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
    return (
        <>
            <div className="form-register">
                <h2>Register Here</h2>
                <input type="text" name="userName" placeholder="Enter Name Here..." />
                <input type="email" name="email" placeholder="Enter Email Here..." />
                <input type="password" name="password" placeholder="Enter Password Here..." />
                <input type="password" name="repass" placeholder="Confirm Password Here..." />
                <button type="submit" className="form-register-btnn" value="Register">Register</button>

                <p className="link">Have an account
                    <Link href="#">Login in here</Link></p>
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