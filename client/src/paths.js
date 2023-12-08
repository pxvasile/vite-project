const Path = {
    Home: '/',
    Catalog: '/catalog',
    AddProduct: '/add-product',
    Search: '/search',
    AboutUs: '/about-us',
    ContactUs: '/contact-us',
    Login: '/login',
    Logout: '/logout',
    Register: '/register',
    ProductDetails: '/catalog/:productId',
    ProductDetailsEdit: '/catalog/:productId/edit',
    DeleteProduct: '/catalog/:productId/delete',
    NotFound: '*',
};

export default Path;