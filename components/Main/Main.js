// packages
import React from 'react'
import { format } from 'date-fns'
import parseISO from 'date-fns/parseISO'
// components
import Modal from '../Modal'
// styles
import styles from './Main.module.css'

const Main = ({ users, appState, setAppState }) => {
  // handle click on delete button
  const clickHandler = (e) => {
    document.body.style.overflow = 'hidden'
    setAppState({ ...appState, modalIsOpen: true, userForDelete: e.target.value })
  }

  // handle sort buttons, define wich one will'be apply
  const sortHandler = (type) => {
    if (type === 'DATE_ASC' && appState.sortBy === 'DATE_ASC') {
      let newType = 'DATE_DESC'
      setAppState({ ...appState, sortBy: newType })
    } else if (type === 'RATING_ASC' && appState.sortBy === 'RATING_ASC') {
      let newType = 'RATING_DESC'
      setAppState({ ...appState, sortBy: newType })
    } else {
      setAppState({ ...appState, sortBy: type })
    }
  }

  // confirm delete user handler for modal
  const confirmHandler = () => {
    console.log(appState)
    document.body.style.overflow = 'unset'
    setAppState({
      ...appState,
      modalIsOpen: false,
      blackList: [...appState.blackList, appState.userForDelete],
    })
    console.log(appState)
  }

  // decline delete user for modal
  const declineHandler = () => {
    setAppState({
      ...appState,
      modalIsOpen: false,
      userForDelete: null,
    })
    document.body.style.overflow = 'unset'
  }

  // no render component if errors occured
  if (appState.error) {
    return null
  }

  return (
    <main className={styles.main}>
      <div className={`${styles.row} ${styles.sort}`}>
        Сортировка:{' '}
        <button onClick={() => sortHandler('DATE_ASC')}>
          <span
            className={
              // set active class to sort button
              appState.sortBy === 'DATE_ASC' || appState.sortBy === 'DATE_DESC' ? styles.active : ''
            }>
            Дата регистрации
          </span>
        </button>
        <button onClick={() => sortHandler('RATING_ASC')}>
          <span
            className={
              // set active class to sort button
              appState.sortBy === 'RATING_ASC' || appState.sortBy === 'RATING_DESC'
                ? styles.active
                : ''
            }>
            Рейтинг
          </span>
        </button>
      </div>
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <tbody>
            <tr className={`${styles.row} ${styles.title}`}>
              <th className={styles.col}>Имя пользователя</th>
              <th className={styles.col}>E-mail</th>
              <th className={styles.col}>Дата регистрации</th>
              <th className={styles.col}>Рейтинг</th>
              <th className={styles.col}></th>
            </tr>

            {/* render users */}
            {users.map((user) => {
              if (!appState.blackList.includes(user.id)) {
                return (
                  <tr className={styles.row} key={user.id}>
                    <td className={`${styles.col} ${styles.user}`}>{user.username}</td>
                    <td className={`${styles.col} ${styles.cell}`}>{user.email}</td>
                    <td className={`${styles.col} ${styles.cell}`}>
                      {format(parseISO(user.registration_date), 'dd.MM.yyyy')}
                    </td>
                    <td className={`${styles.col} ${styles.cell}`}>{user.rating}</td>
                    <td className={styles.col}>
                      <button
                        aria-label="Удалить пользователя"
                        className={styles.button}
                        value={user.id}
                        onClick={clickHandler}></button>
                    </td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>
      {/* place modal here for useful props passing, will be render in root component by portal */}
      <Modal appState={appState} confirmHandler={confirmHandler} declineHandler={declineHandler} />
    </main>
  )
}

export default Main
