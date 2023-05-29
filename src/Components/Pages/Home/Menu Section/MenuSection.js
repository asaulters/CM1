import React from 'react';
import './MenuSection.css';
import menuImg from '../assets/4279135.jpg';
import dishImg from '../assets/pad-thai-with-fresh-shrimp-thai-food-noodles.jpg' // replace with the actual path to your menu image

const MenuSection = () => {
    return (
        <div className="menu-section">

            <div className="menu-content">
                <h1>Menu</h1>
                <p>
                    Explore our diverse range of dishes, from traditional pub fare to authentic Thai cuisine. <br/>
                    <br/><button onClick={() => window.open(menuImg)}>Menu</button>

                </p>
            </div>
            <div className="menu-image">
                <img src={dishImg} alt='Thai Dish' />
            </div>
        </div>
    );
}

export default MenuSection;