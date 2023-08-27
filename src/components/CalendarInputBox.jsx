import React, { useState, useRef, useEffect } from 'react'
import styles from './InputBox.module.css'
import calendar from '../assets/calendar.svg'
import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function InputBox({label, type}) {
  const [dob, setDob] = useState(new Date());
  const [showCal, setShowCal] = useState(false);
  const [value, setValue] = useState();

  const onChange = (date) => {
    if (date.type === 'focus') {
      showCalendar();
      return;
    }
    showCalendar();
    setDob(date);
    const actualDay = date.setDate(date.getDate() + 1);
    const actualDayFormatted = new Date(actualDay);
    setValue(actualDayFormatted.toJSON().slice(0,10).split('-').reverse().join('/'));
  }

  const showCalendar = () => {
    setShowCal(!showCal);
  }

  return (
    <div className={styles.rowStyle}>
      <div className={styles.errorMarker}></div>
      <div className={styles.labelContent}>
        <span>{label}</span>
      </div>
      <StyledInput className={"inputWithIcon"}>
        <Input
          type={type}
          value={value}
          onChange={onChange}
          onSubmit={e => {
            e.preventDefault();
          }}
          onFocus={onChange}
        />
        <img alt='calendar' src={calendar} onClick={showCalendar}/>
        <div className={showCal ? styles.calendarDiv : styles.hideCal}>
          <Calendar onChange={onChange} value={dob} />
        </div>
      </StyledInput>
    </div>
  )
}

const Input = styled.input`
  width: calc(100% - 42px);
  height: 56px;
  position: relative;
  padding: 0px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  background-color: var(--paleGrey);
  margin: 12px 0;
  outline: none;
  transition: 0.3s;
  padding-left: 26px;

  :focus {
    border-style: solid;
    border-color: var(--cloudyBlue);
    background-color: #fff;
  }

  @media screen and (max-width: 480px) {
    padding: 0 22px;
  }
`;

const StyledInput = styled.div`
  img {
    position: absolute;
    right: 5px;
    top: 20px;
    padding: 10px 12px;
    fill: black;
    transition: 0.3s;
  }

  input:focus + img {
    fill: var(--cloudyBlue);
  }

  &.inputWithIcon {
    position: relative;
  }
`;


export default InputBox