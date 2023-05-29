import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/cm0-b2c2164d5056a34_b2c21a3f-5056-a348-3a45eafebec976e8.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="logo img" />
            </div>
            <nav>
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
</div>
                <ul className={isOpen ? "nav-links active" : "nav-links"}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;