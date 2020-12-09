// packages
import React from 'react'
// styles
import styles from './Main.module.css'

const Main = ({ users }) => {
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
              return (
                <tr className={styles.row} key={user.id}>
                  <td className={styles.col}>{user.username}</td>
                  <td className={styles.col}>{user.email}</td>
                  <td className={styles.col}>{user.registration_date}</td>
                  <td className={styles.col}>{user.rating}</td>
                  <td className={styles.col}>
                    <button>x</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Main
