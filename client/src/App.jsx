import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as productService from './services/productService';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import AddProduct from './components/AddProduct/AddProduct';
import AboutUs from './components/AboutUs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProductDetailsInfo from './components/Catalog/CatalogItem/Details/ProductDetailsInfo';

function App() {
    const [auth, setAuth] = useState({});
    const navigate = useNavigate();

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

    const loginSubmitHandler = (values) => {
        console.log(values);
    };

    return (
        <>
            <div className="main">
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog products={products} />} />
                    <Route path="/add-product" element={<AddProduct onAddProductSubmit={onAddProductSubmit}/>} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/login" element={<Login loginSubmitHandler={loginSubmitHandler} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/catalog/:productId" element={<ProductDetailsInfo />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default App
