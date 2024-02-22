import styled from 'styled-components';

export const StyledDateTimePicker = styled.div`
  .react-datepicker {
    background-color: #242524;
    color: #ffffff;
    border: none;
    font-family: 'Arial', sans-serif;
  }

  .react-datepicker__input-container {
    display: block;
    padding: .5rem;
  }

  input[type="text"] {
    background-color: #242524;
    color: #ffffff;
    padding: .7rem;
    font-size: 1.2rem;
    border: none;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--third-color);
    border-radius: 5px;
  }

  .react-datepicker__header {
    background-color: #242524;
    color: #ffffff;
    border-bottom: none;
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    color: #ffffff;
  }

  .react-datepicker__month {
    margin: 0;
    padding: 1rem;
  }

  .react-datepicker__day--selected {
    background-color: #5a6a8c;
    color: #ffffff;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #5a6a8c;
    color: #ffffff;
  }

  .react-datepicker__time-container {
    border-left: 1px solid #5a6a8c;
  }

  .react-datepicker__time {
    padding: 1rem;
    background-color: #242524;
  }

  .react-datepicker__time-box {
    width: auto;
  }

  .react-datepicker__time-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .react-datepicker__time-list-item {
    padding: 0.5rem;
    cursor: pointer;
  }

  .react-datepicker__time-list-item:hover {
    background-color: #5a6a8c;
    color: #ffffff;
  }
`;
