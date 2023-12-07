import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as productService from '../services/productService';
import * as authService from '../services/authService';
import * as searchService from '../services/searchService';

import Path from '../paths';
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
    const [products, setProducts] = useState([]);
    const [searchProducts, setSearchedProducts] = useState([]);

    useEffect(() => {
        productService.getAll()
            .then(result => setProducts(result));
    }, []);

    const onAddProductSubmit = async (data) => {

        try {
            const newProduct = await productService.create(data);

            setProducts(state => [...state, newProduct]);

            navigate("/catalog");
        } catch (error) {
            alert(error.message);
        }

    }

    const loginSubmitHandler = async (values) => {
        if (values.email == "" && values.password == "") {
            alert("All fields is Required!");
            return;
        }

        try {
            const result = await authService.login(values.email, values.password);

            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken);

            navigate(Path.Home);
        } catch (error) {
            alert(error.message);
        }
    };

    const registerSubmitHandler = async (values) => {
        if (values.username === "" || values.email === "" || values.password === "" || values.repass === "") {
            alert("All fields are required!");
            return;
        }
        if (values.username.length >= 4 || values.username.length <= 18) {
            alert("Username should be 3-16 characters!");
            return;
        }
        if (values.password.length < 4) {
            alert('Passwords is too weak and must be at least 4 characters long');
        }
        if (values.password != values.repass) {
            alert('Passwords dont\'t match');
            return;
        }
        try {
            const result = await authService.register(
                values.username,
                values.email,
                values.password
            )

            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken);

            navigate(Path.Home);

        } catch (error) {
            alert(error.message)
        }
    };

    const logoutSubmitHandler = async () => {

        setAuth({});

        localStorage.removeItem('accessToken');
    };

    const confirmClickHandler = (productId) => {
        productService.remove(productId);

        setProducts(state => state.filter(x => x._id !== productId));
        navigate('/catalog');
    }

    const searchClickHandler = async (values) => {
        const result = await searchService.getAll(values);

        setSearchedProducts(result);

        navigate('/search');
    }

    const values = {
        onAddProductSubmit,
        logoutSubmitHandler,
        registerSubmitHandler,
        loginSubmitHandler,
        confirmClickHandler,
        searchClickHandler,
        searchProducts,
        products,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        accessToken: auth.accessToken,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
