// packages
import React from 'react'
import ReactDom from 'react-dom'
// styles
import styles from './Modal.module.css'

const Modal = ({ appState, setAppState }) => {
  const confirmHandler = () => {
    console.log(appState)
    document.body.style.overflow = 'unset'
    setAppState({
      ...appState,
      blackList: [...appState.blackList, appState.userForDelete],
      modalIsOpen: false,
      userForDelete: null,
    })
  }

  if (!appState.modalIsOpen) {
    return null
  }
  return ReactDom.createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>Вы хотите удалить пользователя?</p>
        <button
          onClick={() => {
            confirmHandler()
          }}>
          Да
        </button>
        <button>Нет</button>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal
