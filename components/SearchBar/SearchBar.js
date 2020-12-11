// packages
import React from 'react'
// styles
import styles from './SearchBar.module.css'

const SearchBar = ({ appState, setAppState }) => {
  // handle input change
  const handleChange = (e) => {
    setAppState({ ...appState, searchValue: e.target.value })
  }

  // handle clear button click
  const handleClear = () => {
    setAppState({ ...appState, searchValue: '', sortBy: null })
  }

  const clearFilters = () => {
    // return compoent if only if search query of sort parameter exists
    if (appState.searchValue.length > 0 || appState.sortBy) {
      return (
        <div className={styles.wrapper}>
          <button className={styles.button} onClick={handleClear}>
            Очистить фильтр
          </button>
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <section className={styles.searchbar}>
      <input
        label="Поиск по имени или e-mail"
        placeholder="Поиск по имени или e-mail"
        value={appState.searchValue}
        className={styles.input}
        type="text"
        onChange={handleChange}
        disabled={appState.loading || appState.error ? true : false}
      />

      {appState.error ? null : clearFilters()}
    </section>
  )
}

export default SearchBar
