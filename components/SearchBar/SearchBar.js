// packages
import React from 'react'
// styles
import styles from './SearchBar.module.css'

const SearchBar = ({ appState, setAppState }) => {
  const handleChange = (e) => {
    setAppState({ ...appState, searchValue: e.target.value.toLowerCase() })
  }

  const handleClear = () => {
    setAppState({ ...appState, searchValue: '', sortBy: null })
  }

  const clearFilters = () => {
    if (appState.searchValue.length > 0 || appState.sortBy) {
      return (
        <div className={styles.wrapper}>
          <button className={styles.button} onClick={handleClear}>
            Очистить фильтр
          </button>
        </div>
      )
    }
  }

  return (
    <section className={styles.searchbar}>
      <input
        placeholder="Поиск по имени или e-mail"
        value={appState.searchValue}
        className={styles.input}
        type="text"
        onChange={handleChange}
        disabled={appState.loading ? true : false}
      />

      {clearFilters()}
    </section>
  )
}

export default SearchBar
