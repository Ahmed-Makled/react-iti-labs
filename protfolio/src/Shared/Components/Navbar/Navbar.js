import React from 'react';
import './Navbar.css'

function NavBar(){
    return(
        <nav>
            <a >
                <img src='images/logo.svg' alt='logo'/>
            </a>
            <div className='links'>
                <a >Features</a>
                <a >Team</a>
                <a >Sign In</a>
            </div>
        </nav>
    );
}
export default NavBar;