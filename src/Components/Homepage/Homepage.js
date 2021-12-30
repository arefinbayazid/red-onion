import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Meals from './Meals/Meals';
import Navbar from './Navbar/Navbar';

const Homepage = () => {
        return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Meals></Meals>
        </div>
    );
};

export default Homepage;