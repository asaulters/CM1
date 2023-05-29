import React from 'react';
import './MenuPage.css';
import menuPic from '../../../assets/testMenu1.jpeg'; // please replace with the path to your actual menu image

const Menu = () => {
    return (
        <div className="menu-page">
            <h1>Our Menu</h1>
            <div className="menu-image">
                <img src={menuPic} alt='Our Menu' />
            </div>
        </div>
    );
}

export default Menu;
