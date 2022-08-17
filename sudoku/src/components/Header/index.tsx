import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../Menu';
import './index.css';

export const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <Link to="/">
                <img src='./favicon.png' alt='logo' />
                </Link>
                <h1>Sudoku</h1>
            </div>
            <Menu />
        </div>
    );
}