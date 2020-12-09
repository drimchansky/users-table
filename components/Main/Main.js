// packages
import React from 'react'
import { format } from 'date-fns'
import parseISO from 'date-fns/parseISO'
// styles
import styles from './Main.module.css'

const Main = ({ users, blackList, setBlackList }) => {
  const deleteHandler = (id) => {
    setBlackList([...blackList, id])
  }

  return (
    <main className={styles.main}>
      <div className={styles.row}>
        Сортировка: <button>Дата регистрации</button> <button>Рейтинг</button>
      </div>
      <div className={styles.wrapper}>
        <table className={styles.table} border="1px">
          <tbody>
            <tr className={styles.row}>
              <th className={styles.col}>
                <button>Имя пользователя</button>
              </th>
              <th className={styles.col}>
                <button>E-mail</button>
              </th>
              <th className={styles.col}>
                <button>Дата регистрации</button>
              </th>
              <th className={styles.col}>
                <button>Рейтинг</button>
              </th>
              <th className={styles.col}></th>
            </tr>

            {users.data.map((user) => {
              if (!blackList.includes(user.id)) {
                return (
                  <tr className={styles.row} key={user.id}>
                    <td className={styles.col}>{user.username}</td>
                    <td className={styles.col}>{user.email}</td>
                    <td className={styles.col}>
                      {format(parseISO(user.registration_date), 'd.M.yyyy')}
                    </td>
                    <td className={styles.col}>{user.rating}</td>
                    <td className={styles.col}>
                      <button
                        onClick={() => {
                          deleteHandler(user.id)
                        }}>
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
    </main>
  )
}

export default Main
