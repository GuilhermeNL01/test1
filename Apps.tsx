import React from 'react';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />

            </Routes>
        </BrowserRouter>
    );
};