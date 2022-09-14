import { getSudoku, getFieldSudoku, changeSudokuArr } from "../../sudoku";
import { useAppSelector } from '../../Store/hooks';
import './index.css';
import { useEffect, useState } from "react";

export const Table = () => {
    const level = useAppSelector((state) => state.level.value);
    const [resultArr, setResultArr] = useState([]);

    useEffect(() => {
        const sudokuArr = getSudoku();
        const answers = getFieldSudoku(level, sudokuArr);
        const changeArr = changeSudokuArr(sudokuArr, answers);
        setResultArr(changeArr);
    }, [level]);

    return (
        <table className="table">
            <tbody>
                {resultArr.map((item: number[], index: number) => {
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

