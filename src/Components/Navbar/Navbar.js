import React from 'react';
import './Navbar.css'
import logo from '../Asset/logo.png'
const Navbar = () => {
    return (
        <div className='menu'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <a href="/Home">Home</a>
                <a href="/Playesr">Players</a>
                <a href="/Team">Team</a>
            </div>
        </div>
    );
};

export default Navbar;