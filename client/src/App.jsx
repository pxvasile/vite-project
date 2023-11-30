import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as productService from './services/productService';
import * as authService from './services/authService';
import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import AddProduct from './components/AddProduct/AddProduct';
import AboutUs from './components/AboutUs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProductDetailsInfo from './components/Catalog/CatalogItem/Details/ProductDetailsInfo';
import Logout from './components/Logout/Logout';


function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });
    
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
        logoutSubmitHandler,
        registerSubmitHandler,
        loginSubmitHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    }
    return (
        <>
            <AuthProvider value={values}>
                <div className="main">
                    <Header />

                    <Routes>
                        <Route path={Path.Home} element={<Home />} />
                        <Route path={Path.Catalog} element={<Catalog products={products} />} />
                        <Route path={Path.AddProduct} element={<AddProduct onAddProductSubmit={onAddProductSubmit} />} />
                        <Route path={Path.AboutUs} element={<AboutUs />} />
                        <Route path={Path.Login} element={<Login />} />
                        <Route path={Path.Logout} element={<Logout />} />
                        <Route path={Path.Register} element={<Register />} />
                        <Route path={Path.ProductDetails} element={<ProductDetailsInfo />} />
                    </Routes>
                </div>
                <Footer />
            </AuthProvider>
        </>
    )
}

export default App;
