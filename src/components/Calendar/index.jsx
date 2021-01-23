import React, { useState } from "react";
import getDaysInMonth from "./getDaysInMonth.js";
import getMonthData from "./getMonthData";
import { getDate, getMonth, getYear, setYear } from "date-fns";
import classnames from "classnames";
import styles from "./styles.module.sass";
const years = [
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
  2021,
  2022,
  2023,
  2024,
  2025,
];
const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
const weekDayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

function MyCalendar() {
  const { day } = styles;
  const [date, setDate] = useState(new Date());
  const [currentDate, setCurrentData] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState();
  const [month,setMonth] = useState(getMonth(date));
  const [year,setYear] = useState(getYear(date));
  //const month = getMonth(date);
  //const year = getYear(date);

  const monthData = getMonthData(year, month);
  const areEqual = (a, b) => {
    if (!a || !b) return false;
    return (
      getYear(a) === getYear(b) &&
      getMonth(a) === getMonth(b) &&
      getDate(a) === getDate(b)
    );
  };

  const handleSelectChange = (value) => {
    //const year = this.yearSelect.value;
    // const month = this.monthSelect.value;

    const date = new Date(year, value);

    setDate({ date });
  };

  const handlePrevMonthButtonClick = () => {
    setDate(new Date(year, month - 1));
  };

  const handleNextMonthButtonClick = () => {
    setDate(new Date(year, month + 1));
  };

  const handleDayClick = (date) => {
    setSelectedDate(date.target);
    console.log('selectedDate :>> ', date);
  };

  return (
    <>
      <header>
        <button onClick={handlePrevMonthButtonClick}>{"<"}</button>

        <select
       
          value={month}
          onChange={(x)=>{setMonth(x.target.value)}}
        >
          {monthNames.map((name, index) => (
            <option key={name} value={index}>
              {name}
            </option>
          ))}
        </select>
        <select value={year} onChange={(x)=>(setDate(x.target.value,month))}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <button onClick={handleNextMonthButtonClick}>{">"}</button>
      </header>

      <table>
        <thead>
          <tr>
            {weekDayNames.map((name) => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {monthData.map((week, index) => (
            <tr key={index} className="week">
              {week.map((date, index) =>
                date ? (
                  <td
                    key={index}
                    className={classnames(
                      { day },
                      {
                        today: areEqual(date, currentDate),
                        selected: areEqual(date, selectedDate),
                      }
                    )}
                    onClick={date => handleDayClick(date)}
                  >
                    {getDate(date)}
                  </td>
                ) : (
                  <td key={index} />
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MyCalendar;
