import React from 'react'
import styles from './InputBox.module.css'
import 'react-calendar/dist/Calendar.css';

function InputBox({label, value, onChange, error}) {
  return (
    <div className={styles.rowStyle}>
      <div className={styles.errorMarker}></div>
      <div className={styles.labelContent}>
        <span>{label}</span>
      </div>
      <div className={error ? styles.inputDivError : styles.inputDiv}>
        <input
          type='text'
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </div>
  )
}


export default InputBox