import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
    <header className='header-main'>
        <div className='site-logo'>
            <h1>Kris Tibbs</h1>
            <p>Making it up as I go along</p>
        </div>
        <nav>
        <ul>
           <li><NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink></li>
           <li><NavLink to='/portfolio' activeClassName='is-active' exact={true}>Portfolio</NavLink></li>
           <li><NavLink to='/contact' activeClassName='is-active'>Contact</NavLink></li>
           <li><NavLink to='/about' activeClassName='is-active'>About</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default Header;