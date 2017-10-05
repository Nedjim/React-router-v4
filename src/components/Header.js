import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <nav>
        <NavLink exact to='/' activeStyle={{background: 'blue'}}>Home</NavLink>
        <br />
        <NavLink to='/about' activeClassName='newActiveStyle'>About</NavLink>
        <br />
        <NavLink to='/courses'>Courses</NavLink>
        <br />
        <NavLink to='/contact'>Contact</NavLink>
    </nav>
)

export default Header;