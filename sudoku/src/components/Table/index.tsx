import { getSudoku, getFieldSudoku, changeSudokuArr } from "../../sudoku";
import './index.css';

export const Table = () => {
    const sudokuArr = getSudoku();
    const answers = getFieldSudoku(16, sudokuArr);
    const changeArr = changeSudokuArr(sudokuArr, answers);

    return (
        <table className="table">
            <tbody>
                {changeArr.map((item: number[], index: number) => {
                    return (
                    <tr className="table-row" key={index}>
                    {item.map((elem: number, index: number) => {
                        return (<td className="table-data" key={index}>{elem}</td>);
                    })}
                    </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

