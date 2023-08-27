import React, { useState } from 'react'
import styles from './InputBox.module.css'

function RadioButton({radioValues, label}) {
  const [currentActive, setCurrentActive] = useState();

  const handleSelect = (selectedItem) => {
    setCurrentActive(selectedItem.value);
  }

  return (
    <div className={styles.rowStyle}>
      <div className={styles.errorMarker}></div>
      <div className={styles.labelContent}>
        <span>{label}</span>
      </div>
      <div className={styles.radioOptions}>
        { radioValues.map(element => (
          <div key={element.value} className={styles.radioItem} onClick={() => handleSelect(element)}>
            <div className={styles.iconDiv + ' ' + (currentActive === element.value ? styles.iconDivActive : '')}>
              <img alt={`${element.value}-symbol`} src={currentActive === element.value ? element.iconActive : element.icon}/>
            </div>
            <p className={styles.radioText}>{element.value}</p>
          </div>
        ))}
      </div>
		</div>
  )
}

export default RadioButton