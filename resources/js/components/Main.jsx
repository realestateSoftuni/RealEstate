// resources/js/app.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './UserRegister.jsx'
import EmailVerify from "./EmailVerify.jsx";
import Home from "./Home.jsx"
import NotFound from "./NotFound.jsx";

function MyApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/verify/:token" element={<EmailVerify />}/>
                <Route path="*" element={<NotFound />}/> {/* This will catch all undefined paths */}
            </Routes>
        </BrowserRouter>
    );
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);

