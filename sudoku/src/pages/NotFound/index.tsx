import { Link } from "react-router-dom";
import './index.css';

export const NotFound = () => {
    return (
        <div className="not-found">
            <Link to="/" className="button-to-home">На главную</Link>
        </div>
    );
};