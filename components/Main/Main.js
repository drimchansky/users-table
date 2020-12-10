// packages
import React from 'react'
import { format } from 'date-fns'
import parseISO from 'date-fns/parseISO'
// components
import Modal from '../Modal'
// styles
import styles from './Main.module.css'

const Main = ({ users, appState, setAppState }) => {
  const clickHandler = (e) => {
    document.body.style.overflow = 'hidden'
    setAppState({ ...appState, modalIsOpen: true, userForDelete: e.target.value })
  }

  const deleteHandler = () => {
    setAppState({ ...appState, blackList: [...appState.blackList, id] })
  }

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

  return (
    <main className={styles.main}>
      <div className={styles.row}>
        Сортировка: <button onClick={() => sortHandler('DATE_ASC')}>Дата регистрации</button>
        <button onClick={() => sortHandler('RATING_ASC')}>Рейтинг</button>
      </div>
      <div className={styles.wrapper}>
        <table className={styles.table} border="1px">
          <tbody>
            <tr className={styles.row}>
              <th className={styles.col}>Имя пользователя</th>
              <th className={styles.col}>E-mail</th>
              <th className={styles.col}>Дата регистрации</th>
              <th className={styles.col}>Рейтинг</th>
              <th className={styles.col}></th>
            </tr>

            {users.map((user) => {
              if (!appState.blackList.includes(user.id)) {
                return (
                  <tr className={styles.row} key={user.id}>
                    <td className={styles.col}>{user.username}</td>
                    <td className={styles.col}>{user.email}</td>
                    <td className={styles.col}>
                      {format(parseISO(user.registration_date), 'd.M.yyyy')}
                    </td>
                    <td className={styles.col}>{user.rating}</td>
                    <td className={styles.col}>
                      <button value={user.id} onClick={clickHandler}>
                        x
                      </button>
                    </td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>
      <Modal appState={appState} setAppState={setAppState} />
    </main>
  )
}

export default Main
