import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Header() {
    return (
        <header className="header">
            <Link to={'/'}>
                <h1 className="header__title">
                    HDFILMCEHENNEMI
                </h1>
            </Link>
        </header>
    );
}

export default Header;