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
        try {
            const result = await authService.login(values.email, values.password);

            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken);

            navigate(Path.Home);
        } catch (error) {
            alert(error.message);
        }
    };

    const registerSubmitHandler = async (values, err, noErrors) => {
        if (JSON.stringify(err) === JSON.stringify(noErrors)) {
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
                alert(error.message);
            }
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
