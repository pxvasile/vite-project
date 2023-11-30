import { createContext,useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as productService from '../services/productService';
import * as authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

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
        if (values.username.length < 5) {
            alert("dadad");
            return;
        }
        const result = await authService.register(
            values.username,
            values.email,
            values.password
        )

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };

    const logoutSubmitHandler = async () => {

        setAuth({});

        localStorage.removeItem('accessToken');
    };

    const values = {
        onAddProductSubmit,
        logoutSubmitHandler,
        registerSubmitHandler,
        loginSubmitHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
