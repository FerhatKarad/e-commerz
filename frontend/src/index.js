import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { StoreProvider } from './components/Store';

import { BrowserRouter as Router } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StoreProvider>
        <HelmetProvider>
            <Router>
                <App />
            </Router>
        </HelmetProvider>
    </StoreProvider>);
