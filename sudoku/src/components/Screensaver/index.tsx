import { Link } from 'react-router-dom';
import './index.css';

export const Screensaver = () => {
    return (
        <span className="pulse">
            <Link to="/game" className="text">Начать игру</Link>
        </span>
    );
};
