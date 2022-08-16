import React from 'react';
import { Menu } from '../Menu';
import './index.css';

export const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src='./favicon.png' alt='logo' />
                <h1>Sudoku</h1>
            </div>
            <Menu />
        </div>
    );
}