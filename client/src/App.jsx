import { Routes, Route } from 'react-router-dom';

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
import ProductDetailsEdit from './components/Catalog/CatalogItem/Details/ProductDetailsEdit/ProductDetailsEdit';
import DeleteModal from './components/Catalog/CatalogItem/Details/ProductDetailsEdit/DeleteModal/DeleteModal';
import AuthGuard from './guards/AuthGuard';

function App() {

    return (
        <>
            <AuthProvider>
                <div className="main">
                    <Header />

                    <Routes>
                        <Route path={Path.Home} element={<Home />} />
                        <Route path={Path.Catalog} element={<Catalog />} />
                        <Route path={Path.AboutUs} element={<AboutUs />} />
                        <Route path={Path.Login} element={<Login />} />
                        <Route path={Path.Register} element={<Register />} />
                        <Route path={Path.ProductDetails} element={<ProductDetailsInfo />} />

                        <Route element={<AuthGuard />}>
                            <Route path={Path.AddProduct} element={<AddProduct />} />   
                            <Route path={Path.Logout} element={<Logout />} />
                            <Route path={Path.ProductDetailsEdit} element={<ProductDetailsEdit />} />
                            <Route path={Path.DeleteModal} element={<DeleteModal />} />
                        </Route>
                    </Routes>
                </div>
                <Footer />  
            </AuthProvider>
        </>
    )
}

export default App;
