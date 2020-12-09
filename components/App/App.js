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
  const [appState, setAppState] = useState({ loading: true, error: false })
  const [users, setUsers] = useState(null)
  const [blackList, setBlackList] = useState([])

  useEffect(() => {
    axios.get('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users').then(
      (response) => {
        setUsers(response)
        setTimeout(() => {
          setAppState({ loading: false })
        }, 1000)
      },
      (error) => {
        appState({ error: true })
      }
    )
  }, [])

  return (
    <Container>
      <Header>Список пользователей</Header>
      <SearchBar />
      {appState.loading ? (
        <div className={styles.caption}>Загрузка...</div>
      ) : (
        <Main users={users} blackList={blackList} setBlackList={setBlackList} />
      )}
    </Container>
  )
}

export default App
