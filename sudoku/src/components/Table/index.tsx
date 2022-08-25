import { getSudoku } from "../../sudoku";
import './index.css';

export const Table = () => {
    const sudokuArr = getSudoku();

    return (
        <table className="table">
            <tbody>
                {sudokuArr.map(item => {
                    return (
                    <tr className="table-row">
                    {item.map((elem: number) => {
                        return (<td className="table-data">{elem}</td>);
                    })}
                    </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

