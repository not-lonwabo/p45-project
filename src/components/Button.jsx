import React from 'react'
import styles from './Button.module.css'

function Button({btnText, primary, onClick}) {
  const classes = `${styles.btn} ${primary && styles.btnPrimary}`
  return (
    <button className={classes} onClick={onClick}>{btnText}</button>
  )
}

export default Button