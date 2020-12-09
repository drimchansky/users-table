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

  console.log(appState)

  useEffect(() => {
    axios.get('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users').then(
      (response) => {
        setUsers(response)
        setTimeout(() => {
          setAppState({ ...appState, loading: false })
        }, 1000)
      },
      (error) => {
        appState({ error: true })
      }
    )
  }, [])

  const handlingArray = (arr, filterBy, sortBy) => {
    if (arr) {
      return arr
    }
  }

  const processedUsers = handlingArray(users)

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
