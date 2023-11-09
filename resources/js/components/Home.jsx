// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '@/css/homepage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="home-header">
                <h1>Welcome to RealEstate SoftUni</h1>
            </header>
            <main className="main-content">
                <p>Hello! Browse our listings and find your dream home today.</p>
                <Link to="/register" className="register-button">
                    Register
                </Link>
            </main>
        </div>
    );
};

export default HomePage;
