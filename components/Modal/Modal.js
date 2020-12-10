// packages
import React from 'react'
import ReactDom from 'react-dom'
// styles
import styles from './Modal.module.css'

const Modal = ({ appState, setAppState }) => {
  const confirmHandler = () => {
    document.body.style.overflow = 'unset'
    setAppState({
      ...appState,
      modalIsOpen: false,
      blackList: [{ ...appState.blackList.push(appState.userForDelete) }],
    })
  }

  const declineHandler = () => {
    setAppState({
      ...appState,
      modalIsOpen: false,
      userForDelete: null,
    })
    document.body.style.overflow = 'unset'
  }

  if (!appState.modalIsOpen) {
    return null
  }
  return ReactDom.createPortal(
    <div className={styles.overlay} onClick={declineHandler}>
      <div className={styles.modal}>
        <p>Вы хотите удалить пользователя?</p>
        <button
          onClick={() => {
            confirmHandler()
          }}>
          Да
        </button>
        <button
          onClick={() => {
            declineHandler()
          }}>
          Нет
        </button>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal
