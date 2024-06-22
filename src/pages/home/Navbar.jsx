import React from 'react';
import '../../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Logo2 from '../../assets/logo2.png'
function Navbar(props) {
    return (
        <nav className="ctm-pack-navbar">
            <div className="ctm-pack-nav-left">
                <NavLink to="/" className="ctm-pack-nav-logo">
                    <img src={Logo} className='ctm-pack-va-mid ctm-pack-logo-large' alt="Logo" />
                    <img src={Logo2} className='ctm-pack-va-mid ctm-pack-logo-small' alt="Logo" />
                </NavLink>
            </div>
            <div className="ctm-pack-nav-btn">
                <NavLink className="ctm-pack-nav-login-btn">Login </NavLink>
                <NavLink className="ctm-pack-nav-signup-btn">Sign Up</NavLink>
            </div>
        </nav>

    );
}

export default Navbar;