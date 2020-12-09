// packages
import React from 'react'
// styles
import styles from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <section className={styles.searchbar}>
      <input className={styles.input} type="text" />
      <button className={styles.button}>Очистить фильтр</button>
    </section>
  )
}

export default SearchBar
