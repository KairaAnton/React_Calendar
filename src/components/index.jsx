import {useState} from 'react';
import MyCalendar from './Calendar';
import styles from './Calendar/styles.module.sass';

function Calendar(params) {
	const [date,setDate]= useState();
	const {calendar} = styles;
   const handleDateChange = date => setDate({ date });

		return (
			<div className={calendar}>
				{date && <p>Выбранная дата: {date.toLocaleDateString()}</p>}

				<MyCalendar
					onChange={handleDateChange}
				/>
			</div>
		);

}