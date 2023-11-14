import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import '../public/css/style.css';
// import '../public/css/responsive.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
)
