import './index.css';
import { useAppSelector, useAppDispatch } from '../../Store/hooks';
import { setLevel } from '../../Store/levelSlice';
import React from 'react';

export const Level = () => {
    const level = useAppSelector((state) => state.level.value);
    const dispatch = useAppDispatch();
    const levels = ['easy', 'medium', 'hard', 'very-hard', 'insane', 'inhuman'];

    const onChange = (event: React.ChangeEvent) => {
        dispatch(setLevel((event.target as HTMLInputElement).value as string));
    };

    return (
        <div className='level'>
            <p className='text-level'>Уровень сложности</p>
            <select className="select-level" value={level} onChange={onChange}>
                {levels.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                })}
            </select>
        </div>
    );
};