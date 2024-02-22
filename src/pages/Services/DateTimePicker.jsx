import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "moment/locale/pt-br"; // Importe o idioma desejado
import { StyledDateTimePicker } from "./DateTimePickerStyle";

const DateTimePicker = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());

	const isWeekday = (date) => {
		const day = date.getDay();
		return day !== 0 && day !== 6;
	};

	const isTimeValid = (date) => {
		const hours = date.getHours();
		return hours >= 8 && hours <= 20;
	};

	const filterPassedTime = (time) => {
		const currentDate = new Date();
		const selectedDateTime = new Date(selectedDate);
		const next30Days = moment(currentDate).add(30, "days").toDate();

		return (
			time >= currentDate &&
			time <= next30Days &&
			isWeekday(time) &&
			isTimeValid(time)
		);
	};

	return (
		<StyledDateTimePicker>
      <fieldset>
        <legend>Escolha uma data e um horário</legend>
      
			<DatePicker
				selected={selectedDate}
				onChange={(date) => setSelectedDate(date)}
				showTimeSelect
				timeFormat="HH:mm"
				timeIntervals={60}
				timeCaption="Hora"
				dateFormat="dd/MM/yyyy HH:mm"
				filterTime={filterPassedTime}
				minDate={new Date()}
				maxDate={moment().add(30, "days").toDate()}
				locale="pt-br"
        
			/>
      </fieldset>
		</StyledDateTimePicker>
    
	);
};

export default DateTimePicker;
