import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import AddProduct from './components/AddProduct/AddProduct';
import AboutUs from './components/AboutUs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
    return (
        <>
            <div className="main">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/add-product" element={<AddProduct />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default App
