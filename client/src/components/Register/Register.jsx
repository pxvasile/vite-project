import { Link } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../contexts/authContext';

import useForm from '../../hooks/useForm';
import './Register.css';
import Path from '../../paths';

const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'repass',
}

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    })

    return (
        <>
            <form className="form-register" onSubmit={onSubmit}>
                <h2>Register Here</h2>
                <input 
                    type="text" 
                    name={RegisterFormKeys.Username} 
                    onChange={onChange} 
                    placeholder="Enter Name Here..."
                    value={values[RegisterFormKeys.Username]}
                />

                <input 
                    type="email" 
                    name={RegisterFormKeys.Email} 
                    onChange={onChange} 
                    placeholder="Enter Email Here..." 
                    value={values[RegisterFormKeys.Email]}
                />

                <input 
                    type="password" 
                    name={RegisterFormKeys.Password} 
                    onChange={onChange} 
                    placeholder="Enter Password Here..." 
                    value={values[RegisterFormKeys.Password]}
                />

                <input 
                    type="password" 
                    name={RegisterFormKeys.ConfirmPassword}
                    onChange={onChange}  
                    placeholder="Confirm Password Here..." 
                    value={values[RegisterFormKeys.ConfirmPassword]}
                />

                <button type="submit" className="form-register-btnn" value="Register">Register</button>

                <p className="link">Have an account
                    <Link to={Path.Login}>Login in here</Link></p>
                <p className="liw">Log in with</p>

                <div className="icons">
                    <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
                </div>

            </form>
        </>
    )
}