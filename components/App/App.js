// packages
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// components
import Container from '../Container'
import Header from '../Header'
import SearchBar from '../SearchBar'
import Main from '../Main'
// styles
import styles from './App.module.css'

const App = () => {
  const [appState, setAppState] = useState({ loading: true, error: false, blackList: [] })
  const [users, setUsers] = useState(null)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    axios.get('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users').then(
      ({ data }) => {
        setUsers(data)
        setTimeout(() => {
          setAppState({ ...appState, loading: false })
        }, 1000)
      },
      (error) => {
        appState({ error: true })
      }
    )
  }, [])

  const handlingArray = (arr, searchValue, sortBy) => {
    let resultArray

    // check erray exists
    if (arr) {
      // chack search value exists
      if (searchValue) {
        resultArray = arr.filter((item) => {
          return (
            item.username.toLowerCase().includes(searchValue) ||
            item.email.toLowerCase().includes(searchValue)
          )
        })
        return resultArray
      }
      // check sort parameter exists

      return arr
    }
  }

  const processedUsers = handlingArray(users, searchValue)

  return (
    <Container>
      <Header>Список пользователей</Header>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {appState.loading ? (
        <div className={styles.caption}>Загрузка...</div>
      ) : (
        <Main users={processedUsers} appState={appState} setAppState={setAppState} />
      )}
    </Container>
  )
}

export default App
