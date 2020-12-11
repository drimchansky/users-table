// packages
import React from 'react'
// styles
import styles from './Header.module.css'

const Header = ({ children }) => {
  return <h1 className={styles.header}>{children}</h1>
}

export default Header
