import React from 'react';
import './App.css'
const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="wrap__logo">Header <span>Logo</span></div>
                <nav className="nav__items">
                    <a href="#" className="nav__item">Main</a>
                    <a href="#" className="nav__item">AboutUs</a>
                    <a href="#" className="nav__item">Producs</a>
                    <a href="#" className="nav__item active">Contact</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;