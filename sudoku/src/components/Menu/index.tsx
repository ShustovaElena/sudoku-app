import './index.css';
import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <nav className="menu">
            <Link to="/rules" className="button">Правила игры</Link>
            <Link to="/statistic" className="button">Статистика</Link>
        </nav>
    );
};