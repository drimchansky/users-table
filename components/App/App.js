// packages
import React from 'react'
// components
import Container from '../Container'
import Header from '../Header'
import SearchBar from '../SearchBar'
// api
import fetchUsers from '../../api/fetchUsers'

const App = () => {
  return (
    <Container>
      <Header>Список пользователей</Header>
      <SearchBar />
    </Container>
  )
}

export default App
