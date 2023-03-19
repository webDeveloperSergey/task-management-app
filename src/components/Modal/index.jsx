import React from 'react'

import {CreateTask} from '../CreateTask'

import styles from './Modal.module.css'
import closeIc from './img/close.svg'

export const Modal = ({ toggleModel }) => {

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img 
          onClick={toggleModel} 
          className={styles.closeIc} 
          src={closeIc} 
          alt='Close Icon' 
        />

        <CreateTask toggleModel={toggleModel} />
      </div>
    </div>
  )
}
