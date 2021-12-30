import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header_box'>
            <div className='search_box'>
                <input type="text" placeholder = "Search food items" />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Header;