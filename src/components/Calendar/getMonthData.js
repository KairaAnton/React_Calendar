import React from 'react';
import {getDay,getDaysInMonth} from 'date-fns';

export default function getMonthData(year, month) {
    const DAYS_IN_WEEK =7;
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(year,month);
    const monthStartsOn = getDay(date);
    let day = 1;

    for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
        result[i] = [];
       // console.log('getDaysInMonth :>> ', getDaysInMonth);
        
        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            if ((i === 0 && j < monthStartsOn-1) || day > daysInMonth) {
                result[i][j] = undefined;
            } else {
                result[i][j] = new Date(year, month, day++);
            }
        }
    }
console.log(result);
    return result;
}