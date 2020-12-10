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
  const [appState, setAppState] = useState({
    loading: true,
    error: false,
    blackList: [],
    sortBy: null,
    modalIsOpen: false,
    userForDelete: null,
  })

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
    let resultArray = arr

    // check search value exists
    if (searchValue) {
      // search functionality
      resultArray = arr.filter((item) => {
        return (
          item.username.toLowerCase().includes(searchValue) ||
          item.email.toLowerCase().includes(searchValue)
        )
      })
    }

    // check sort value exists
    if (sortBy) {
      switch (sortBy) {
        case 'DATE_ASC':
          resultArray.sort((a, b) => {
            if (a.registration_date < b.registration_date) {
              return -1
            }
            if (a.registration_date > b.registration_date) {
              return 1
            }
            return 0
          })
          break

        case 'DATE_DESC':
          resultArray.sort((a, b) => {
            if (a.registration_date < b.registration_date) {
              return 1
            }
            if (a.registration_date > b.registration_date) {
              return -1
            }
            return 0
          })
          break

        case 'RATING_ASC':
          resultArray.sort((a, b) => {
            if (a.rating < b.rating) {
              return 1
            }
            if (a.rating > b.rating) {
              return -1
            }
            return 0
          })
          break

        case 'RATING_DESC':
          resultArray.sort((a, b) => {
            if (a.rating < b.rating) {
              return -1
            }
            if (a.rating > b.rating) {
              return 1
            }
            return 0
          })
          break
      }
    }

    return resultArray
  }

  const processedUsers = handlingArray(users, searchValue, appState.sortBy)

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
