import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as productService from '../services/productService';
import * as authService from '../services/authService';

import Path from '../paths';
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAll()
            .then(result => setProducts(result));
    }, []);

    const onAddProductSubmit = async (data) => {
        const newProduct = await productService.create(data);

        setProducts(state => [...state, newProduct]);

        navigate("/catalog");
    }

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };


    const registerSubmitHandler = async (values) => {
       
        // try {
        //     if (values.username.length < 3) {
        //         alert("Username is too short!");
        //     } 
        //     if (values.username === "" || values.email === "" || values.password === "" || values.repass === "") {
        //         alert("All fields are required!")
        //     }
        //     if (values.password.length < 5) {
        //         alert('Passwords is too weak and must be at least 5 characters long');
        //     }
        //     if (values.password != values.repass) {
        //         alert('Passwords dont\'t match');
        //     }

                const result = await authService.register(
                    values.username,
                    values.email,
                    values.password
                )

                setAuth(result);

                localStorage.setItem('accessToken', result.accessToken);

                navigate(Path.Home);

        // } catch (error) {
        //     console.log(error);
        // }
    };

    const logoutSubmitHandler = async () => {

        setAuth({});

        localStorage.removeItem('accessToken');
    };

    const deleteProduct = (productId) => {
        return productService.find(product => product._id === productId);
    }

    const values = {
        onAddProductSubmit,
        logoutSubmitHandler,
        registerSubmitHandler,
        loginSubmitHandler,
        deleteProduct,
        products,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
