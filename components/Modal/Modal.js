// packages
import React, { useEffect } from 'react'
import ReactDom from 'react-dom'
// styles
import styles from './Modal.module.css'

const Modal = ({ appState, confirmHandler, declineHandler }) => {
  // return null if modal is not open
  if (!appState.modalIsOpen) {
    return null
  }

  // add event listner for clsoe modal on ESC
  useEffect(() => {
    document.addEventListener('keyup', (e) => {
      const key = e.key
      if (key === 'Escape' || key === 'Esc' || key === 27) declineHandler()
    })
  })

  // component will render inside root component
  return ReactDom.createPortal(
    <>
      <div className={styles.modal}>
        <p>Вы хотите удалить пользователя?</p>
        <button
          autoFocus
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
      <div
        className={styles.overlay}
        onClick={() => {
          declineHandler()
        }}></div>
    </>,

    document.getElementById('portal')
  )
}

export default Modal
