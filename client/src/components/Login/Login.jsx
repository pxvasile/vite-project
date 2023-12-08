import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';
import './Login.css';
import Path from '../../paths';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const {formValues, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return (
        <>
            <form className="form-login" onSubmit={onSubmit}>
                <h2>Login</h2>
                <input 
                    type="email" 
                    name={LoginFormKeys.Email} 
                    placeholder="Enter Email Here..." 
                    onChange={onChange}
                    value={formValues[LoginFormKeys.Email]}
                />

                <input 
                    type="password" 
                    name={LoginFormKeys.Password} 
                    placeholder="Enter Password Here..." 
                    onChange={onChange}
                    value={formValues[LoginFormKeys.Password]}
                />

                <button type="submit" className="form-login-btnn" value="Login">Login</button>

                <p className="link">Don't have an account<Link className="link-sign" to={Path.Register}>Sign up here</Link></p>
                <p className="liw">Log in with</p>

                <div className="icons">
                    <Link to="https://www.facebook.com/plamen.vasilev.351"><ion-icon name="logo-facebook"></ion-icon></Link>
                    <Link to="#"><ion-icon name="logo-instagram"></ion-icon></Link>
                    <Link to="#"><ion-icon name="logo-twitter"></ion-icon></Link>
                    <Link to="#"><ion-icon name="logo-google"></ion-icon></Link>
                    <Link to="#"><ion-icon name="logo-skype"></ion-icon></Link>
                </div>

            </form>
        </>
    )
}