import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import './Login.css';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}

export default function Login({
    loginSubmitHandler,
}) {
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return (
        <>
            <form className="form-login" onSubmit={onSubmit}>
                <h2>Login Here</h2>
                <input 
                    type="email" 
                    name={LoginFormKeys.Email} 
                    placeholder="Enter Email Here..." 
                    onChange={onChange}
                    value={values[LoginFormKeys.Email]}
                />
                <input 
                    type="password" 
                    name={LoginFormKeys.Password} 
                    placeholder="Enter Password Here..." 
                    onChange={onChange}
                    value={values[LoginFormKeys.Password]}
                />
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

            </form>
        </>
    )
}