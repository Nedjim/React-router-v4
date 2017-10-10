import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <nav>
        <li>
        <NavLink exact to='/' activeStyle={{background: 'blue'}}>Home</NavLink>
        </li>
        <li>
        <NavLink to='/about' activeClassName='newActiveStyle'>About</NavLink>
        </li>
        <li>
        <NavLink to='/teachers'>Teachers</NavLink>
        </li>
        <li>
        <NavLink to='/courses'>Courses</NavLink>
        </li>
        <li>
        <NavLink to='/contact'>Contact</NavLink>
        </li>
    </nav>
)

export default Header;