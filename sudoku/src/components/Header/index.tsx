import React from 'react';
import './index.css';

export const Header = () => {
    return (
        <div className='header'>
            <img className="logo" src='./favicon.png' alt='logo' />
            <h1>Sudoku</h1>
        </div>
    );
}