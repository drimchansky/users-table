// packages
import React from 'react'
// styles
import styles from './Main.module.css'

const Main = ({ appState }) => {
  return (
    <main className={styles.main}>
      <div className={styles.row}>
        Сортировка: <button>Дата регистрации</button> <button>Рейтинг</button>
      </div>
      <div className={styles.wrapper}>
        <table className={styles.table} border="1px">
          <tr className={styles.row}>
            <th className={styles.col}>Имя пользователя</th>
            <th className={styles.col}>E-mail</th>
            <th className={styles.col}>Дата регистрации</th>
            <th className={styles.col}>Рейтинг</th>
          </tr>
          <tr className={styles.row}>
            <td className={styles.col}>34,5</td>
            <td className={styles.col}>3,5</td>
            <td className={styles.col}>36</td>
            <td className={styles.col}>23</td>
          </tr>
        </table>
        {appState ? <span className={styles.loading}>Загрузка...</span> : ''}
        <div className={styles.loading}>Загрузка...</div>
      </div>
    </main>
  )
}

export default Main
