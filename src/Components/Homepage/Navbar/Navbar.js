import React, { useEffect, useState } from 'react';
import './Navbar.css'

const Navbar = () => {

    const [num, useNum] = useState(58);
    useEffect(() =>{
        const icon = document.getElementById('cart_box');
        num && icon.classList.add('cart_icon')
    }, [num])

    return (
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img width={150} src="https://i.ibb.co/jvNtvV7/logo2.png" alt='web-logo' />
                    </a>
                    <div>
                        <span id="cart_box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        </span>

                        <button className="navbar-toggler ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                </div>  
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className='d-flex menu_form'>
                        <h1>My Menu</h1>
                        <button className='login_btn me-2'><i className="fas fa-lock"></i>Log In</button>
                        <button className='signup_btn'><i className="fas fa-sign-in-alt"></i>Sign Up</button>

                        <button className='goggle_login_btn'><img width={30} src='https://i.ibb.co/xDLfd2Q/pngegg.png' />Log In With Google</button>
                    </form>
                </div>
            </nav>
        </div>  
    );
};

export default Navbar;