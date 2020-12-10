// packages
import React from 'react'
// styles
import styles from './SearchBar.module.css'

const SearchBar = ({ appState, setAppState }) => {
  const handleChange = (e) => {
    setAppState({ ...appState, searchValue: e.target.value.toLowerCase() })
  }

  return (
    <section className={styles.searchbar}>
      <input className={styles.input} type="text" onChange={handleChange} />
      <button className={styles.button}>Очистить фильтр</button>
    </section>
  )
}

export default SearchBar
